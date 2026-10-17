import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects, projectsCopy, projectTypes } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { ProjectType } from "@/types/content";
import { ProjectCard } from "./ProjectCard";

type Filter = "todos" | ProjectType;

const filters: { value: Filter; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "landing", label: projectTypes.landing.filterLabel },
  { value: "site", label: projectTypes.site.filterLabel },
];

export function Projects() {
  return (
    <section aria-labelledby="projetos" className="py-24 md:py-36">
      <div className="container">
        <SectionHeading id="projetos" copy={projectsCopy} />

        <Tabs defaultValue="todos" className="mt-12 md:mt-16">
          <TabsList aria-label="Filtrar projetos por tipo">
            {filters.map((filter) => (
              <TabsTrigger key={filter.value} value={filter.value}>
                {filter.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {filters.map((filter) => {
            const list = filter.value === "todos" ? projects : projects.filter((p) => p.type === filter.value);
            return (
              <TabsContent key={filter.value} value={filter.value} className="mt-12">
                <ul className="grid gap-16 md:grid-cols-2 md:gap-12 lg:gap-20">
                  {list.map((project, i) => (
                    <li key={project.name} className={cn(i % 2 === 1 && "md:translate-y-16")}>
                      <Reveal delay={(i % 2) * 0.12} className="h-full">
                        <ProjectCard project={project} />
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
