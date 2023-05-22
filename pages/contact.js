/**
 *
 * This is the Contact Page
 *
 */

import { useRouter } from "next/router";

import { PageHead } from "@/assets/components/global/All/PageHead";

import styles from "../assets/styles/modules/Contact/Contact.module.css";

export default function Contact() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page overrides_Contact full-second">
      <PageHead />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
