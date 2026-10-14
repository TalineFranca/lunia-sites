import { SectionHeading } from "@/components/SectionHeading";
import { Highlight } from "@/components/Highlight";
import { Reveal } from "@/components/Reveal";
import { DashedCircle, Sparkle } from "@/components/Doodles";
import { site } from "@/data/site";

export function About() {
  const { founder } = site;

  return (
    <section aria-labelledby="sobre" className="relative overflow-hidden py-24 md:py-36">
      <DashedCircle className="absolute -left-24 top-16 h-64 w-64 text-iris/25 md:h-80 md:w-80" />

      <div className="container relative grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-20">
        <div className="relative">
          <SectionHeading
            id="sobre"
            index="01"
            label="Sobre"
            className="md:sticky md:top-28"
            title={
              <>
                Nasceu para ajudar negócios a conquistarem o seu <Highlight>próprio espaço</Highlight>.
              </>
            }
          />
          <Sparkle className="absolute -top-4 right-4 h-7 w-7 text-butter md:right-10" />
        </div>

        <div className="md:pt-16">
          <Reveal delay={0.1} className="max-w-xl space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              A Lunia nasceu de uma vontade simples: ajudar negócios a conquistarem seu próprio espaço na
              internet. Um lugar que não depende de algoritmo, que mostra quem você é e que transforma
              visitas em conversas.
            </p>
            <p>
              Por trás da Lunia está a Taline, fundadora, que está concluindo a graduação em Análise e
              Desenvolvimento de Sistemas. Cada projeto é acompanhado de perto, do primeiro “oi” até
              o site no ar.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 font-hand text-2xl text-iris">sem modelo pronto, sem pressa, sem enrolação.</p>
            <p className="mt-8 flex max-w-xl items-baseline justify-between gap-4 border-t border-dashed border-ink/25 pt-4">
              <span className="font-display text-2xl italic">{founder.name}</span>
              <span className="text-sm text-ink/70">{founder.role}</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
