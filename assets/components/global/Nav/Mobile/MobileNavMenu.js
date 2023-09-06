/**
 *
 *  This is the Mobile Nav
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FaCode, FaTimes } from "react-icons/fa";
import { FADE_IN } from "@/assets/animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNavMenu = (props) => {
  const router = useRouter();

  return (
    <div
      id="mobileNavMenu"
      className={`${styles.mobile_nav_menu} overrides_MobileNavMenu`}
    >
      <div
        className={`${styles.darken} full-second`}
        id="mobileNavMenuDarken"
      />

      <div
        className={`${styles.mobile_nav_menu_main} full-second`}
        id="mobileNavMenuMain"
      >
        <div className={`${styles.mobile_nav_menu_main_inner}`}>
          <div
            className={`${styles.mobile_nav_menu_main_inner_cnt} half-second`}
            id="mobileNavMenuCnt"
          >
            <FaCode
              className={`${styles.icon} orientation-change-element half-second`}
            />

            <button
              id="mobileNavCloser"
              className="orientation-change-element half-second"
            >
              <FaTimes className={`${styles.icon}`} />
            </button>

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
  );
};
