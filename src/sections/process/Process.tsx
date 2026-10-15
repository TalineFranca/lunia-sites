import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { WaveTop } from "@/components/Doodles";
import { processCopy, processSteps } from "@/data/process";

export function Process() {
  return (
    <section aria-labelledby="como-funciona" className="relative bg-lavender/45 py-24 md:py-36">
      <WaveTop />

      <div className="container">
        <SectionHeading id="como-funciona" copy={processCopy} stroke="#F5F1EA" />

        <ol className="relative mt-16 grid gap-10 md:mt-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Linha tracejada que liga as etapas (no computador) */}
          <span
            aria-hidden="true"
            className="absolute left-7 right-7 top-7 hidden border-t-2 border-dashed border-iris/35 lg:block"
          />
          {processSteps.map((step, i) => (
            <li key={step.title} className="relative">
              <Reveal delay={i * 0.1}>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-iris bg-cream font-display text-2xl italic text-iris">
                  {i + 1}
                </span>
                <h3 className="mt-6 text-2xl font-normal leading-tight">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/75">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
