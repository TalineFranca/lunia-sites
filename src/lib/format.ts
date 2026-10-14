const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const ratingFormatter = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

export const formatDate = (iso: string) => dateFormatter.format(new Date(iso));
export const formatRating = (value: number) => ratingFormatter.format(value);
