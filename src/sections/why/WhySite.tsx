import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { DashedCircle } from "@/components/Doodles";
import { whyCopy, whyQuestions } from "@/data/why";

export function WhySite() {
  return (
    <section aria-labelledby="por-que" className="relative overflow-hidden py-24 md:py-36">
      <DashedCircle className="absolute -right-24 top-10 h-64 w-64 text-iris/25 md:h-80 md:w-80" />

      <div className="container relative">
        <SectionHeading id="por-que" copy={whyCopy} />

        <ol className="mt-16 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-8 lg:gap-12">
          {whyQuestions.map((item, i) => (
            <li key={item.question} className="border-t border-dashed border-ink/30">
              <Reveal delay={i * 0.1} className="pt-7">
                <span className="font-display text-sm italic text-iris">pergunta {i + 1}</span>
                <h3 className="mt-3 font-display text-3xl font-light italic leading-tight">
                  “{item.question}”
                </h3>
                <p className="mt-4 leading-relaxed text-ink/75">{item.answer}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
