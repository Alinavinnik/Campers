"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "/catalog" },
  ];

  return (
    <header className={`container ${css.header}`}>
      <Link href="/" className={css.logo} aria-label="Travel Trucks">
        <Image
          src="/logo.svg"
          alt="logo TravelTrucks"
          width={136}
          height={16}
          priority
        ></Image>
      </Link>
      <nav className={css.navigation}>
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

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
