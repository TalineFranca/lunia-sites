import { site } from "@/data/site";

export function whatsappLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink({ subject, body }: { subject: string; body: string }) {
  const params = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return `mailto:${site.email}?${params}`;
}
