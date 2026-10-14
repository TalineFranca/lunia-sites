import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/data/site";
import { whatsappLink } from "@/lib/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream pb-10 pt-16">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="text-3xl" />
            <p className="mt-5 max-w-xs text-ink/70">
              Sites e landing pages feitos com cuidado para negócios que querem conquistar o próprio espaço na internet.
            </p>
          </div>

          <nav aria-label="Rodapé">
            <h2 className="eyebrow">Navegação</h2>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-ink/80 hover:text-iris hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow">Contato</h2>
            <ul className="mt-4 space-y-2 text-ink/80">
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-iris hover:underline">
                  WhatsApp: {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-all hover:text-iris hover:underline">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-iris hover:underline">
                  @{site.instagram}
                  <span className="sr-only"> no Instagram (abre em nova aba)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-dashed border-ink/25 pt-6 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Lunia Sites. Todos os direitos reservados.</p>
          <p className="font-hand text-lg text-iris">feito com calma, debaixo da lua.</p>
        </div>
      </div>
    </footer>
  );
}
