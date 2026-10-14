import { SectionHeading } from "@/components/SectionHeading";
import { Highlight } from "@/components/Highlight";
import { Reveal } from "@/components/Reveal";
import { useReviews } from "@/hooks/useReviews";
import { isSupabaseConfigured } from "@/lib/supabase";
import { ReviewForm } from "./ReviewForm";
import { ReviewList } from "./ReviewList";
import { ReviewSummary } from "./ReviewSummary";

export function Reviews() {
  const { data, isLoading, isError, error, refetch } = useReviews();

  return (
    <section aria-labelledby="avaliacoes" className="bg-lavender/45 py-24 md:py-36">
      <div className="container">
        <SectionHeading
          id="avaliacoes"
          index="04"
          label="Avaliações"
          title={
            <>
              O que dizem <Highlight stroke="#F5F1EA">por aí</Highlight>
            </>
          }
          intro="Já trabalhou com a Lunia? Sua opinião ajuda outros negócios a decidirem e ajuda a Lunia a melhorar sempre."
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2rem] border border-ink/10 bg-cream p-6 md:p-9">
              <h3 className="text-2xl font-normal">Deixe a sua avaliação</h3>
              {!isSupabaseConfigured && (
                <p role="note" className="mt-3 rounded-xl bg-butter/60 p-3 text-sm">
                  As avaliações ainda não estão conectadas. Configure o Supabase no arquivo .env para ativar.
                </p>
              )}
              <div className="mt-6">
                <ReviewForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mb-8">
              <ReviewSummary average={data?.average ?? 0} total={data?.total ?? 0} />
            </div>
            {isSupabaseConfigured && (
              <ReviewList
                reviews={data?.reviews ?? []}
                isLoading={isLoading}
                isError={isError}
                errorMessage={error?.message}
                onRetry={() => refetch()}
              />
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
