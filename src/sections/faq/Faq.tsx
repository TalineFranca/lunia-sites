import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { WithPlaceholders } from "@/components/WithPlaceholders";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqCopy, faqItems } from "@/data/faq";

export function Faq() {
  return (
    <section aria-labelledby="duvidas" className="py-24 md:py-36">
      <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <SectionHeading id="duvidas" copy={faqCopy} className="lg:sticky lg:top-28 lg:self-start" />

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="border-t border-dashed border-ink/25">
            {faqItems.map((item, i) => (
              <AccordionItem key={item.question} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <WithPlaceholders text={item.answer} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
