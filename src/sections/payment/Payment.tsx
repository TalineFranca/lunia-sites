import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { paymentCopy, paymentMethods } from "@/data/payment";
import { cn } from "@/lib/utils";
import { PaymentIcon } from "./PaymentIcon";

export function Payment() {
  return (
    <section aria-labelledby="pagamento" className="pb-24 md:pb-36">
      <div className="container">
        <div className="border-t border-dashed border-ink/25 pt-16 md:pt-20">
          <SectionHeading id="pagamento" copy={paymentCopy} />

          <ul className={cn("mt-12 grid gap-4 lg:gap-6", paymentMethods.length > 1 ? "sm:grid-cols-3" : "max-w-md")}>
            {paymentMethods.map((method, i) => (
              <li key={method.title}>
                <Reveal delay={i * 0.08} className="flex h-full items-start gap-5 rounded-[1.5rem] border border-ink/10 bg-cream p-6">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-lavender text-iris">
                    <PaymentIcon name={method.icon} />
                  </span>
                  <span>
                    <h3 className="text-xl font-normal">{method.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">{method.description}</p>
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
