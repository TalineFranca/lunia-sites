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
