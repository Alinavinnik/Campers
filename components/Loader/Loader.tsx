import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <section
      className={css.backdrop}
      role="alert"
      aria-busy="true"
      aria-live="assertive"
      aria-labelledby="loader-title"
    >
      <div className={css.modal}>
        <Oval
          visible={true}
          height="72"
          width="72"
          color="#6d7b75"
          secondaryColor="#f7f7f7"
          ariaLabel="oval-loading"
          strokeWidth={4}
          strokeWidthSecondary={4}
          wrapperClass={css.spinner}
        />
        <p className={css.text}>Loading trucks...</p>
        <p className={css.descr}>
          Please wait while we fetch the best travel trucks for you
        </p>
      </div>
    </section>
  );
}
