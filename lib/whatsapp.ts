import { SITE_FACTS } from "./site-facts";

const PREFILLED_MESSAGE_SQ = "Përshëndetje! Dua një vlerësim fillestar për pronën time.";

// Every CTA — both locales — opens the same number with this same Albanian message.
// TODO(future prompt): confirm whether the prefilled message itself should localize to
// English on /en, or intentionally stay Albanian since replies are handled in Albanian.
export function getWhatsAppUrl(): string {
  return `https://wa.me/${SITE_FACTS.whatsappDigits}?text=${encodeURIComponent(PREFILLED_MESSAGE_SQ)}`;
}
