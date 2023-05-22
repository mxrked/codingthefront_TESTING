/**
 *
 * This is the Projects Page
 *
 */

import { useRouter } from "next/router";

import { PageHead } from "@/assets/components/global/All/PageHead";

import styles from "../assets/styles/modules/Projects/Projects.module.css";

export default function Projects() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page overrides_Projects full-second">
      <PageHead />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
