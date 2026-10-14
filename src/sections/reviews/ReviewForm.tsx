import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCreateReview } from "@/hooks/useReviews";
import { isSupabaseConfigured } from "@/lib/supabase";
import { StarInput } from "./StarInput";

const NAME_MAX = 60;
const COMMENT_MAX = 500;

type Errors = Partial<Record<"name" | "rating" | "comment", string>>;

function validate(name: string, rating: number, comment: string): Errors {
  const errors: Errors = {};
  if (name.trim().length < 2) errors.name = "Escreva seu nome (pelo menos 2 letras).";
  if (rating < 1 || rating > 5) errors.rating = "Escolha uma nota de 1 a 5 estrelas.";
  if (comment.trim().length < 5) errors.comment = "Conte um pouquinho mais (pelo menos 5 caracteres).";
  return errors;
}

export function ReviewForm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const mutation = useCreateReview();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(name, rating, comment);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // Campo invisível preenchido = robô de spam. Nada é enviado.
    if (honeypot) return;

    mutation.mutate(
      { name, rating, comment },
      {
        onSuccess: () => {
          setName("");
          setRating(0);
          setComment("");
        },
      },
    );
  }

  const disabled = mutation.isPending || !isSupabaseConfigured;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-describedby="review-form-status">
      <div className="space-y-2">
        <Label htmlFor="review-name">Seu nome</Label>
        <Input
          id="review-name"
          name="name"
          autoComplete="name"
          maxLength={NAME_MAX}
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "review-name-error" : undefined}
          disabled={disabled}
        />
        {errors.name && (
          <p id="review-name-error" className="text-sm text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <StarInput value={rating} onChange={setRating} invalid={Boolean(errors.rating)} errorId="review-rating-error" />
        {errors.rating && (
          <p id="review-rating-error" className="mt-1 text-sm text-destructive">
            {errors.rating}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-baseline justify-between">
          <Label htmlFor="review-comment">Comentário</Label>
          <span className="text-xs text-ink/60" aria-hidden="true">
            {comment.length}/{COMMENT_MAX}
          </span>
        </div>
        <Textarea
          id="review-comment"
          name="comment"
          maxLength={COMMENT_MAX}
          placeholder="Como foi trabalhar com a Lunia?"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          aria-invalid={Boolean(errors.comment)}
          aria-describedby={errors.comment ? "review-comment-error" : undefined}
          disabled={disabled}
        />
        {errors.comment && (
          <p id="review-comment-error" className="text-sm text-destructive">
            {errors.comment}
          </p>
        )}
      </div>

      {/* Armadilha para robôs: escondida de pessoas e de leitores de tela */}
      <div className="hidden" aria-hidden="true">
        <label>
          Não preencha este campo
          <input tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
        </label>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" disabled={disabled}>
          {mutation.isPending && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
          {mutation.isPending ? "Enviando..." : "Enviar avaliação"}
        </Button>

        <div id="review-form-status" aria-live="polite" className="text-sm">
          {mutation.isSuccess && (
            <p className="font-semibold text-iris">Avaliação enviada! Agradecemos o carinho.</p>
          )}
          {mutation.isError && (
            <p role="alert" className="text-destructive">
              {mutation.error.message}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
