"use client";
import { useRouter } from "next/navigation";
import css from "./ClearFilterBtn.module.css";
import { IoCloseOutline } from "react-icons/io5";

export default function ClearFilterBtn() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/catalog");
  };
  return (
    <button className={css.button} onClick={handleClick} type="button">
      <span className={css.icon}>
        <IoCloseOutline size={24} />
      </span>
      Clear filters
    </button>
  );
}
