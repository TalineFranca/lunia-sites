import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RichTitleText } from "@/components/RichTitleText";
import { HandArrow } from "@/components/Doodles";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { hero } from "@/data/hero";
import { whatsappLink } from "@/lib/contact";
import { MoonStage } from "./MoonStage";

const ease = [0.22, 1, 0.36, 1] as const;

function CheckMark() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="#F3D98B" />
      <path d="M6 10.4l2.6 2.6L14 7.6" fill="none" stroke="#1E1B2E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="container grid items-center gap-10 pb-20 pt-10 md:grid-cols-[1.15fr_1fr] md:gap-6 md:pb-28 md:pt-16 lg:pt-20">
        <div>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            id="hero-title"
            className="mt-6 text-[2.75rem] font-light leading-[1.02] text-ink sm:text-6xl lg:text-[5.25rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
          >
            <RichTitleText title={hero.title} />
          </motion.h1>

          <motion.p
            className="mt-7 max-w-lg text-lg leading-relaxed text-ink/75"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
          >
            {hero.description}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          >
            <Button asChild size="lg">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                {hero.ctaLabel}
              </a>
            </Button>
            <Button asChild variant="link" className="self-start sm:self-auto">
              <a href={hero.secondaryLink.href}>
                {hero.secondaryLink.label} <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.ul
            aria-label="Garantias"
            className="mt-9 flex flex-col gap-3 text-sm font-semibold text-ink/80 sm:flex-row sm:flex-wrap sm:gap-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
          >
            {hero.guarantees.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckMark />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="relative"
          // Só opacidade: escala aqui faria o canvas 3D medir o tamanho errado
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
        >
          <MoonStage />
          <p className="absolute -bottom-6 left-2 flex items-end gap-1 font-hand text-2xl text-iris md:-bottom-2 md:-left-6">
            {hero.note}
            <HandArrow className="mb-3 h-10 w-12 -scale-y-100 text-iris" />
          </p>
        </motion.div>
      </div>

      {/* Linha tracejada que separa o hero do resto da página */}
      <div aria-hidden="true" className="container">
        <div className="border-t border-dashed border-ink/20" />
      </div>
    </section>
  );
}
