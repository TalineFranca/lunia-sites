import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

interface SectionHeadingProps {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}

export function SectionHeading({
  id,
  index,
  label,
  title,
  intro,
  className,
  tone = "dark",
}: SectionHeadingProps) {
  const light = tone === "light";
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <p className={cn("eyebrow flex items-center gap-3", light && "text-cream/70")}>
        <span className="font-display text-sm normal-case italic tracking-normal">({index})</span>
        <span aria-hidden="true" className="h-px w-10 border-t border-dashed border-current" />
        {label}
      </p>
      <h2
        id={id}
        className={cn(
          "mt-5 text-[2.1rem] font-light leading-[1.1] sm:text-5xl md:text-[3.5rem]",
          light ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-5 max-w-xl text-lg leading-relaxed", light ? "text-cream/80" : "text-ink/75")}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
