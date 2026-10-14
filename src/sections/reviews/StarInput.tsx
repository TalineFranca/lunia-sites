import { useState } from "react";
import { Star } from "@/components/StarRating";
import { cn } from "@/lib/utils";

const LABELS = ["Ruim", "Regular", "Bom", "Muito bom", "Excelente"];

interface StarInputProps {
  value: number;
  onChange: (value: number) => void;
  invalid?: boolean;
  errorId?: string;
}

/** Seleção de nota com botões de rádio: funciona com teclado e leitor de tela. */
export function StarInput({ value, onChange, invalid, errorId }: StarInputProps) {
  const [hover, setHover] = useState(0);
  const shown = hover || value;

  return (
    <fieldset aria-invalid={invalid || undefined} aria-describedby={invalid ? errorId : undefined}>
      <legend className="text-sm font-semibold text-ink">Sua nota</legend>
      <div className="mt-3 flex items-center gap-3">
        <div className="flex" onMouseLeave={() => setHover(0)}>
          {LABELS.map((label, i) => {
            const n = i + 1;
            return (
              <label key={n} className="cursor-pointer p-1" onMouseEnter={() => setHover(n)}>
                <input
                  type="radio"
                  name="rating"
                  value={n}
                  checked={value === n}
                  onChange={() => onChange(n)}
                  className="peer sr-only"
                />
                <span className="sr-only">
                  {n} {n === 1 ? "estrela" : "estrelas"}: {label}
                </span>
                <Star
                  filled={n <= shown}
                  className={cn(
                    "h-8 w-8 rounded-md text-ink/40 transition-transform peer-focus-visible:ring-2 peer-focus-visible:ring-iris",
                    n <= shown && "scale-105",
                  )}
                />
              </label>
            );
          })}
        </div>
        <span className="font-hand text-xl text-iris" aria-hidden="true">
          {shown ? LABELS[shown - 1].toLowerCase() : ""}
        </span>
      </div>
    </fieldset>
  );
}
