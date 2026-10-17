import { projectTypes } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { ProjectType } from "@/types/content";

const styles: Record<ProjectType, string> = {
  landing: "bg-[#DAD2F8] text-[#2A1E78]",
  site: "bg-[#1C1A26] text-[#F4EFE8]",
};

/** Ícone de uma página (landing) ou de páginas empilhadas (site). */
function TypeIcon({ type }: { type: ProjectType }) {
  const line = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0" aria-hidden="true">
      {type === "landing" ? (
        <>
          <rect x="3.5" y="1.75" width="9" height="12.5" rx="1.5" {...line} />
          <path d="M6 5.5h4M6 8h4M6 10.5h2.5" {...line} strokeLinecap="round" />
        </>
      ) : (
        <>
          <rect x="5.5" y="1.75" width="8" height="10" rx="1.5" {...line} />
          <path d="M3.5 4.25v8.5a1.5 1.5 0 0 0 1.5 1.5h6.5" {...line} strokeLinecap="round" />
          <path d="M1.75 6.25v8" {...line} strokeLinecap="round" opacity="0.55" />
        </>
      )}
    </svg>
  );
}

/** Etiqueta com o tipo do projeto: tem texto, então não depende só da cor. */
export function ProjectTypeBadge({ type, className }: { type: ProjectType; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]",
        styles[type],
        className,
      )}
    >
      <TypeIcon type={type} />
      {projectTypes[type].label}
    </span>
  );
}
