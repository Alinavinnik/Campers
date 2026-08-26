import css from "./FilterGroup.module.css";
interface FilterGroupProps {
  title?: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export default function FilterGroup({
  title,
  name,
  options,
  value,
  onChange,
}: FilterGroupProps) {
  return (
    <fieldset className={css.fieldset}>
      <legend className={css["group-name"]}>{title}</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option} //
            onChange={() => onChange(option)}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
}
