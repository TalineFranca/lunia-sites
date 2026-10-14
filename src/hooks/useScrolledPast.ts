import { useEffect, useState } from "react";

/** Retorna true quando a página foi rolada além de `offset` pixels. */
export function useScrolledPast(offset: number) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return past;
}
