// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";

// Style Imports
import "../assets/styles/modules/404/404.module.css";

export default function NotFound() {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations(router);
  }, []);

  return (
    <div id="PAGE" className="overrides_404 page full-second">
      <PageHead />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
