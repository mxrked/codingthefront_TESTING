/**
 *
 * This is the Projects Page
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { PageHead } from "@/assets/components/global/All/PageHead";

import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";

import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";

import styles from "../assets/styles/modules/Projects/Projects.module.css";

export default function Projects() {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="page overrides_Projects full-second">
      <PageHead />

      <DesktopNav />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
