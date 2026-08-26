"use client";

import ClearFilterBtn from "../ClearFilterBtn/ClearFilterBtn";
import { CiMap } from "react-icons/ci";
import FilterGroup from "./FilterGroup/FilterGroup";
import css from "./Sidebar.module.css";
import { useState } from "react";

const INITIAL_FILTERS = {
  camperForm: "Panel Van",
  engine: "Diesel",
  transmission: "Automatic",
};

export default function Sidebar() {
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const handleFilterChange = (name: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Зібрані дані для відправки:", filters);
  };
  const HandleClick = () => {
    setFilters(INITIAL_FILTERS);
  };
  return (
    <aside className={css.sidebar} aria-label="Camper filters">
      <div className={css.locationField}>
        <label htmlFor="location">Location</label>
        <input id="location" type="text" placeholder="Kyiv" />
      </div>
      <form className={css.filtersForm} onSubmit={handleSubmit}>
        <h2 className={css.filtersTitle}>Filters</h2>
        {filterGroups.map((group) => {
          return (
            <FilterGroup
              key={group.name}
              title={group.title}
              name={group.name}
              options={group.options}
              value={filters[group.name as keyof typeof filters]}
              onChange={(value) => handleFilterChange(group.name, value)}
            />
          );
        })}

        <button type="submit" className={css.searchBtn}>
          Search
        </button>
        <ClearFilterBtn onClick={HandleClick} />
      </form>
    </aside>
  );
}
