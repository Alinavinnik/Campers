import css from "./ClearFilterBtn.module.css";
import { IoCloseOutline } from "react-icons/io5";

interface ClearFilterBtnProps {
  onClick: () => void;
}
export default function ClearFilterBtn({ onClick }: ClearFilterBtnProps) {
  return (
    <button className={css.button} onClick={onClick}>
      <span className={css.icon}>
        <IoCloseOutline size={24} />
      </span>
      Clear filters
    </button>
  );
}
