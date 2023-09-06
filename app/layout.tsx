import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wynajem - Kobierzyce | Kwatery pracownicze, lokale",
  description:
    "Wynajem mieszkania, noclegu, lokalu w miejscowości Wiezrzbice, gmina Kobierzyce - niedaleko Bielany Wrocławskie, Kąty Wrocławskie i Wrocław.",
  colorScheme: "dark",
  keywords: [
    "Kobierzyce",
    "Wrocławskie",
    "Wynajem",
    "Nocleg",
    "Kwatery",
    "Mieszkanie",
  ],
  openGraph: {
    title: "Wynajem - Kobierzyce | Kwatery pracownicze, lokale",
    description:
      "Wynajem mieszkania, noclegu, lokalu w miejscowości Wiezrzbice, gmina Kobierzyce - niedaleko Bielany Wrocławskie, Kąty Wrocławskie i Wrocław.",
    type: "article",
    url: "https://www.nocleg-kobierzyce.pl",
    images: [
      {
        url: "https://www.nocleg-kobierzyce.pl/api/og?title= Wynajem - Kobierzyce | Kwatery pracownicze, lokale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.nocleg-kobierzyce.pl",
    title: "Wynajem - Kobierzyce | Kwatery pracownicze, lokale",
    description:
      "Wynajem mieszkania, noclegu, lokalu w miejscowości Wiezrzbice, gmina Kobierzyce - niedaleko Bielany Wrocławskie, Kąty Wrocławskie i Wrocław.",
    images: [
      "https://www.nocleg-kobierzyce.pl/api/og?title=Wynajem - Kobierzyce | Kwatery pracownicze, lokale",
    ],
  },
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
