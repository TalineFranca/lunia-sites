import { Button } from "@/components/ui/button";
import { WithPlaceholders } from "@/components/WithPlaceholders";
import { whatsappLink } from "@/lib/contact";
import { cn } from "@/lib/utils";
import type { PricingPlan } from "@/types/content";

interface PricingCardProps {
  plan: PricingPlan;
  /** Visual escuro, para dar ritmo entre os cards */
  dark?: boolean;
}

export function PricingCard({ plan, dark = false }: PricingCardProps) {
  const muted = dark ? "text-cream/75" : "text-ink/70";

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-[2rem] p-7 md:p-9",
        dark ? "bg-ink text-cream" : "border border-ink/15 bg-cream",
        plan.tag && "border-dashed border-ink/30 bg-transparent",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-2xl font-normal md:text-3xl">{plan.name}</h3>
        {plan.tag && (
          <span className="rounded-full bg-lavender px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]">
            {plan.tag}
          </span>
        )}
      </div>

      <p className="mt-6">
        {plan.pricePrefix && <span className={cn("block text-sm", muted)}>{plan.pricePrefix}</span>}
        <span className="font-display text-4xl font-light md:text-5xl">
          <WithPlaceholders text={plan.price} />
        </span>
        {plan.priceSuffix && <span className={cn("ml-1 text-lg", muted)}>{plan.priceSuffix}</span>}
      </p>
      <p className={cn("mt-4 leading-relaxed", muted)}>{plan.summary}</p>

      <h4 className={cn("eyebrow mt-8", dark && "text-cream/70")}>O que está incluso</h4>
      <ul className="mt-4 space-y-2.5">
        {plan.includes.map((item) => (
          <li key={item} className="flex gap-3 leading-snug">
            <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true">
              <path
                d="M5 10.5l3.2 3.2L15 7"
                fill="none"
                stroke={dark ? "#F3D98B" : "#4B3BB0"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {item}
          </li>
        ))}
      </ul>

      <dl className={cn("mt-8 space-y-2 border-t border-dashed pt-5 text-sm", dark ? "border-cream/25" : "border-ink/25")}>
        {plan.details.map((detail) => (
          <div key={detail.label} className="flex items-baseline justify-between gap-4">
            <dt className={muted}>{detail.label}</dt>
            <dd className="text-right font-semibold">
              <WithPlaceholders text={detail.value} />
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-auto pt-8">
        <Button asChild variant={dark ? "light" : "outline"} className="w-full">
          <a href={whatsappLink(plan.whatsappMessage)} target="_blank" rel="noopener noreferrer">
            {plan.ctaLabel}
            <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
          </a>
        </Button>
      </div>
    </article>
  );
}
