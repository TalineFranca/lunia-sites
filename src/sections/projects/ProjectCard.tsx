import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projectTag } from "@/data/projects";
import type { Project } from "@/types/content";
import { ProjectTypeBadge } from "./ProjectTypeBadge";

export function ProjectCard({ project }: { project: Project }) {
  const pageCount = project.type === "site" ? project.pages?.length : undefined;

  return (
    <article className="group flex h-full flex-col">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-ink/15 bg-lavender/40">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          width={1200}
          height={900}
          className="aspect-[4/3] h-auto w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full border border-dashed border-ink/30 bg-cream/90 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink/75 backdrop-blur-sm">
          {projectTag}
        </span>
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-3">
          <ProjectTypeBadge type={project.type} />
          {pageCount ? (
            <span className="text-sm font-semibold text-ink/70" title={project.pages?.join(", ")}>
              {pageCount} {pageCount === 1 ? "página" : "páginas"}
            </span>
          ) : null}
        </div>
        <h3 className="mt-4 text-3xl font-normal">{project.name}</h3>
        <p className="mt-3 leading-relaxed text-ink/75">{project.description}</p>

        {project.technologies.length > 0 && (
          <ul aria-label="Tecnologias usadas" className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="rounded-full bg-lavender/60 px-3 py-1 text-xs font-semibold text-ink/80">
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-7">
          <Button asChild variant="outline">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Ver projeto
              <span className="sr-only">: {project.name} (abre em nova aba)</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
