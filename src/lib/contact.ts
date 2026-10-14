import type { MouseEvent } from "react";
import { site } from "@/data/site";

export function whatsappLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

interface EmailDraft {
  subject: string;
  body: string;
}

export function mailtoLink({ subject, body }: EmailDraft) {
  const params = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return `mailto:${site.email}?${params}`;
}

/** Abre a tela de "escrever" do Gmail no navegador, já preenchida. */
export function gmailComposeLink({ subject, body }: EmailDraft) {
  const params = new URLSearchParams({ view: "cm", fs: "1", to: site.email, su: subject, body });
  return `https://mail.google.com/mail/?${params}`;
}

const emailDraft: EmailDraft = { subject: "Orçamento de site", body: "Olá, Taline!\r\n\r\n" };

export const emailHref = mailtoLink(emailDraft);

/**
 * No computador, muitas vezes não há app de e-mail configurado e o mailto não abre nada.
 * Por isso, lá abrimos o Gmail no navegador; no celular, o mailto abre o app de e-mail.
 */
export function openEmail(e: MouseEvent<HTMLAnchorElement>) {
  if (window.matchMedia("(pointer: fine)").matches) {
    e.preventDefault();
    window.open(gmailComposeLink(emailDraft), "_blank", "noopener,noreferrer");
  }
}
