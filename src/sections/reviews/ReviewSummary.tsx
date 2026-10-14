import { StarRating } from "@/components/StarRating";
import { formatRating } from "@/lib/format";

interface ReviewSummaryProps {
  average: number;
  total: number;
}

export function ReviewSummary({ average, total }: ReviewSummaryProps) {
  if (total === 0) return null;

  return (
    <div className="flex items-center gap-5">
      <p className="font-display text-7xl font-light leading-none text-iris">
        {formatRating(average)}
        <span className="sr-only"> de 5</span>
      </p>
      <div>
        <StarRating value={average} />
        <p className="mt-1 text-sm text-ink/70">
          média de {total} {total === 1 ? "avaliação" : "avaliações"}
        </p>
      </div>
    </div>
  );
}
