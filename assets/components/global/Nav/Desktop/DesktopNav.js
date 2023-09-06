/**
 *
 *  This is the Desktop Nav
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

export const DesktopNav = (props) => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <nav id="desktopNav" className={`${styles.desktop_nav} desktop-nav`}>
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.desktop_nav_inner}`} id="desktopNavInner">
          <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
            <div className={`${styles.desktop_nav_inner_row} row`}>
              <div
                className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
              >
                <div className={`${styles.desktop_nav_inner_side_cnt}`}>
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
                      <a
                        href="/"
                        className="orientation-change-element half-second"
                      >
                        <FaCode
                          className={`${styles.icon} orientation-change-element half-second`}
                        />

                        <span className="orientation-change-element half-second">
                          codingthefront
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div
                className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-8 col-md-8 col-sm-8 col-xs-8`}
              >
                <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                  <ul>
                    {props.disableLink == "/" ? (
                      <li>
                        <span
                          className={`${styles.deactive} orientation-change-element half-second`}
                        >
                          Home
                        </span>
                      </li>
                    ) : (
                      <li>
                        <a
                          href="/"
                          className={`${styles.active} orientation-change-element half-second`}
                        >
                          <span>Home</span>
                        </a>
                      </li>
                    )}
                    {props.disableLink == "/projects" ? (
                      <li>
                        <span
                          className={`${styles.deactive} orientation-change-element half-second`}
                        >
                          Projects
                        </span>
                      </li>
                    ) : (
                      <li>
                        <a
                          href="/projects"
                          className={`${styles.active} orientation-change-element half-second`}
                        >
                          <span>Projects</span>
                        </a>
                      </li>
                    )}
                    {props.disableLink == "/info" ? (
                      <li>
                        <span
                          className={`${styles.deactive} orientation-change-element half-second`}
                        >
                          About
                        </span>
                      </li>
                    ) : (
                      <li>
                        <a
                          href="/info"
                          className={`${styles.active} orientation-change-element half-second`}
                        >
                          <span>About</span>
                        </a>
                      </li>
                    )}
                    {props.disableLink == "/contact" ? (
                      <li>
                        <span
                          className={`${styles.deactive} orientation-change-element half-second`}
                        >
                          Contact
                        </span>
                      </li>
                    ) : (
                      <li>
                        <a
                          href="/contact"
                          className={`${styles.active} orientation-change-element half-second`}
                        >
                          <span>Contact</span>
                        </a>
                      </li>
                    )}
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
