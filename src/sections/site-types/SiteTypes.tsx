import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { siteTypes, siteTypesCopy, siteTypesNote } from "@/data/siteTypes";
import { cn } from "@/lib/utils";

export function SiteTypes() {
  return (
    <section aria-labelledby="tipos" className="py-24 md:py-36">
      <div className="container">
        <SectionHeading id="tipos" copy={siteTypesCopy} />

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 lg:gap-8">
          {siteTypes.map((type, i) => (
            <Reveal key={type.name} delay={i * 0.12}>
              <article
                className={cn(
                  "h-full rounded-[2rem] p-8 md:p-10",
                  i === 0 ? "border border-dashed border-ink/30" : "bg-ink text-cream",
                )}
              >
                <h3 className="text-4xl font-light md:text-5xl">{type.name}</h3>
                <p className={cn("mt-5 text-lg leading-relaxed", i === 0 ? "text-ink/80" : "text-cream/85")}>
                  {type.summary}
                </p>

                <h4 className={cn("eyebrow mt-9", i === 1 && "text-cream/70")}>Ideal para</h4>
                <ul className="mt-4 space-y-3">
                  {type.idealFor.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <span
                        aria-hidden="true"
                        className={cn("mt-2.5 h-2 w-2 shrink-0 rounded-full", i === 0 ? "bg-iris" : "bg-butter")}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center font-hand text-2xl text-iris">{siteTypesNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
