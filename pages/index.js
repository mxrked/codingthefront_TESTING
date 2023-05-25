/**
 *
 * This is the Index Page
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { PageHead } from "@/assets/components/global/All/PageHead";

import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";

import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { IndexTop } from "@/assets/components/pages/Index/IndexTop";

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

      <DesktopNav />
      <MobileNav />

      <main id="PAGE_CNT">
        <IndexTop />
      </main>
    </div>
  );
}
