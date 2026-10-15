import { QueryClientProvider } from "@tanstack/react-query";
import { MotionConfig } from "framer-motion";
import { queryClient } from "@/lib/queryClient";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Hero } from "@/sections/hero/Hero";
import { WhySite } from "@/sections/why/WhySite";
import { Included } from "@/sections/included/Included";
import { SiteTypes } from "@/sections/site-types/SiteTypes";
import { Projects } from "@/sections/projects/Projects";
import { Process } from "@/sections/process/Process";
import { Reviews } from "@/sections/reviews/Reviews";
import { Footer } from "@/sections/footer/Footer";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion="user">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">
          <Hero />
          <WhySite />
          <Included />
          <SiteTypes />
          <Projects />
          <Process />
          <Reviews />
        </main>
        <Footer />
        <WhatsAppFloat />
      </MotionConfig>
    </QueryClientProvider>
  );
}
