import { Camper } from "@/types/camper";
import css from "./CamperDetaleInfo.module.css";
import CamperHeaderInfo from "@/components/CamperHeaderInfo/CamperRatingInfo";

interface CamperDetaleInfoProps {
  camper: Camper;
}

export default function CamperDetaleInfo({ camper }: CamperDetaleInfoProps) {
  return (
    <div className={css.info}>
      <CamperHeaderInfo camper={camper} />
    </div>
  );
}
