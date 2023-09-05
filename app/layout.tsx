import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wynajem - Kobierzyce",
  description:
    "Wynajem mieszkania, lokali, noclegu w miejscowości Wiezrzbice, gmina Kobierzyce - niedaleko Bielany Wrocławskie, Kąty Wrocławskie i Wrocław. Krótkoterminowo i długoterminowo",
  colorScheme: "dark",
  keywords: ["Kobierzyce", "Wrocławskie", "Wynajem", "Nocleg"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
