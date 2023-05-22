/**
 *
 *  This is the desktop nav
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import { FADES } from "@/assets/data/variables/ARRAYS";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = () => {
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
    <nav id="desktopNav" className={`${styles.desktop_nav} desktop-nav`}>
      <motion.div
        className={`${styles.motion} fm-motion fade-in full-second`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        // isMobile = true - Fade In
        // isMobile = false - Fade Up
        variants={isMobile ? FADES[0] : FADES[0]}
      >
        <div className={`${styles.desktop_nav_inner}`}>
          <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
            <div className={`${styles.desktop_nav_inner_row} row`}>
              <div
                className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
              >
                <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                  <ul>
                    <li>
                      <a href="/" className="half-second index-link">
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="/projects" className="half-second projects-link">
                        <span>Projects</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_M} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
              >
                <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                  <div className={`${styles.logo}`}>
                    <a href="/" className="half-second index-link">
                      <h1>codingthefront</h1>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
              >
                <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                  <ul>
                    <li>
                      <a href="/info" className="half-second info-link">
                        <span>Info</span>
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="half-second contact-link">
                        <span>Contact</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
