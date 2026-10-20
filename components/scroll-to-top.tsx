"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 400);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Revenir en haut de la page"
      className="fixed bottom-5 right-5 z-50 flex size-12 items-center justify-center rounded-full bg-[#084ea3] text-white shadow-lg transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-[#1d336b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#084ea3] sm:bottom-7 sm:right-7"
    >
      <ArrowUp aria-hidden="true" className="size-5" />
    </button>
  );
}
