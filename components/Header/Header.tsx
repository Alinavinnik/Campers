"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { GoSun } from "react-icons/go";
import { IoPartlySunnySharp } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("light");
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "/catalog" },
  ];

  const HandleClick = () => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
    }
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
        <button type="button" onClick={HandleClick} className={css.icons}>
          {theme === "light" ? (
            <IoPartlySunnySharp size={24} className={css.cloud} />
          ) : (
            <GoSun size={24} className={css.sun} />
          )}
        </button>
      </div>
    </header>
  );
}
