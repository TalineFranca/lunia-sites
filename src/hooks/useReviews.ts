import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { isSupabaseConfigured } from "@/lib/supabase";
import { createReview, fetchReviews } from "@/services/reviews";
import type { NewReview } from "@/types/review";

const reviewsKey = ["reviews"] as const;

export function useReviews() {
  return useQuery({
    queryKey: reviewsKey,
    queryFn: fetchReviews,
    enabled: isSupabaseConfigured,
    select: (reviews) => {
      const total = reviews.length;
      const average = total
        ? reviews.reduce((sum, review) => sum + review.rating, 0) / total
        : 0;
      return { reviews, total, average };
    },
  });
}

export function useCreateReview() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (review: NewReview) => createReview(review),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: reviewsKey }),
  });
}
