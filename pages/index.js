/**
 *
 * This is the Index Page
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { PageHead } from "@/assets/components/global/All/PageHead";

import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";

import styles from "../assets/styles/modules/Index/Index.module.css";

export default function Index() {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="page overrides_Index full-second">
      <PageHead />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
