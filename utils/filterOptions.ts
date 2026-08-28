import type {} from "@/types/camper";
import { FiltersResponse } from "@/types/filter";

const formatLabel = (value: string) => {
  return value
    .replaceAll("_", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export function createFilterGroups(filtersData: FiltersResponse) {
  return [
    {
      title: "Camper form",
      name: "form",
      options: filtersData.forms.map((value) => ({
        label: formatLabel(value),
        value,
      })),
    },
    {
      title: "Engine",
      name: "engine",
      options: filtersData.engines.map((value) => ({
        label: formatLabel(value),
        value,
      })),
    },
    {
      title: "Transmission",
      name: "transmission",
      options: filtersData.transmissions.map((value) => ({
        label: formatLabel(value),
        value,
      })),
    },
  ];
}
