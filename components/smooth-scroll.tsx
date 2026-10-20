"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;

    const syncMotionPreference = () => {
      if (reducedMotion.matches) {
        lenis?.destroy();
        lenis = undefined;
        return;
      }

      if (!lenis) lenis = new Lenis({ autoRaf: true, anchors: true });
    };

    syncMotionPreference();
    reducedMotion.addEventListener("change", syncMotionPreference);

    return () => {
      reducedMotion.removeEventListener("change", syncMotionPreference);
      lenis?.destroy();
    };
  }, []);

  return null;
}
