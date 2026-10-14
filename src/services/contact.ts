import { site } from "@/data/site";

const ENDPOINT = "https://api.web3forms.com/submit";
const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

export const isContactFormConfigured = Boolean(accessKey);

export interface ContactMessage {
  name: string;
  email: string;
  business: string;
  message: string;
  /** Campo-armadilha para robôs: pessoas deixam vazio */
  botcheck: string;
}

/** Envia a mensagem do formulário para o e-mail da Lunia pelo Web3Forms. */
export async function sendContactMessage(data: ContactMessage): Promise<void> {
  if (!accessKey) {
    throw new Error("O formulário ainda não está configurado.");
  }

  const business = data.business.trim();
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: business ? `Novo contato pelo site: ${business}` : "Novo contato pelo site",
      from_name: site.name,
      name: data.name.trim(),
      email: data.email.trim(),
      negocio: business || "(não informado)",
      message: data.message.trim(),
      botcheck: data.botcheck,
    }),
  }).catch(() => {
    throw new Error("Sem conexão. Verifique sua internet e tente de novo.");
  });

  const result = (await response.json().catch(() => null)) as { success?: boolean } | null;
  if (!response.ok || !result?.success) {
    throw new Error(`Não foi possível enviar agora. Tente de novo ou escreva para ${site.email}.`);
  }
}
