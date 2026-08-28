import { useQuery } from "@tanstack/react-query";
import css from "./CatalogDetale.module.css";

type BookFormProps = {
  camperId: string;
};

export default function CatalogDetaleItem({ camperId }: BookFormProps) {
  //   const { data } = useQuery({
  //     queryKey: ["myQueryKey"], // ключ запиту
  //     queryFn: myQueryFunction, // функція запиту
  //   });
  return <section className={css.card}></section>;
}
