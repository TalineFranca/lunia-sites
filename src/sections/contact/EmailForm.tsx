import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSendContact } from "@/hooks/useSendContact";
import { gmailComposeLink, mailtoLink } from "@/lib/contact";
import { isContactFormConfigured } from "@/services/contact";

const fieldClass =
  "border-cream/30 bg-cream/5 text-cream placeholder:text-cream/45 focus-visible:border-butter focus-visible:ring-butter";

const emptyForm = { name: "", email: "", business: "", message: "", botcheck: "" };

/** Sem a chave do Web3Forms, abre o e-mail do visitante já preenchido (plano B). */
function openEmailDraft({ name, business, message }: typeof emptyForm) {
  const subject = business.trim() ? `Orçamento de site: ${business.trim()}` : "Orçamento de site";
  const body = ["Olá, Lunia!", "", message.trim(), "", `Nome: ${name.trim()}`].join("\r\n");
  if (window.matchMedia("(pointer: coarse)").matches) {
    window.location.href = mailtoLink({ subject, body });
  } else {
    window.open(gmailComposeLink({ subject, body }), "_blank", "noopener,noreferrer");
  }
}

/** Formulário de contato: envia a mensagem direto para o e-mail da Lunia. */
export function EmailForm() {
  const [form, setForm] = useState(emptyForm);
  const mutation = useSendContact();

  const set = (field: keyof typeof emptyForm) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isContactFormConfigured) {
      openEmailDraft(form);
      return;
    }
    mutation.mutate(form, { onSuccess: () => setForm(emptyForm) });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name" className="text-cream">
            Seu nome
          </Label>
          <Input
            id="contact-name"
            required
            autoComplete="name"
            value={form.name}
            onChange={set("name")}
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email" className="text-cream">
            Seu e-mail
          </Label>
          <Input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={set("email")}
            className={fieldClass}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-business" className="text-cream">
          Nome do negócio <span className="font-normal text-cream/60">(opcional)</span>
        </Label>
        <Input
          id="contact-business"
          autoComplete="organization"
          value={form.business}
          onChange={set("business")}
          className={fieldClass}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message" className="text-cream">
          Mensagem
        </Label>
        <Textarea
          id="contact-message"
          required
          placeholder="Conte um pouco sobre o seu negócio e o site que você imagina."
          value={form.message}
          onChange={set("message")}
          className={fieldClass}
        />
      </div>

      {/* Armadilha para robôs: escondida de pessoas e de leitores de tela */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
        checked={Boolean(form.botcheck)}
        onChange={(e) => setForm((f) => ({ ...f, botcheck: e.target.checked ? "on" : "" }))}
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" variant="light" disabled={mutation.isPending}>
          {mutation.isPending && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
          {mutation.isPending ? "Enviando..." : "Enviar mensagem"}
        </Button>
        <div aria-live="polite" className="text-sm">
          {mutation.isSuccess && (
            <p className="font-semibold text-butter">Mensagem enviada! Logo, logo você recebe uma resposta.</p>
          )}
          {mutation.isError && (
            <p role="alert" className="text-[#F4A6A6]">
              {mutation.error.message}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
