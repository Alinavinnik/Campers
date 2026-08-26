import css from "./Hero.module.css";
import ButtonCatalogLink from "../ButtonCatalogLink/ButtonCatalogLink";

export default function Hero() {
  return (
    <>
      <section className={css["hero-section"]}>
        <div className={`container ${css.hero}`}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.description}>
            You can find everything you want in our catalog
          </p>
          <ButtonCatalogLink>View Now</ButtonCatalogLink>
        </div>
      </section>
    </>
  );
}
