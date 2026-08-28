import Hero from "@/components/Hero/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TravelTrucks | Camper Rental",
  description: "Find and rent the perfect campervan for your next adventure.",
};

export default function Home() {
  return <Hero />;
}
