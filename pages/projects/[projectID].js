// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";

// Style Imports
import "../../assets/styles/modules/Projects/Projects.module.css";

const DATA_URL =
  "https://raw.githubusercontent.com/mxrked/codingthefront_2024_CDN/main/files/json/PROJECTS.json";
export async function getStaticPaths() {
  try {
    const ALL_PROJECTS = await fetch(
      "https://raw.githubusercontent.com/mxrked/codingthefront_2024_CDN/main/files/json/PROJECTS.json"
    );

    if (!ALL_PROJECTS.ok) {
      throw new Error("Failed to fetch data from the JSON endpoint");
    }

    // Parsing the data
    const ALL_PROJECTS_DATA = await ALL_PROJECTS.json();

    // Generating all project pages/paths
    const paths = ALL_PROJECTS_DATA.map((item) => ({
      params: { projectID: item.projectID },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching index browse data:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps(context) {
  const { params } = context;

  // Getting the link for the JSON
  try {
    const ALL_PROJECTS = await fetch(
      "https://raw.githubusercontent.com/mxrked/codingthefront_2024_CDN/main/files/json/PROJECTS.json"
    );

    if (!ALL_PROJECTS.ok) {
      throw new Error("Failed to fetch data from the JSON endpoint");
    }

    // Parsing the data
    const ALL_PROJECTS_DATA = await ALL_PROJECTS.json();

    // Finding the specific item using projectID
    const PROJECT = ALL_PROJECTS_DATA.find(
      (item) => item.projectID === params.projectID
    );

    // If no dog, throw error
    if (!PROJECT) {
      throw new Error(`Project with ID "${params.projectID}" not found`);
    }

    // Returning the props
    return {
      props: {
        PROJECT,
      },
    };
  } catch (error) {
    console.error("Error fetching index browse data:", error);
    return {
      props: {
        PROJECT: null, // Assign null in case of an error
      },
    };
  }
}

export default function Projects({ PROJECT }) {
  const router = useRouter();

  return (
    <div id="PAGE" className="overrides_Projects page full-second">
      <DesktopNav disableLink="/projects" />
      <MobileNav disableLink="/projects" />
      <MobileNavMenu disableLink="/projects" />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
