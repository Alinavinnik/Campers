import css from "./ClearFilterBtn.module.css";

interface ClearFilterBtnProps {
  onClick: () => void;
}
export default function ClearFilterBtn({ onClick }: ClearFilterBtnProps) {
  return (
    <button className={css.button} onClick={onClick}>
      Clear filters
    </button>
  );
}
