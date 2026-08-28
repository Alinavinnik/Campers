"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./CamperDetale.module.css";
import { fetchCamperById } from "@/services/camperService";
import CamperDetaleGallery from "../CamperDetaleGallery/CatalogDetaleGallery";
import CamperDetaleInfo from "../CamperDetaleInfo/CamperDetaleInfo";

type BookFormProps = {
  camperId: string;
};

export default function CamperDetaleItem({ camperId }: BookFormProps) {
  const { data } = useQuery({
    queryKey: ["camper", camperId],
    queryFn: () => fetchCamperById(camperId),
  });

  return (
    <section className={css.card}>
      <div className={css["top-content"]}>
        {data?.gallery && (
          <CamperDetaleGallery gallery={data.gallery} camperName={data.name} />
        )}
        {data && <CamperDetaleInfo camper={data} />}
      </div>
    </section>
  );
}
