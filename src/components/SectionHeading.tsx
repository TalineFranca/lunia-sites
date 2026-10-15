import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { RichTitleText } from "@/components/RichTitleText";
import type { SectionCopy } from "@/types/content";

interface SectionHeadingProps {
  id: string;
  /** Número, etiqueta, título e texto de apoio vindos de src/data/ */
  copy: SectionCopy;
  /** Cor do traço embaixo da palavra em destaque (ex.: creme em fundos lavanda) */
  stroke?: string;
  /** Conteúdo extra logo abaixo do texto de apoio */
  children?: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}

export function SectionHeading({ id, copy, stroke, children, className, tone = "dark" }: SectionHeadingProps) {
  const light = tone === "light";
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <p className={cn("eyebrow flex items-center gap-3", light && "text-cream/70")}>
        <span className="font-display text-sm normal-case italic tracking-normal">({copy.index})</span>
        <span aria-hidden="true" className="h-px w-10 border-t border-dashed border-current" />
        {copy.label}
      </p>
      <h2
        id={id}
        className={cn(
          "mt-5 text-[2.1rem] font-light leading-[1.1] sm:text-5xl md:text-[3.5rem]",
          light ? "text-cream" : "text-ink",
        )}
      >
        <RichTitleText title={copy.title} stroke={stroke} className={light ? "text-lavender" : undefined} />
      </h2>
      {copy.intro && (
        <p className={cn("mt-5 max-w-xl text-lg leading-relaxed", light ? "text-cream/80" : "text-ink/75")}>
          {copy.intro}
        </p>
      )}
      {children}
    </Reveal>
  );
}
