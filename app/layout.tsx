import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TravelTrucks",
  description:
    "Find and rent the perfect camper van for your next adventure. Explore our catalog of fully equipped travel trucks, view features, and book your road trip today.",
  icons: {
    icon: {
      url: "/favicon.png",
    },
  },
  openGraph: {
    title: "TravelTrucks",
    description:
      "Find and rent the perfect camper van for your next adventure.",
    images: [
      {
        url: "/images/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "TravelTrucks camper rental preview",
      },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable}`} data-theme="light">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const savedTheme = localStorage.getItem("theme") || "light";
              document.documentElement.setAttribute("data-theme", savedTheme);
            `,
          }}
        />
      </head>
      <body>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
          <Toaster />
        </TanStackProvider>
      </body>
    </html>
  );
}
