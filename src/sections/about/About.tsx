import { SectionHeading } from "@/components/SectionHeading";
import { Highlight } from "@/components/Highlight";
import { Reveal } from "@/components/Reveal";
import { DashedCircle, Sparkle } from "@/components/Doodles";

export function About() {
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
              internet. Um site com a cara do seu negócio, que apresenta o seu trabalho com clareza e
              leva novos clientes até você.
            </p>
            <p>
              Cada projeto une um visual cuidadoso a tecnologia atual, rápido e pensado para o celular,
              e é acompanhado de perto, do primeiro “oi” até o site no ar.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 font-hand text-2xl text-iris">sem modelo pronto, sem pressa, sem enrolação.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
