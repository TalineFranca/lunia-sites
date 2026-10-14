export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  created_at: string;
}

export type NewReview = Pick<Review, "name" | "rating" | "comment">;
