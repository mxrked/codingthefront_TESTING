/**
 *
 * This is the Info Page
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { PageHead } from "@/assets/components/global/All/PageHead";

import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";

import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";

import styles from "../assets/styles/modules/Info/Info.module.css";

export default function Info() {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="page overrides_Info full-second">
      <PageHead />

      <DesktopNav />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
