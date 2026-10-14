import { SectionHeading } from "@/components/SectionHeading";
import { Highlight } from "@/components/Highlight";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";

export function Services() {
  return (
    <section aria-labelledby="servicos" className="relative bg-lavender/45 py-24 md:py-36">
      {/* Borda superior ondulada, para fugir do retângulo */}
      <svg
        aria-hidden="true"
        className="absolute -top-px left-0 h-8 w-full text-cream md:h-12"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
      >
        <path d="M0 0h1440v18c-240 30-480 30-720 12S240 0 0 24V0Z" fill="currentColor" />
      </svg>

      <div className="container">
        <SectionHeading
          id="servicos"
          index="02"
          label="Serviços"
          title={
            <>
              O que a gente <Highlight stroke="#F5F1EA">faz</Highlight> por você
            </>
          }
          intro="Cada projeto começa com uma boa conversa sobre o seu negócio. Depois, escolhemos juntos o formato que faz mais sentido."
        />

        <ol className="mt-16 grid gap-x-16 md:mt-20 md:grid-cols-2">
          {services.map((service, i) => (
            <li key={service.title} className="group border-t border-dashed border-ink/30">
              <Reveal delay={(i % 2) * 0.1} className="grid grid-cols-[auto_1fr] gap-x-6 py-9 md:gap-x-8">
                <span
                  aria-hidden="true"
                  className="font-display text-5xl font-light italic leading-none text-iris transition-transform duration-500 group-hover:-rotate-6 md:text-6xl"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-normal leading-tight md:text-[1.75rem]">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/75">{service.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
