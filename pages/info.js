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
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";

import { InfoTop } from "@/assets/components/pages/Info/InfoTop";
import { InfoMain } from "@/assets/components/pages/Info/InfoMain";

import { Footer } from "@/assets/components/global/Footer/Footer";

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
      <MobileNav />
      <MobileNavMenu />

      <main id="PAGE_CNT">
        <InfoTop />
        <InfoMain />
        <Footer />
      </main>
    </div>
  );
}
