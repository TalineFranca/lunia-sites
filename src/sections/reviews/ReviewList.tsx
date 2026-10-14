import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/StarRating";
import { formatDate } from "@/lib/format";
import type { Review } from "@/types/review";

interface ReviewListProps {
  reviews: Review[];
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
  onRetry: () => void;
}

export function ReviewList({ reviews, isLoading, isError, errorMessage, onRetry }: ReviewListProps) {
  if (isLoading) {
    return (
      <div role="status" aria-label="Carregando avaliações" className="space-y-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="animate-pulse rounded-3xl border border-dashed border-ink/20 p-6">
            <div className="h-4 w-32 rounded-full bg-ink/10" />
            <div className="mt-4 h-3 w-full rounded-full bg-ink/10" />
            <div className="mt-2 h-3 w-2/3 rounded-full bg-ink/10" />
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div role="alert" className="rounded-3xl border border-dashed border-destructive/50 p-6">
        <p className="text-destructive">{errorMessage ?? "Algo deu errado ao carregar as avaliações."}</p>
        <Button variant="outline" size="sm" className="mt-4" onClick={onRetry}>
          Tentar de novo
        </Button>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-ink/25 p-8 text-center">
        <p className="font-hand text-3xl text-iris">ainda está tudo quietinho por aqui</p>
        <p className="mt-2 text-ink/70">Seja a primeira pessoa a deixar uma avaliação.</p>
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      <AnimatePresence initial={false}>
        {reviews.map((review) => (
          <motion.li
            key={review.id}
            layout
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-ink/10 bg-cream p-6 md:p-7"
          >
            <article>
              <header className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-xl font-normal italic">{review.name}</h3>
                <StarRating value={review.rating} />
              </header>
              <p className="mt-3 whitespace-pre-line leading-relaxed text-ink/80">{review.comment}</p>
              <time dateTime={review.created_at} className="mt-4 block text-xs text-ink/55">
                {formatDate(review.created_at)}
              </time>
            </article>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}
