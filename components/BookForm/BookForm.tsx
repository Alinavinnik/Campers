import css from "./BookForm.module.css";

export default function BookForm() {
  return (
    <form className={css.form}>
      <div className={css["form-header"]}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.subtitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <div className={css["form-inputs"]}>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          required
          className={css.name}
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          required
          className={css.email}
        />
      </div>
      <button type="submit" className={css.button}>
        Send
      </button>
    </form>
  );
}
