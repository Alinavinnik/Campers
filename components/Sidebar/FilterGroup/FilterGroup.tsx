import css from "./FilterGroup.module.css";
interface FilterGroupProps {
  title?: string;
  name: string;
  options: string[];
}

export default function FilterGroup({
  title,
  name,
  options,
}: FilterGroupProps) {
  return (
    <fieldset className={css.fieldset}>
      <legend>{title}</legend>
      {options.map((option) => (
        <label key={option}>
          <input type="radio" name={name} value={option} />
          {option}
        </label>
      ))}
    </fieldset>
  );
}
