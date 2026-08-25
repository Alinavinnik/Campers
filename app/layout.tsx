import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Travel Tracks",
  description:
    "Find and rent the perfect camper van for your next adventure. Explore our catalog of fully equipped travel trucks, view features, and book your road trip today.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
