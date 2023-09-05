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
            <div className={`${styles.logo}`}>
              <a href="/" className="index-link half-second">
                <FaCode className={`${styles.icon}`} />

                <span>codingthefront</span>
              </a>
            </div>

            <button id="mobileNavToggler">
              <span className="half-second" />
              <span className="half-second" />
              <span className="half-second" />
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
