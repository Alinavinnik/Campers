"use client";
import css from "./CatalogContent.module.css";
import { fetchCampers } from "@/services/camperService";
import { useInfiniteQuery } from "@tanstack/react-query";
import CatalogList from "../Catalog/CatalogList/CatalogList";

export default function CatalogContent() {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["campers"],

      initialPageParam: 1,

      queryFn: ({ pageParam }) =>
        fetchCampers({
          page: pageParam,
        }),

      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.totalPages) {
          return lastPage.page + 1;
        }

        return undefined;
      },
    });

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  return (
    <>
      {isLoading && <p>Loading...</p>}

      <CatalogList campers={campers} />

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
