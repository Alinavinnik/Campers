import Sidebar from "@/components/Sidebar/Sidebar";
import css from "./CatalogPage.module.css";
import CatalogList from "@/components/Catalog/CatalogList/CatalogList";
import { fetchCampers } from "@/services/camperService";
import ButtonLoadMore from "@/components/Buttons/ButtonLoadMore/ButtonLoadMore";

export default async function CatalogPage() {
  const { campers, total } = await fetchCampers();
  console.log(total);
  return (
    <section>
      <h1 className={css.visuallyHidden}>Catalog</h1>
      <div className={`container ${css.catalogWrapper}`}>
        <Sidebar />
        <div className={css.content}>
          <div className={css.emptyState}>
            <CatalogList campers={campers} />
            <ButtonLoadMore />
          </div>
        </div>
      </div>
    </section>
  );
}
