"use client";
import Image from "next/image";
import css from "./CatalogItem.module.css";
import { Camper } from "@/types/camper";
import { MdLocalGasStation } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { TbAutomaticGearbox } from "react-icons/tb";
import Link from "next/link";
import CamperHeaderInfo from "@/components/CamperHeaderInfo/CamperRatingInfo";
import ButtonCatalogLink from "@/components/Buttons/ButtonCatalogLink/ButtonCatalogLink";

interface CamperCardProps {
  camper: Camper;
}

export default function CatalogItem({ camper }: CamperCardProps) {
  const features = [
    {
      key: "engine",
      value: camper.engine,
      icon: <MdLocalGasStation />,
    },
    {
      key: "transmission",
      value: camper.transmission,
      icon: <TbAutomaticGearbox />,
    },
    { key: "form", value: camper.form, icon: <FaCarAlt /> },
  ];
  return (
    <li className={css.card}>
      <Image
        src={camper.coverImage}
        alt={camper.name}
        width={219}
        height={240}
        className={css.img}
      ></Image>
      <div className={css.info}>
        <div className={css["top-row"]}>
          <h2 className={css.title}>{camper.name}</h2>
          <p className={css.price}>€{camper.price}</p>
        </div>
        <CamperHeaderInfo camper={camper} />
        <p className={css.description}>{camper.description}</p>
        <ul className={css.badges}>
          {features.map((f) => (
            <li key={f.key} className={css.badge}>
              <span className={css.iconWrapper}>{f.icon}</span>

              {f.value}
            </li>
          ))}
        </ul>
        <ButtonCatalogLink href={`/catalog/${camper.id}`}>
          Show more
        </ButtonCatalogLink>
      </div>
    </li>
  );
}
