"use client";
import Image from "next/image";
import css from "./CatalogItem.module.css";
import { Camper } from "@/types/camper";
import { MdStarRate, MdLocalGasStation } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { TbAutomaticGearbox } from "react-icons/tb";
import Link from "next/link";

interface CamperCardProps {
  camper: Camper;
}

export default function CatalogItem({ camper }: CamperCardProps) {
  const features = [
    { key: "engine", value: camper.engine, icon: <MdLocalGasStation /> },
    {
      key: "transmission",
      value: camper.transmission,
      icon: <TbAutomaticGearbox />,
    },
    { key: "form", value: camper.form, icon: <FaCarAlt /> },
  ];
  return (
    <li>
      <Link
        href={`/catalog/${camper.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className={css.card}
      >
        <Image
          src={camper.coverImage}
          alt={camper.name}
          width={219}
          height={240}
          className={css.img}
        ></Image>
        <div className={css.info}>
          <h2 className={css.title}>{camper.name}</h2>
          <p className={css.price}>€{camper.price}</p>
          <div className={css.rating}>
            <MdStarRate />
            {camper.rating}
            <span>({camper.totalReviews} Reviews)</span>
          </div>
          <div className={css.location}>{camper.location}</div>
          <p className={css.description}>{camper.description}</p>
          <ul className={css.badges}>
            {features.map((f) => (
              <li key={f.key} className={css.badge}>
                {f.icon}
                {f.value}
              </li>
            ))}
          </ul>
          <span className="btn">Show more</span>
        </div>
      </Link>
    </li>
  );
}
