import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { WaveTop } from "@/components/Doodles";
import { includedCopy, includedItems } from "@/data/included";

export function Included() {
  return (
    <section aria-labelledby="incluso" className="relative bg-lavender/45 py-24 md:py-36">
      <WaveTop />

      <div className="container">
        <SectionHeading id="incluso" copy={includedCopy} stroke="#F5F1EA" />

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 md:mt-20 lg:grid-cols-3 lg:gap-6">
          {includedItems.map((item, i) => (
            <li key={item.title}>
              <Reveal
                delay={(i % 3) * 0.08}
                className="h-full rounded-[1.75rem] border border-ink/10 bg-cream p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <span aria-hidden="true" className="font-display text-4xl font-light italic leading-none text-iris">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-2xl font-normal leading-tight">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/75">{item.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
