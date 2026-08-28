"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ClearFilterBtn from "../Buttons/ClearFilterBtn/ClearFilterBtn";
import { CiMap } from "react-icons/ci";
import FilterGroup from "./FilterGroup/FilterGroup";
import css from "./Sidebar.module.css";
import { buildCatalogUrl } from "@/utils/handlers";
import { createFilterGroups } from "@/utils/filterOptions";
import { useTransition } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchFilters } from "@/services/camperService";

export default function Sidebar() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const { data: filtersData } = useQuery({
    queryKey: ["filters"],
    queryFn: fetchFilters,
  });

  const filterGroups = filtersData ? createFilterGroups(filtersData) : [];
  const searchParams = useSearchParams();

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
          <label className={css["location-lable"]} htmlFor="location">
            Location
          </label>
          <div className={css.locationInput}>
            <CiMap size={24} className={css.locationIcon} />
            <input
              className={css.location}
              id="location"
              name="location"
              type="text"
              placeholder="Kyiv"
              defaultValue={searchParams.get("location") ?? ""}
            />
          </div>
        </div>
        <h2 className={css.filtersTitle}>Filters</h2>
        <div className={css.filters}>
          {filterGroups.map((group) => (
            <FilterGroup
              key={group.name}
              title={group.title}
              name={group.name}
              options={group.options}
              selectedValue={searchParams.get(group.name) ?? undefined}
            />
          ))}
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
