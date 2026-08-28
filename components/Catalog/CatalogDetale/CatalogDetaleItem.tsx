"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./CatalogDetale.module.css";
import fetchCamperById from "@/services/camperService";
import CatalogDetaleGallery from "./CatalogDetaleGallery/CatalogDetaleGallery";

type BookFormProps = {
  camperId: string;
};

export default function CatalogDetaleItem({ camperId }: BookFormProps) {
  const { data } = useQuery({
    queryKey: ["camper", camperId],
    queryFn: () => fetchCamperById(camperId),
  });

  return (
    <section className={css.card}>
      {data?.gallery && (
        <CatalogDetaleGallery gallery={data.gallery} camperName={data.name} />
      )}
    </section>
  );
}
