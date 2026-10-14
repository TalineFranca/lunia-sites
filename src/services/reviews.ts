import { supabase } from "@/lib/supabase";
import type { NewReview, Review } from "@/types/review";

const TABLE = "reviews";

function getClient() {
  if (!supabase) {
    throw new Error("As avaliações ainda não estão configuradas.");
  }
  return supabase;
}

export async function fetchReviews(): Promise<Review[]> {
  const { data, error } = await getClient()
    .from(TABLE)
    .select("id, name, rating, comment, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error("Não foi possível carregar as avaliações.");
  }
  return (data ?? []) as Review[];
}

export async function createReview(review: NewReview): Promise<void> {
  const { error } = await getClient()
    .from(TABLE)
    .insert({
      name: review.name.trim(),
      rating: review.rating,
      comment: review.comment.trim(),
    });

  if (error) {
    throw new Error("Não foi possível enviar sua avaliação. Tente novamente.");
  }
}
