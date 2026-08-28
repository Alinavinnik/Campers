import css from "./CamperDetail.module.css";
import { fetchCamperById } from "@/services/camperService";
import CamperDetaleGallery from "../CamperDetailGallery/CatalogDetailGallery";
import CamperDetailInfo from "../CamperDetailInfo/CamperDetailInfo";

type BookFormProps = {
  camperId: string;
};

export default async function CamperDetailItem({ camperId }: BookFormProps) {
  const data = await fetchCamperById(camperId);

  return (
    <section className={css.card}>
      <div className={css["top-content"]}>
        {data?.gallery && (
          <CamperDetaleGallery gallery={data.gallery} camperName={data.name} />
        )}
        {data && <CamperDetailInfo camper={data} />}
      </div>
    </section>
  );
}
