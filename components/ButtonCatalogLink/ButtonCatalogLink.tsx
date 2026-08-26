import Link from "next/link";
import css from "./ButtonCatalogLink.module.css";
interface ButtonCatalogLinkProps {
  children: React.ReactNode;
}

export default function ButtonCatalogLink({
  children,
}: ButtonCatalogLinkProps) {
  return (
    <Link href="/catalog" className={css.button}>
      {children}
    </Link>
  );
}
