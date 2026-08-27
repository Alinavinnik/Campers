import css from "./NotFound.module.css";
import Image from "next/image";

import ButtonCatalogLink from "../ButtonCatalogLink/ButtonCatalogLink";
import ClearFilterBtn from "../ClearFilterBtn/ClearFilterBtn";

export default function NotFound() {
  return (
    <section className={css["not-found-section"]}>
      <div className={css.wrapper}>
        <Image
          src="/images/not-found.png"
          alt="No campers found"
          width={488}
          height={463}
          priority
          className={css.img}
        />
        <h1 className={css.title}>No campers found</h1>
        <div className={css["text-container"]}>
          <p className={css.description}>
            We couldn`t find any campers that match your filters.
          </p>
          <p className={css.description}>
            Try adjusting your search or clearing some filters.
          </p>
        </div>
        <div className={css["btn-container"]}>
          <ClearFilterBtn />
          <ButtonCatalogLink href="/calalog">
            View all campers
          </ButtonCatalogLink>
        </div>
      </div>
    </section>
  );
}
