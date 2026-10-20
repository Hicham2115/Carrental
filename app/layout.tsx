import type { Metadata } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "Location de voiture au Maroc | Carrental.ma",
  description:
    "Louez une voiture au Maroc en toute simplicité. Découvrez le service Carrental.ma et préparez votre prochain trajet.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
