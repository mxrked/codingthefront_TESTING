/**
 *
 *  This is the Index Top
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import { FADE_IN } from "@/assets/animations/FADES";
import { INDEX_TOP_VIDEO } from "@/assets/cdns/CDNVideos";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTop = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section id="indexTop" className={`${styles.index_top} overrides_IndexTop`}>
      <video src={INDEX_TOP_VIDEO} muted loop autoPlay={true}></video>

      <div className={`${styles.overlay} half-second`}>
        <motion.div
          className={`${styles.overlay_cnt} fm-motion full-second fade-in fade-in-fix`}
          ref={REF}
          initial="hidden"
          animate={CONTROLS}
          variants={FADE_IN}
        >
          <span
            className={`${styles.top_text} orientation-change-element half-second`}
          >
            Hi, My name is Parker.
          </span>

          <h1 className="orientation-change-element half-second">
            I am a Web Developer.
          </h1>

          <p className="orientation-change-element half-second">
            With 5+ years of experience, I have what it takes to build you the
            website of your dreams.
          </p>

          <ul>
            <li>
              <a
                href="/info"
                className={`${styles.info_link} orientation-change-element half-second`}
              >
                <span>About Me</span>
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className={`${styles.projects_link} orientation-change-element half-second`}
              >
                <span>My Projects</span>
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
