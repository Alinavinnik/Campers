import css from "./Hero.module.css";
import ButtonCatalogLink from "../Buttons/ButtonCatalogLink/ButtonCatalogLink";

export default function Hero() {
  return (
    <>
      <section className={css["hero-section"]}>
        <div className={`container ${css.hero}`}>
          <h1 className={css.title}>Your journey starts here</h1>
          <p className={css.description}>
            Find the perfect camper for your next adventure.
          </p>
          <ButtonCatalogLink href="/catalog">View Campers</ButtonCatalogLink>
        </div>
      </section>
    </>
  );
}
