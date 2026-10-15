import { SectionHeading } from "@/components/SectionHeading";
import { Highlight } from "@/components/Highlight";
import { Reveal } from "@/components/Reveal";
import { technologies } from "@/data/technologies";

export function Technologies() {
  return (
    <section aria-labelledby="tecnologias" className="py-24 md:py-36">
      <div className="container grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <SectionHeading
          id="tecnologias"
          index="04"
          label="Tecnologias"
          className="lg:sticky lg:top-28 lg:self-start"
          title={
            <>
              Ferramentas <Highlight>modernas</Highlight>, por baixo de um visual simples
            </>
          }
          intro="Você não precisa entender nada disso. Mas é bom saber que o seu site é feito com o que há de mais atual: rápido, seguro e fácil de evoluir."
        />

        <ul className="border-b border-dashed border-ink/25">
          {technologies.map((tech, i) => (
            <li key={tech.name}>
              <Reveal
                delay={0.04 * i}
                className="grid gap-1 border-t border-dashed border-ink/25 py-6 sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-baseline sm:gap-8"
              >
                <h3 className="text-3xl font-normal md:text-4xl">
                  {tech.name}
                  {tech.note && (
                    <span className="mt-1 block font-hand text-xl font-normal text-iris">{tech.note}</span>
                  )}
                </h3>
                <p className="text-ink/75">{tech.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
