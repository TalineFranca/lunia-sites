import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { gmailComposeLink, mailtoLink } from "@/lib/contact";

const fieldClass =
  "border-cream/30 bg-cream/5 text-cream placeholder:text-cream/45 focus-visible:border-butter focus-visible:ring-butter";

/**
 * Formulário que abre o e-mail com a mensagem já preenchida.
 * No celular usa o app de e-mail (mailto); no computador, onde muitas vezes
 * não há app configurado, abre o Gmail no navegador.
 */
export function EmailForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = business.trim()
      ? `Orçamento de site: ${business.trim()}`
      : "Orçamento de site pelo site da Lunia";
    const body = [
      "Olá, Lunia!",
      "",
      message.trim(),
      "",
      `Nome: ${name.trim()}`,
      business.trim() ? `Negócio: ${business.trim()}` : "",
    ]
      .filter((line, i, all) => line !== "" || all[i - 1] !== "")
      .join("\r\n");

    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile) {
      window.location.href = mailtoLink({ subject, body });
    } else {
      window.open(gmailComposeLink({ subject, body }), "_blank", "noopener,noreferrer");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email-name" className="text-cream">
            Seu nome
          </Label>
          <Input
            id="email-name"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email-business" className="text-cream">
            Nome do negócio <span className="font-normal text-cream/60">(opcional)</span>
          </Label>
          <Input
            id="email-business"
            autoComplete="organization"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            className={fieldClass}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-message" className="text-cream">
          Mensagem
        </Label>
        <Textarea
          id="email-message"
          required
          placeholder="Conte um pouco sobre o seu negócio e o site que você imagina."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={fieldClass}
        />
      </div>
      <Button type="submit" variant="light">
        Enviar mensagem
      </Button>
    </form>
  );
}
