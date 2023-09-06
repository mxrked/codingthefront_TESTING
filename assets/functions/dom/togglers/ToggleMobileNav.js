/**
 *
 *  This is used to toggle the mobile nav menu
 *
 */

import DeclareStorageVariable from "../../data/storage/DeclareStorageVariable";

export default function ToggleMobileNav() {
  const DARKEN = document.getElementById("mobileNavMenuDarken");
  const MAIN = document.getElementById("mobileNavMenuMain");

  DeclareStorageVariable("session", "Mobile Nav Opened", true);

  document.body.style.pointerEvents = "none";
  document.body.style.overflowY = "hidden";
}
