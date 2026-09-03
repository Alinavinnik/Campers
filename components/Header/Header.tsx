"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { GoSun } from "react-icons/go";
import { IoPartlySunnySharp } from "react-icons/io5";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "/catalog" },
  ];

  const handleClick = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <Link href="/" className={css.logo} aria-label="Travel Trucks">
          <Image
            src="/logo.png"
            alt="logo TravelTrucks"
            width={200}
            height={70}
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
        <button type="button" onClick={handleClick} className={css.icons}>
          <IoPartlySunnySharp size={24} className={css.cloud} />
          <GoSun size={24} className={css.sun} />
        </button>
      </div>
    </header>
  );
}
