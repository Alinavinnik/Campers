import Sidebar from "@/components/Sidebar/Sidebar";
import css from "./CatalogPage.module.css";
import CatalogContent from "@/components/Catalog/CatalogContent/CatalogContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camper Catalog | TravelTrucks",
  description:
    "Browse and filter campervans by location, vehicle type, engine, and transmission.",
};

export default function CatalogPage() {
  return (
    <section>
      <h1 className={css.visuallyHidden}>Catalog</h1>

      <div className={`container ${css.catalogWrapper}`}>
        <Sidebar />

        <div className={css.content}>
          <div className={css.emptyState}>
            <CatalogContent />
          </div>
        </div>
      </div>
    </section>
  );
}
