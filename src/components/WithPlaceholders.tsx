const PLACEHOLDER = /(\[[^\]]+\])/g;

/**
 * Mostra o texto destacando valores ainda não definidos, como [PREÇO] e [PRAZO],
 * para que fiquem bem visíveis até serem preenchidos em src/data/.
 */
export function WithPlaceholders({ text }: { text: string }) {
  const parts = text.split(PLACEHOLDER);

  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark
            key={i}
            title="Valor ainda não definido: edite em src/data/"
            className="whitespace-nowrap rounded-md border-2 border-dashed border-iris bg-butter px-1.5 font-sans font-bold not-italic tracking-normal text-ink"
          >
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}
