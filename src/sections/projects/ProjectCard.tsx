import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-[1.75rem] border border-ink/15 bg-lavender/40">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          width={800}
          height={600}
          className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-6">
        <p className="eyebrow text-[0.7rem]">{project.category}</p>
        <h3 className="mt-2 text-3xl font-normal">{project.name}</h3>
        <p className="mt-3 leading-relaxed text-ink/75">{project.description}</p>

        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 font-semibold text-ink underline decoration-iris decoration-2 underline-offset-[6px] transition-colors hover:text-iris"
          >
            Ver projeto
            <span className="sr-only">{project.name} (abre em nova aba)</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        ) : (
          <p className="mt-5 font-hand text-xl text-iris">em breve no ar</p>
        )}
      </div>
    </article>
  );
}
