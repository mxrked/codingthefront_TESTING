/**
 *
 *  This is the index top
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { BackgroundImage } from "react-image-and-background-image-fade";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import { FADES } from "@/assets/data/variables/ARRAYS";
import {
  BG_INDEX_TOP,
  BG_INDEX_SCRATCHED_RECOLORED,
} from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTop = () => {
  const [isMobile, setIsMobile] = useState(false); // This is used to indicate if the variant needs to be changed

  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  //! Changing Variant based on device size
  useEffect(() => {
    // Fade In
    if (window.innerWidth <= 1024) {
      setIsMobile(true);
    }

    // Fade Up
    if (window.innerWidth > 1024) {
      setIsMobile(false);
    }
  }, [router]);

  return (
    <section id="indexTop" className={`${styles.index_top} overrides_IndexTop`}>
      <motion.div
        className={`${styles.motion} fm-motion fade-in full-second`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        // isMobile = true - Fade In
        // isMobile = false - Fade Up
        variants={isMobile ? FADES[0] : FADES[0]}
      >
        <BackgroundImage
          src={BG_INDEX_TOP}
          className={`${styles.bg}`}
          width="100%"
          height="100%"
        />

        <div className={`${styles.index_top_overlay}`}>
          <div className={`${styles.index_top_overlay_cnt}`}>
            <span className={`${styles.top_text} half-second`}>
              Hi, My name is Parker.
            </span>

            <h1 className="half-second">I am a Web Developer.</h1>

            <ul>
              <li>
                <a href="/projects" className="half-second">
                  <span>Projects</span>
                </a>
              </li>
              <li className={`${styles.info_link}`}>
                <a href="/info" className="half-second">
                  <span>Info</span>
                </a>
              </li>
              <li>
                <a href="/contact" className="half-second">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
