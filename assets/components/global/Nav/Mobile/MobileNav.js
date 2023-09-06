/**
 *
 *  This is the Mobile Nav
 *
 */
import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FaCode } from "react-icons/fa";
import { FADE_IN } from "@/assets/animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNav = (props) => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <nav className={`${styles.mobile_nav} overrides_MobileNav`}>
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.mobile_nav_inner}`} id="mobileNavInner">
          <div className={`${styles.mobile_nav_inner_cnt}`}>
            {props.disableLink == "/" ? (
              <div
                className={`${styles.logo} ${styles.deactive} orientation-change-element half-second`}
              >
                <FaCode
                  className={`${styles.icon} orientation-change-element half-second`}
                />

                <span className="orientation-change-element half-second">
                  codingthefront
                </span>
              </div>
            ) : (
              <div
                className={`${styles.logo} ${styles.active} orientation-change-element half-second`}
              >
                <a href="/" className="orientation-change-element half-second">
                  <FaCode
                    className={`${styles.icon} orientation-change-element half-second`}
                  />

                  <span className="orientation-change-element half-second">
                    codingthefront
                  </span>
                </a>
              </div>
            )}

            <button id="mobileNavToggler">
              <span className="orientation-change-element half-second" />
              <span className="orientation-change-element half-second" />
              <span className="orientation-change-element half-second" />
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
