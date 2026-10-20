import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Location de voiture au Maroc | Carrental.ma",
  description:
    "Louez une voiture au Maroc en toute simplicité. Découvrez le service Carrental.ma et préparez votre prochain trajet.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
