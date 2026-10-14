import { ArrowUpRight, Mail } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Highlight } from "@/components/Highlight";
import { Reveal } from "@/components/Reveal";
import { DashedCircle } from "@/components/Doodles";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/contact";

export function Contact() {
  return (
    <section aria-labelledby="contato" className="relative overflow-hidden bg-ink py-24 text-cream md:py-36">
      <DashedCircle className="absolute -right-40 -top-40 h-[28rem] w-[28rem] text-lavender/25" />
      <DashedCircle className="absolute -bottom-24 -left-24 h-72 w-72 text-butter/25" />

      <div className="container relative grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-24">
        <SectionHeading
          id="contato"
          index="05"
          label="Contato"
          tone="light"
          title={
            <>
              Vamos tirar o seu site do <Highlight className="text-lavender">papel</Highlight>?
            </>
          }
          intro="Conte sobre o seu negócio. O orçamento é sem compromisso e a resposta vem rapidinho."
        />

        <Reveal delay={0.1} className="space-y-4">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-[1.5rem] bg-butter px-6 py-5 text-ink transition-transform hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-4">
              <WhatsAppIcon className="h-7 w-7" />
              <span>
                <span className="block text-sm font-semibold">WhatsApp</span>
                <span className="block font-display text-xl md:text-2xl">{site.whatsappDisplay}</span>
              </span>
            </span>
            <ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            <span className="sr-only">(abre em nova aba)</span>
          </a>

          <a
            href={`mailto:${site.email}`}
            className="group flex items-center justify-between gap-4 rounded-[1.5rem] border border-cream/25 px-6 py-5 transition-colors hover:border-cream/60"
          >
            <span className="flex min-w-0 items-center gap-4">
              <Mail className="h-7 w-7 shrink-0" strokeWidth={1.5} aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-cream/70">E-mail</span>
                <span className="block truncate font-display text-xl md:text-2xl">{site.email}</span>
              </span>
            </span>
            <ArrowUpRight className="h-6 w-6 shrink-0" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
