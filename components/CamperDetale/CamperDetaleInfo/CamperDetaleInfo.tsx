import { Camper } from "@/types/camper";
import css from "./CamperDetaleInfo.module.css";
import CamperHeaderInfo from "@/components/CamperHeaderInfo/CamperRatingInfo";

interface CamperDetaleInfoProps {
  camper: Camper;
}

export default function CamperDetaleInfo({ camper }: CamperDetaleInfoProps) {
  const formatValue = (value: string) => {
    const formatted = value.replaceAll("_", " ");

    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };
  const details = [
    { label: "Form", value: formatValue(camper.form) },
    { label: "Length", value: camper.length },
    { label: "Width", value: camper.width },
    { label: "Height", value: camper.height },
    { label: "Tank", value: camper.tank },
    { label: "Consumption", value: camper.consumption },
  ];

  return (
    <div className={css.info}>
      <div className={`${css.block} ${css["top-block"]}`}>
        <h1 className={`${css.bold} ${css.title}`}>{camper.name}</h1>
        <CamperHeaderInfo camper={camper} />
        <p className={`${css.bold} ${css.price}`}>€{camper.price}</p>
        <p className={css.description}>{camper.description}</p>
      </div>
      <div className={`${css.block} ${css["bottom-block"]}`}>
        <h2 className={css.bold}>Vehicle details</h2>
        <ul className={css.badges}>
          {camper.amenities.map((f) => (
            <li key={f} className={css.badge}>
              {f}
            </li>
          ))}
        </ul>
        <div className={css.line}></div>
        <ul className={css.detailsList}>
          {details.map((item) => (
            <li className={css.detailsItem} key={item.label}>
              <span>{item.label}</span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
