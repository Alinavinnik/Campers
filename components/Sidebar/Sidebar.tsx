"use client";

import ClearFilterBtn from "../ClearFilterBtn/ClearFilterBtn";
import FilterGroup from "./FilterGroup/FilterGroup";
import css from "./Sidebar.module.css";
export default function Sidebar() {
  const filterGroups = [
    {
      title: "Camper form",
      name: "camperForm",
      options: ["Alcove", "Panel Van", "Integrated", "Semi Integrated"],
    },
    {
      title: "Engine",
      name: "engine",
      options: ["Diesel", "Petrol", "Hybrid", "Electric"],
    },
    {
      title: "Transmission",
      name: "transmission",
      options: ["Automatic", "Manual"],
    },
  ];

  return (
    <aside className={css.sidebar} aria-label="Camper filters">
      <div className={css.locationField}>
        <label htmlFor="location">Location</label>
        <input id="location" type="text" placeholder="Kyiv" />
      </div>
      <form className={css.filtersForm}>
        <h2 className={css.filtersTitle}>Filters</h2>
        {filterGroups.map((group) => {
          return (
            <FilterGroup
              key={group.name}
              title={group.title}
              name={group.name}
              options={group.options}
            />
          );
        })}

        <button type="submit" className={css.searchBtn}>
          Search
        </button>
        <ClearFilterBtn />
      </form>
    </aside>
  );
}
