import css from "./FilterGroup.module.css";

type FilterOption = {
  label: string;
  value: string;
};

interface FilterGroupProps {
  title: string;
  name: string;
  options: FilterOption[];
  selectedValue?: string;
}

export default function FilterGroup({
  title,
  name,
  options,
  selectedValue,
}: FilterGroupProps) {
  return (
    <fieldset className={css.fieldset}>
      <legend className={css["group-name"]}>{title}</legend>

      {options.map((option) => (
        <label key={option.value} className={css.radioLabel}>
          <input
            type="radio"
            name={name}
            value={option.value}
            defaultChecked={selectedValue === option.value}
            className={css.radioInput}
          />

          <span className={css.customRadio}></span>

          <span>{option.label}</span>
        </label>
      ))}
    </fieldset>
  );
}
