// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";

// Style Imports
import "../../assets/styles/modules/Projects/Projects.module.css";

export default function Projects() {
  const router = useRouter();

  return (
    <div id="PAGE" className="overrides_Projects page full-second">
      <PageHead />
      <DesktopNav disableLink="/projects" />
      <MobileNav disableLink="/projects" />
      <MobileNavMenu disableLink="/projects" />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
