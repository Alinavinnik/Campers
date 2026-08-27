import { Camper } from "@/types/camper";
import css from "./CatalogList.module.css";
import CatalogItem from "../CatalogItem/CatalogItem";

interface CatalCardProps {
  campers: Camper[];
}

export default function CatalogList({ campers }: CatalCardProps) {
  return (
    <ul className={css.catalog}>
      {campers.map((camper) => {
        return <CatalogItem key={camper.id} camper={camper} />;
      })}
    </ul>
  );
}
