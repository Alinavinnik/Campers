import { fetchReviews } from "@/services/camperService";
import css from "./CamperReviews.module.css";
import { IoStar } from "react-icons/io5";

interface CamperReviewsProps {
  camperId: string;
}

export default async function CamperReviews({ camperId }: CamperReviewsProps) {
  const data = await fetchReviews(camperId);
  console.log(data);
  return (
    <div className={css.reviews}>
      <h2 className={css.title}>Reviews</h2>
      {data.map((r) => {
        return (
          <div className={css["review-card"]} key={r.id}>
            <div className={css["top-content"]}>
              <div className={css.round}>{r.reviewer_name[0]}</div>
              <div className={css.wrap}>
                <p className={css.name}>{r.reviewer_name}</p>
                <div className={css.rating}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <IoStar
                      key={star}
                      size={16}
                      color={
                        star <= r.reviewer_rating
                          ? "var(--rating)"
                          : "var(--gray-light)"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className={css.comment}>{r.comment}</p>
          </div>
        );
      })}
    </div>
  );
}
