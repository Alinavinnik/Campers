"use client";
import Image from "next/image";
import css from "./CatalogItem.module.css";
import { Camper } from "@/types/camper";
import { MdLocalGasStation } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import { TbAutomaticGearbox } from "react-icons/tb";
import { CiMap } from "react-icons/ci";
import Link from "next/link";

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
          <div className={css["top-row"]}>
            <h2 className={css.title}>{camper.name}</h2>
            <p className={css.price}>€{camper.price}</p>
          </div>
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
          <p className={css.description}>{camper.description}</p>
          <ul className={css.badges}>
            {features.map((f) => (
              <li key={f.key} className={css.badge}>
                <span className={css.iconWrapper}>{f.icon}</span>

                {f.value}
              </li>
            ))}
          </ul>
          <span className={css.btn}>Show more</span>
        </div>
      </Link>
    </li>
  );
}
