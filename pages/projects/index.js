// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";
import { Back2Top } from "@/assets/components/global/All/Back2Top";

// Style Imports
import "../../assets/styles/modules/Projects/Projects.module.css";

export default function Projects() {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations(router);
  }, []);

  return (
    <div id="PAGE" className="overrides_Projects page full-second">
      <PageHead />
      <DesktopNav disableLink="/projects" />
      <MobileNav disableLink="/projects" />
      <MobileNavMenu disableLink="/projects" />

      <Back2Top />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
