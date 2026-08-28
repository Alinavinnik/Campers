import BookForm from "@/components/BookForm/BookForm";
import CamperDetaleItem from "@/components/CamperDetale/CamperDetale/CamperDetaleItem";
import css from "./DetalePage.module.css";
interface DetalePageProps {
  params: Promise<{ id: string }>;
}

export default async function DetalePage({ params }: DetalePageProps) {
  const { id } = await params;

  return (
    <section>
      <div className="container">
        <div className={css.content}>
          <CamperDetaleItem camperId={id} />
          <BookForm camperId={id} />
        </div>
      </div>
    </section>
  );
}
