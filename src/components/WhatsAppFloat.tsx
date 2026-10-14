import { AnimatePresence, motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { whatsappLink } from "@/lib/contact";
import { useScrolledPast } from "@/hooks/useScrolledPast";

export function WhatsAppFloat() {
  const visible = useScrolledPast(400);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar com a Taline no WhatsApp (abre em nova aba)"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.3 }}
          className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-iris text-cream shadow-[0_6px_0_0_#1E1B2E] transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_0_#1E1B2E] md:bottom-8 md:right-8"
        >
          <WhatsAppIcon className="h-7 w-7" />
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink px-3 py-1.5 font-hand text-lg text-cream opacity-0 transition-opacity group-hover:opacity-100 md:block">
            bora conversar?
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
