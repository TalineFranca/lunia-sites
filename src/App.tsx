import { QueryClientProvider } from "@tanstack/react-query";
import { MotionConfig } from "framer-motion";
import { queryClient } from "@/lib/queryClient";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Hero } from "@/sections/hero/Hero";
import { About } from "@/sections/about/About";
import { Services } from "@/sections/services/Services";
// Projetos escondidos até ter clientes. Para voltar: descomente as 2 linhas e o link em data/site.ts.
// import { Projects } from "@/sections/projects/Projects";
import { Technologies } from "@/sections/technologies/Technologies";
import { Reviews } from "@/sections/reviews/Reviews";
import { Contact } from "@/sections/contact/Contact";
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
          <About />
          <Services />
          {/* <Projects /> */}
          <Technologies />
          <Reviews />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </MotionConfig>
    </QueryClientProvider>
  );
}
