// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";

// Style Imports
import "../../assets/styles/modules/Projects/Projects.module.css";

export default function Projects() {
  const router = useRouter();

  return (
    <div id="PAGE" className="overrides_Projects page full-second">
      <PageHead />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
