type Reviews = {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

export type ReviewsResponse = Reviews[];
