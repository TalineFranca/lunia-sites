import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/site";
import { whatsappLink } from "@/lib/contact";
import { useScrolledPast } from "@/hooks/useScrolledPast";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolledPast(24);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        scrolled || open ? "border-b border-dashed border-ink/15 bg-cream/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <a href="#inicio" aria-label="Lunia Sites, voltar ao início" onClick={() => setOpen(false)}>
          <Logo className="h-8 md:h-9" />
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ink/80 underline-offset-[6px] transition-colors hover:text-iris hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" variant="outline">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Fazer orçamento
            </a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-mobile"
            aria-label="Menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden md:hidden"
          >
            <ul className="container flex flex-col pb-6">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-dashed border-ink/15">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-display text-2xl font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-6">
                <Button asChild className="w-full">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    Fazer orçamento no WhatsApp
                  </a>
                </Button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
