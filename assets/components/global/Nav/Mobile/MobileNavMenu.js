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

export const MobileNavMenu = (props) => {
  const router = useRouter();

  return (
    <div
      id="mobileNavMenu"
      className={`${styles.mobile_nav_menu} overrides_MobileNavMenu`}
    ></div>
  );
};
