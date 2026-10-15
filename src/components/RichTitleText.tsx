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
  // Pontuação colada no destaque (ex.: "?" ou ".") fica na mesma linha que ele.
  const [, glued = "", rest = ""] = (title.end ?? "").match(/^(\S*)([\s\S]*)$/) ?? [];

  return (
    <>
      {title.start && `${title.start} `}
      <span className="whitespace-nowrap">
        <Highlight stroke={stroke} className={className}>
          {title.highlight}
        </Highlight>
        {glued}
      </span>
      {rest}
    </>
  );
}
