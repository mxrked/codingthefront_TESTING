/**
 *
 *  This is the Back to Top btn
 *
 */

import { useEffect } from "react";

import { FaCaretUp } from "react-icons/fa";

import styles from "../../../styles/modules/All/All.module.css";

export const Back2Top = () => {
  function detectB2T() {
    if (window.scrollY <= 500) {
      document.getElementById("back2Top").style.bottom = "-100%";
    } else {
      document.getElementById("back2Top").style.bottom = "20px";
    }
  }

  useEffect(() => {
    window.addEventListener("load", () => {
      detectB2T();
    });

    window.addEventListener("scroll", () => {
      detectB2T();
    });
  }, []);

  return (
    <button
      id="back2Top"
      className={`${styles.back_to_top} half-second`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <FaCaretUp className={`${styles.icon}`} />
    </button>
  );
};
