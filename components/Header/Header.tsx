"use client";

import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <Link href="/" className={css.logo}>
        Travel<span className={css.accent}>Trucks</span>
      </Link>
      <nav>
        <Link href="/" className={css.logo}>
          Home
        </Link>
        <Link href="/catalog" className={css.logo}>
          Catalog
        </Link>
      </nav>
    </header>
  );
}
