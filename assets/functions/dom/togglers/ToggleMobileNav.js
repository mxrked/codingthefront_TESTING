/**
 *
 *  This is used to toggle the mobile nav menu
 *
 */

import DeclareStorageVariable from "../../data/storage/DeclareStorageVariable";

export default function ToggleMobileNav() {
  const DARKEN = document.getElementById("mobileNavMenuDarken");
  const MAIN = document.getElementById("mobileNavMenuMain");
  const CNT = document.getElementById("mobileNavMenuCnt");

  DeclareStorageVariable("session", "Mobile Nav Opened", true);

  document.body.style.pointerEvents = "none";
  document.body.style.overflowY = "hidden";

  setTimeout(() => {
    DARKEN.style.opacity = 1;
    DARKEN.style.visibility = "visible";
  }, 600);

  setTimeout(() => {
    MAIN.style.transform = "translateX(0)";
  }, 800);

  setTimeout(() => {
    CNT.style.opacity = 1;
    CNT.style.visibility = "visible";
  }, 1300);

  setTimeout(() => {
    DARKEN.style.pointerEvents = "auto";
    MAIN.style.pointerEvents = "auto";
    MAIN.style.overflowY = "auto";
  }, 2200);
}
