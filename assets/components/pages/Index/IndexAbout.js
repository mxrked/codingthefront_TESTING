/**
 *
 *  This is the Index Top
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundImage } from "react-image-and-background-image-fade";
import { ABOUT_BG, WAVE } from "@/assets/cdns/CDNBgs";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import { FADE_LEFT, FADE_RIGHT, FADE_UP } from "@/assets/animations/FADES";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexAbout = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="indexAbout"
      className={`${styles.index_about} overrides_IndexAbout`}
    >
      <div className={`${styles.index_about_inner}`}>
        <div className={`${styles.index_about_inner_box} container-fluid`}>
          <div className={`${styles.index_about_inner_row} row`}>
            <div
              className={`${styles.index_about_inner_side} ${styles.index_about_L} col-lg-5 col-md-5 col-sm-5 col-xs-12`}
            >
              <motion.div
                ref={REF}
                initial="hidden"
                animate={CONTROLS}
                variants={FADE_RIGHT}
                className={`${styles.index_about_inner_side_cnt} fm-motion fade-right fade-right-fix full-second`}
              >
                <div className={`${styles.bg_holder}`}>
                  <BackgroundImage
                    src={ABOUT_BG}
                    className={`${styles.bg}`}
                    width="100%"
                    height="100%"
                  />

                  <div className={`${styles.wave}`}>
                    <BackgroundImage
                      src={WAVE}
                      width="100%"
                      height="100%"
                      className={`${styles.wave_bg}`}
                    />
                  </div>

                  <div className={`${styles.darken}`} />
                </div>
              </motion.div>
            </div>
            <div
              className={`${styles.index_about_inner_side} ${styles.index_about_R} col-lg-7 col-md-7 col-sm-7 col-xs-12`}
            >
              <motion.div
                ref={REF}
                initial="hidden"
                animate={CONTROLS}
                variants={FADE_LEFT}
                className={`${styles.index_about_inner_side_cnt} fm-motion fade-left fade-left-fix full-second`}
              >
                <div className={`${styles.index_about_inner_side_cnt_text}`}>
                  <span
                    className={`${styles.heading} orientation-change-element half-second`}
                  >
                    About<span> </span>
                    <br />
                    <span className={`${styles.blue_text}`}>Myself</span>.
                  </span>

                  <p className="orientation-change-element half-second">
                    I have dedicated my life to become a Web Developer and
                    Software Engineer. My story is quite the inspiring one.
                  </p>

                  <ul>
                    <li>
                      <a
                        href="/contact"
                        className={`${styles.contact_link} orientation-change-element half-second`}
                      >
                        <span>Book A Project</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/info"
                        className={`${styles.info_link} orientation-change-element half-second`}
                      >
                        <span>Learn More</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
