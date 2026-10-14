import { SectionHeading } from "@/components/SectionHeading";
import { Highlight } from "@/components/Highlight";
import { Reveal } from "@/components/Reveal";
import { DashedCircle, Sparkle } from "@/components/Doodles";
import { site } from "@/data/site";

export function About() {
  const { founder } = site;

  return (
    <section aria-labelledby="sobre" className="py-24 md:py-36">
      <div className="container grid gap-16 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-20">
        {/* Foto da fundadora */}
        <Reveal className="relative order-2 mx-auto w-full max-w-sm md:order-1">
          <DashedCircle className="absolute -left-8 -top-8 h-40 w-40 text-iris/40" />
          <Sparkle className="absolute -right-3 top-10 h-7 w-7 text-butter" />
          <figure className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border border-ink/15 bg-lavender/60">
              {founder.photo ? (
                <img
                  src={founder.photo}
                  alt={`${founder.name}, ${founder.role.toLowerCase()} da Lunia Sites`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 border-2 border-dashed border-iris/30 rounded-t-full text-center">
                  <span className="font-hand text-3xl text-iris">a foto vem aqui</span>
                  <span className="max-w-[14rem] text-xs text-ink/60">
                    Edite <code className="font-mono">founder.photo</code> em src/data/site.ts
                  </span>
                </div>
              )}
            </div>
            <figcaption className="mt-5 flex items-baseline justify-between border-t border-dashed border-ink/25 pt-4">
              <span className="font-display text-2xl italic">{founder.name}</span>
              <span className="text-sm text-ink/70">{founder.role}</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="order-1 md:order-2">
          <SectionHeading
            id="sobre"
            index="01"
            label="Sobre"
            title={
              <>
                Nasceu para ajudar negócios a conquistarem o seu <Highlight>próprio espaço</Highlight>.
              </>
            }
          />
          <Reveal delay={0.1} className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              A Lunia nasceu de uma vontade simples: ajudar negócios a conquistarem seu próprio espaço na
              internet. Um lugar que não depende de algoritmo, que mostra quem você é e que transforma
              visitas em conversas.
            </p>
            <p>
              Por trás da Lunia está a Taline, fundadora, que está concluindo a graduação em Análise e
              Desenvolvimento de Sistemas. Cada projeto é acompanhado de perto, do primeiro “oi” no
              WhatsApp até o site no ar.
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
