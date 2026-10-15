import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { projects, projectsCopy } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section aria-labelledby="projetos" className="py-24 md:py-36">
      <div className="container">
        <SectionHeading id="projetos" copy={projectsCopy} />

        <ul className="mt-16 grid gap-16 md:mt-20 md:grid-cols-2 md:gap-12 lg:gap-20">
          {projects.map((project, i) => (
            <li key={project.name} className={cn(i % 2 === 1 && "md:translate-y-16")}>
              <Reveal delay={(i % 2) * 0.12} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
