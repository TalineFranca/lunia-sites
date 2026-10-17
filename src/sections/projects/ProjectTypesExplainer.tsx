import { Reveal } from "@/components/Reveal";
import { projectTypes } from "@/data/projects";
import type { ProjectType } from "@/types/content";
import { ProjectTypeBadge } from "./ProjectTypeBadge";

const order: ProjectType[] = ["landing", "site"];

/** Explica, lado a lado, a diferença entre landing page e site. */
export function ProjectTypesExplainer() {
  return (
    <dl className="grid gap-4 sm:grid-cols-2 lg:gap-6">
      {order.map((type, i) => (
        <Reveal key={type} delay={i * 0.1} className="rounded-[1.75rem] border border-dashed border-ink/25 p-6 md:p-7">
          <dt>
            <ProjectTypeBadge type={type} />
            <span className="mt-4 block font-display text-2xl font-normal">{projectTypes[type].title}</span>
          </dt>
          <dd className="mt-2 leading-relaxed text-ink/75">{projectTypes[type].text}</dd>
        </Reveal>
      ))}
    </dl>
  );
}
