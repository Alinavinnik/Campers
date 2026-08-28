import BookForm from "@/components/BookForm/BookForm";
import CamperDetaleItem from "@/components/CamperDetale/CamperDetale/CamperDetaleItem";
import css from "./DetalePage.module.css";
import CamperReviews from "@/components/CamperDetale/CamperReviews/CamperReviews";
interface DetalePageProps {
  params: Promise<{ id: string }>;
}

export default async function DetalePage({ params }: DetalePageProps) {
  const { id } = await params;

  return (
    <section className={css.camper}>
      <div className="container">
        <div className={css["top-content"]}>
          <CamperDetaleItem camperId={id} />
        </div>
        <div className={css["bottom-content"]}>
          <CamperReviews camperId={id} />
          <BookForm camperId={id} />
        </div>
      </div>
    </section>
  );
}
