import { Camper } from "@/types/camper";
import css from "./CamperRatingInfo.module.css";
import { CiMap } from "react-icons/ci";
import { IoStar } from "react-icons/io5";

interface CamperRatingInfoProps {
  camper: Camper;
}

export default function CamperHeaderInfo({ camper }: CamperRatingInfoProps) {
  return (
    <div className={css.info}>
      <div className={css["second-row"]}>
        <div className={css.rating}>
          <IoStar size={16} color={"var(--rating)"} className={css.icon} />
          {camper.rating}
          <span>({camper.totalReviews} Reviews)</span>
        </div>
        <div className={css.location}>
          <CiMap size={18} className={css.icon} />
          {camper.location}
        </div>
      </div>
    </div>
  );
}
