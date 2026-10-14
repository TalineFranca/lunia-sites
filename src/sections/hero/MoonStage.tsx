import { Component, lazy, Suspense, useRef, useState, type ReactNode } from "react";
import { useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { DashedCircle } from "@/components/Doodles";
import { MoonFallback } from "./MoonFallback";

// O three.js só é baixado quando o hero é montado, em um arquivo separado.
const Moon3D = lazy(() => import("./Moon3D"));

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

class MoonErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? <MoonFallback /> : this.props.children;
  }
}

export function MoonStage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reducedMotion = usePrefersReducedMotion();
  const [webgl] = useState(supportsWebGL);

  return (
    <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[22rem] md:max-w-[30rem]">
      {/* Órbitas tracejadas */}
      <DashedCircle className="absolute inset-0 h-full w-full text-ink/25" />
      <DashedCircle className="absolute inset-[12%] h-[76%] w-[76%] animate-[spin_120s_linear_infinite] text-iris/30 motion-reduce:animate-none" />
      <span
        aria-hidden="true"
        className="absolute left-[8%] top-[22%] h-3 w-3 rounded-full bg-butter ring-4 ring-cream"
      />

      <div className="absolute inset-[6%]">
        {webgl ? (
          <MoonErrorBoundary>
            <Suspense fallback={<MoonFallback />}>
              <Moon3D active={inView && !reducedMotion} />
            </Suspense>
          </MoonErrorBoundary>
        ) : (
          <MoonFallback />
        )}
      </div>
    </div>
  );
}
