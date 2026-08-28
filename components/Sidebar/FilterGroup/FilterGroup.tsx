import css from "./FilterGroup.module.css";
type FilterOption = {
  label: string;
  value: string;
};
interface FilterGroupProps {
  title?: string;
  name: string;
  options: FilterOption[];
}

export default function FilterGroup({
  title,
  name,
  options,
}: FilterGroupProps) {
  return (
    <fieldset className={css.fieldset}>
      <legend className={css["group-name"]}>{title}</legend>
      {options.map((option) => (
        <label key={option.value}>
          <input type="radio" name={name} value={option.value} />
          {option.label}
        </label>
      ))}
    </fieldset>
  );
}
