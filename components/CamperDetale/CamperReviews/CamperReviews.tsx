import { fetchReviews } from "@/services/camperService";
import css from "./CamperReviews.module.css";

interface CamperReviewsProps {
  camperId: string;
}

export default async function CamperReviews({ camperId }: CamperReviewsProps) {
  const data = await fetchReviews(camperId);
  console.log(data);
  return (
    <div className={css.reviews}>
      <h2 className={css.title}>Reviews</h2>
      {data.map((review) => {
        return (
          <div key={review.id}>
            <p>{review.reviewer_name}</p>
            <p>{review.comment}</p>
          </div>
        );
      })}
    </div>
  );
}
