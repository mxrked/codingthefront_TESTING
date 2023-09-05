// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";

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

  return (
    <div id="PAGE" className="overrides_Index page full-second">
      <PageHead />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
