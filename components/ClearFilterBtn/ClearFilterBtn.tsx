import css from "./ClearFilterBtn.module.css";
import { IoCloseOutline } from "react-icons/io5";

// interface ClearFilterBtnProps {

// }
export default function ClearFilterBtn() {
  return (
    <button className={css.button}>
      <span className={css.icon}>
        <IoCloseOutline size={24} />
      </span>
      Clear filters
    </button>
  );
}
