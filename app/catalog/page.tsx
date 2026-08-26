import NotFound from "@/components/NotFound/NotFound";
import Sidebar from "@/components/Sidebar/Sidebar";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <div className={`container ${css.catalogWrapper}`}>
      <Sidebar />
      <div className={css.content}>
        <div className={css.emptyState}>
          <NotFound />
        </div>
      </div>
    </div>
  );
}
