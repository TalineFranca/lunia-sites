import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HighlightProps {
  children: ReactNode;
  className?: string;
  /** Cor do traço feito à mão embaixo da palavra */
  stroke?: string;
}

/** Palavra em itálico com um traço desenhado à mão que aparece ao rolar. */
export function Highlight({ children, className, stroke = "#F3D98B" }: HighlightProps) {
  return (
    <em className={cn("relative inline-block whitespace-nowrap font-normal italic text-iris", className)}>
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute -bottom-1 left-0 z-0 h-[0.35em] w-full"
        viewBox="0 0 200 14"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M3 9.5C40 4 90 3.5 130 5.5c25 1.2 45 3 67 2"
          fill="none"
          stroke={stroke}
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeInOut" }}
        />
      </svg>
    </em>
  );
}
