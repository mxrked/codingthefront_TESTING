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

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export const getStaticProps = async () => {
  const INDEX_PROJECTS_RES = await fetch(
    "https://raw.githubusercontent.com/mxrked/codingthefront_2024_CDN/main/files/json/INDEX_PROJECTS.json"
  );

  const INDEX_PROJECTS_RES_DATA = await INDEX_PROJECTS_RES.json();

  return {
    props: {
      index_projects_data: INDEX_PROJECTS_RES_DATA,
    },
  };
};

export default function Home({ index_projects_data }) {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="overrides_Index page full-second">
      <PageHead />
      <DesktopNav disableLink="/" />
      <MobileNav disableLink="/" />
      <MobileNavMenu disableLink="/" />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
