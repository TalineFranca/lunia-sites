import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { RichTitleText } from "@/components/RichTitleText";
import { WithPlaceholders } from "@/components/WithPlaceholders";
import { DashedCircle } from "@/components/Doodles";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { finalCta } from "@/data/finalCta";
import { pricingPlans } from "@/data/pricing";
import { site } from "@/data/site";
import { emailHref, openEmail, whatsappLink } from "@/lib/contact";

/** Os planos com "a partir de" viram um resumo da oferta (ex.: Landing page a partir de R$ ...). */
const offer = pricingPlans.filter((plan) => plan.pricePrefix);

export function FinalCta() {
  return (
    <section aria-labelledby="contato" className="relative overflow-hidden bg-ink py-24 text-cream md:py-36">
      <DashedCircle className="absolute -right-40 -top-40 h-[28rem] w-[28rem] text-lavender/25" />
      <DashedCircle className="absolute -bottom-24 -left-24 h-72 w-72 text-butter/25" />

      <Reveal className="container relative text-center">
        <p className="eyebrow text-cream/70">{finalCta.eyebrow}</p>
        <h2 id="contato" className="mx-auto mt-5 max-w-3xl text-[2.3rem] font-light leading-[1.1] sm:text-5xl md:text-6xl">
          <RichTitleText title={finalCta.title} className="text-lavender" />
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/80">{finalCta.description}</p>

        <ul className="mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center gap-2 text-sm text-cream/80 sm:flex-row sm:gap-6">
          {offer.map((plan) => (
            <li key={plan.name}>
              {plan.name} {plan.pricePrefix} <WithPlaceholders text={plan.price} />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="bg-butter text-ink hover:bg-cream">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              {finalCta.ctaLabel}
            </a>
          </Button>
        </div>

        <p className="mt-6 text-sm text-cream/70">
          {finalCta.emailLabel}{" "}
          <a href={emailHref} onClick={openEmail} className="font-semibold text-cream underline underline-offset-4">
            {site.email}
          </a>
        </p>
      </Reveal>
    </section>
  );
}
