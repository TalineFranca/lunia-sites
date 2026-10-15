import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { pricingCopy, pricingNotes, pricingPlans } from "@/data/pricing";
import { PricingCard } from "./PricingCard";

export function Pricing() {
  return (
    <section aria-labelledby="precos" className="py-24 md:py-36">
      <div className="container">
        <SectionHeading id="precos" copy={pricingCopy} />

        <ul className="mt-16 grid gap-6 md:mt-20 lg:grid-cols-3 lg:gap-6">
          {pricingPlans.map((plan, i) => (
            <li key={plan.name}>
              <Reveal delay={i * 0.1} className="h-full">
                <PricingCard plan={plan} dark={i === 1} />
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={0.2}>
          <ul className="mt-10 space-y-3 rounded-[1.5rem] bg-butter/40 p-6 text-sm leading-relaxed text-ink/80 md:p-7">
            {pricingNotes.map((note) => (
              <li key={note} className="flex gap-3">
                <span aria-hidden="true" className="font-display text-lg leading-none text-iris">
                  *
                </span>
                {note}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
