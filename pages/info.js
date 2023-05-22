/**
 *
 * This is the Info Page
 *
 */

import { useRouter } from "next/router";

import { PageHead } from "@/assets/components/global/All/PageHead";

import styles from "../assets/styles/modules/Info/Info.module.css";

export default function Info() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page overrides_Info full-second">
      <PageHead />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
