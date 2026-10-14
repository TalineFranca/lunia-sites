import { SectionHeading } from "@/components/SectionHeading";
import { Highlight } from "@/components/Highlight";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section aria-labelledby="projetos" className="py-24 md:py-36">
      <div className="container">
        <SectionHeading
          id="projetos"
          index="03"
          label="Projetos"
          title={
            <>
              Alguns <Highlight>lugares</Highlight> que ganharam vida
            </>
          }
          intro="Projetos de exemplo para mostrar o estilo da Lunia: cada negócio com a sua identidade, nenhum igual ao outro."
        />

        <ul className="mt-16 grid gap-16 md:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {projects.map((project, i) => (
            <li key={project.name} className={cn(i % 3 === 1 && "lg:translate-y-16")}>
              <Reveal delay={(i % 3) * 0.12}>
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
