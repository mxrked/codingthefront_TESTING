/**
 *
 * This is the 404 Page
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { PageHead } from "@/assets/components/global/All/PageHead";

import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";

import styles from "../assets/styles/modules/404/404.module.css";

export default function NotFound() {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="page overrides_404 full-second">
      <PageHead />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
