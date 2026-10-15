import { Highlight } from "@/components/Highlight";
import type { RichTitle } from "@/types/content";

interface RichTitleTextProps {
  title: RichTitle;
  /** Cor do traço embaixo da palavra em destaque */
  stroke?: string;
  className?: string;
}

/** Monta um título vindo de src/data com a palavra em destaque. */
export function RichTitleText({ title, stroke, className }: RichTitleTextProps) {
  return (
    <>
      {title.start && `${title.start} `}
      <Highlight stroke={stroke} className={className}>
        {title.highlight}
      </Highlight>
      {title.end}
    </>
  );
}
