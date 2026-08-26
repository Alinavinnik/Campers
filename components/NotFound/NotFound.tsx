import Link from "next/link";
import css from "./NotFound.module.css";
import Image from "next/image";
import ButtonCatalogLink from "../ButtonCatalogLink/ButtonCatalogLink";
export default function NotFound() {
  return (
    <section>
      <div className="container">
        <Image
          src="/images/not-found.jpg"
          alt="No campers found"
          width={488}
          height={463}
          priority
          className={css.img}
        />
        <h1 className={css.title}>No campers found</h1>
        <p className={css.description}>
          We couldn`t find any campers that match your filters.Try adjusting
          your search or clearing some filters.
        </p>
        <ButtonCatalogLink>View all campers</ButtonCatalogLink>
      </div>
    </section>
  );
}
