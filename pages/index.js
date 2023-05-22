/**
 *
 * This is the Index Page
 *
 */

import { useRouter } from "next/router";

import { PageHead } from "@/assets/components/global/All/PageHead";

import styles from "../assets/styles/modules/Index/Index.module.css";

export default function Index() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page overrides_Index full-second">
      <PageHead />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
