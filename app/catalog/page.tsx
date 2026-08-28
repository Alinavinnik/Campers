import Sidebar from "@/components/Sidebar/Sidebar";
import css from "./CatalogPage.module.css";
import CatalogContent from "@/components/Catalog/CatalogContent/CatalogContent";

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
