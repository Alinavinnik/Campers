import BookForm from "@/components/BookForm/BookForm";
import CamperDetailItem from "@/components/CamperDetail/CamperDetail/CamperDetailItem";
import css from "./DetailPage.module.css";
import CamperReviews from "@/components/CamperDetail/CamperReviews/CamperReviews";
import { Metadata } from "next";
import { fetchCamperById } from "@/services/camperService";

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const { id } = await params;

  const camper = await fetchCamperById(id);

  return {
    title: `${camper.name} | TravelTrucks`,
    description: camper.description,
  };
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { id } = await params;

  return (
    <section className={css.camper}>
      <div className="container">
        <div className={css["top-content"]}>
          <CamperDetailItem camperId={id} />
        </div>
        <div className={css["bottom-content"]}>
          <CamperReviews camperId={id} />
          <BookForm camperId={id} />
        </div>
      </div>
    </section>
  );
}
