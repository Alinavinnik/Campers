"use client";

import { useRouter } from "next/navigation";
import ClearFilterBtn from "../Buttons/ClearFilterBtn/ClearFilterBtn";
// import { CiMap } from "react-icons/ci";
import FilterGroup from "./FilterGroup/FilterGroup";
import css from "./Sidebar.module.css";
import { buildCatalogUrl } from "@/utils/handlers";
import { filterGroups } from "@/utils/filterOptions";
import { useTransition } from "react";

export default function Sidebar() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    const url = buildCatalogUrl(formData);
    startTransition(() => {
      router.push(url);
    });
  };
  return (
    <aside className={css.sidebar} aria-label="Camper filters">
      <form className={css.filtersForm} action={handleSubmit}>
        <div className={css.locationField}>
          <label htmlFor="location">Location</label>
          <input id="location" name="location" type="text" placeholder="Kyiv" />
        </div>
        <h2 className={css.filtersTitle}>Filters</h2>
        <div className={css.filters}>
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
        </div>
        <div className={css["btn-wrap"]}>
          <button type="submit" className={css.searchBtn} disabled={isPending}>
            {isPending ? "Searching..." : "Search"}
          </button>
          <ClearFilterBtn />
        </div>
      </form>
    </aside>
  );
}
