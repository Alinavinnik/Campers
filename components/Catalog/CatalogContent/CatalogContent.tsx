"use client";
import css from "./CatalogContent.module.css";
import { fetchCampers } from "@/services/camperService";
import { useInfiniteQuery } from "@tanstack/react-query";
import CatalogList from "../CatalogList/CatalogList";
import { useSearchParams } from "next/navigation";
import type { Form, Engine, Transmission } from "@/types/camper";
import NotFound from "@/components/NotFound/NotFound";

export default function CatalogContent() {
  const searchParams = useSearchParams();
  const filters = {
    location: searchParams.get("location") ?? undefined,
    form: (searchParams.get("form") as Form | null) ?? undefined,
    engine: (searchParams.get("engine") as Engine | null) ?? undefined,
    transmission:
      (searchParams.get("transmission") as Transmission | null) ?? undefined,
  };
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["campers", filters],

    initialPageParam: 1,

    queryFn: ({ pageParam }) =>
      fetchCampers({
        page: pageParam,
        ...filters,
      }),

    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }

      return undefined;
    },
  });

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];
  const isEmpty = !isLoading && campers.length === 0;

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isEmpty ? <NotFound /> : <CatalogList campers={campers} />}

      {isError && (
        <p>{error instanceof Error ? error.message : "Somthing went wrong"}</p>
      )}

      {hasNextPage && (
        <button
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className={css.button}
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      )}
    </>
  );
}
