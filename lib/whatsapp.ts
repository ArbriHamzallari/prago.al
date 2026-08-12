import { SITE_FACTS } from "./site-facts";

// TODO(Prompt 6): append a locale-aware prefilled `text` param instead of a bare deep link.
export function getWhatsAppUrl(): string {
  return `https://wa.me/${SITE_FACTS.whatsappDigits}`;
}
