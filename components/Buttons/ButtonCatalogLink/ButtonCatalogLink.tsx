import Link from "next/link";
import css from "./ButtonCatalogLink.module.css";
interface ButtonCatalogLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function ButtonCatalogLink({
  children,
  href,
}: ButtonCatalogLinkProps) {
  return (
    <Link href={href} className={css.button}>
      {children}
    </Link>
  );
}
