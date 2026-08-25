"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "/catalog" },
  ];

  return (
    <header className={css.header}>
      <Link href="/" className={css.logo}>
        Travel<span className={css.accent}>Trucks</span>
      </Link>
      <nav>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${css.link} ${isActive ? css.active : ""}`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
