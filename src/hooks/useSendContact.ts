import { useMutation } from "@tanstack/react-query";
import { sendContactMessage, type ContactMessage } from "@/services/contact";

export function useSendContact() {
  return useMutation({
    mutationFn: (data: ContactMessage) => sendContactMessage(data),
  });
}
