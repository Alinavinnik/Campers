import ClearFilterBtn from "../ClearFilterBtn/ClearFilterBtn";
import css from "./Sidebar.module.css";
export default function Sidebar() {
  return (
    <aside className={css.sidebar} aria-label="Camper filters">
      <div className={css.locationField}>
        <label htmlFor="location">Location</label>
        <input id="location" type="text" placeholder="Kyiv" />
      </div>

      <form className={css.filtersForm}>
        <h2 className={css.filtersTitle}>Filters</h2>

        <fieldset className={css.fieldset}>
          <legend>Camper form</legend>
          <label>
            <input type="radio" name="camperForm" value="alcove" />
            Alcove
          </label>
          <label>
            <input type="radio" name="camperForm" value="panelVan" />
            Panel Van
          </label>
          <label>
            <input type="radio" name="camperForm" value="integrated" />
            Integrated
          </label>
          <label>
            <input type="radio" name="camperForm" value="semiIntegrated" />
            Semi Integrated
          </label>
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend>Engine</legend>
          <label>
            <input type="radio" name="engine" value="diesel" />
            Diesel
          </label>
          <label>
            <input type="radio" name="engine" value="petrol" />
            Petrol
          </label>
          <label>
            <input type="radio" name="engine" value="hybrid" />
            Hybrid
          </label>
          <label>
            <input type="radio" name="engine" value="electric" />
            Electric
          </label>
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend>Transmission</legend>
          <label>
            <input type="radio" name="transmission" value="automatic" />
            Automatic
          </label>
          <label>
            <input type="radio" name="transmission" value="manual" />
            Manual
          </label>
        </fieldset>

        <button type="submit" className={css.searchBtn}>
          Search
        </button>
        <ClearFilterBtn />
      </form>
    </aside>
  );
}
