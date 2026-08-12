import type { Locale } from "./site-copy";

type CtaPosition = "hero" | "header" | "process" | "pricing" | "final" | "floating_mobile";

type AnalyticsEvent =
  | { name: "cta_whatsapp_click"; payload: { position: CtaPosition; locale: Locale } }
  | { name: "faq_open"; payload: { item: string; locale: Locale } }
  | { name: "language_switch"; payload: { from: Locale; to: Locale } };

// TODO: no analytics provider is wired yet — decide which one (e.g. Plausible, PostHog, GA4)
// and replace the dev-only console.debug below with the real call. Keep payload shapes
// exactly as typed above: no phone numbers, message content, addresses, or photo filenames —
// review every call site against that before adding a new event.
//
// TODO(legal): if Albanian law requires consent before non-essential analytics, track() needs
// to be gated behind a consent check. Not implemented — this is a legal question, not an
// engineering one; flagging for a decision rather than guessing.
//
// TODO(pixel): if a Meta Pixel is added later, it should fire a Contact event only from the
// outbound WhatsApp click (i.e. alongside the "cta_whatsapp_click" call sites), never a Lead
// event on page load. Not implemented — do not add pixel code without explicit confirmation.
export function track<E extends AnalyticsEvent["name"]>(
  name: E,
  payload: Extract<AnalyticsEvent, { name: E }>["payload"]
): void {
  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", name, payload);
  }
}
