import { siAirbnb, siBookingdotcom, siExpedia, siGoogle, siTripdotcom } from "simple-icons";

type IconData = { path: string; hex: string; title: string };

const ICON_MAP: Record<string, IconData> = {
  airbnb: { path: siAirbnb.path, hex: siAirbnb.hex, title: "Airbnb" },
  bookingdotcom: { path: siBookingdotcom.path, hex: siBookingdotcom.hex, title: "Booking.com" },
  expedia: { path: siExpedia.path, hex: siExpedia.hex, title: "Expedia" },
  tripdotcom: { path: siTripdotcom.path, hex: siTripdotcom.hex, title: "Trip.com" },
  google: { path: siGoogle.path, hex: siGoogle.hex, title: "Google" }
};

const LETTER_FALLBACK: Record<string, string> = {
  vrbo: "V",
  agoda: "A",
  hometogo: "H",
  holidu: "H",
  nestpick: "N"
};

export function getPlatformIcon(key: string): IconData | null {
  return ICON_MAP[key] ?? null;
}

export function getPlatformLetter(key: string): string {
  return LETTER_FALLBACK[key] ?? key.charAt(0).toUpperCase();
}

export const PLATFORM_BADGE_LAYOUT = [
  { key: "airbnb", className: "left-[8%] top-[6%] -rotate-6" },
  { key: "bookingdotcom", className: "left-[38%] top-[4%] rotate-3" },
  { key: "vrbo", className: "left-[68%] top-[8%] -rotate-3" },
  { key: "expedia", className: "left-[12%] top-[28%] rotate-6" },
  { key: "tripdotcom", className: "left-[42%] top-[26%] -rotate-4" },
  { key: "agoda", className: "left-[72%] top-[30%] rotate-2" },
  { key: "hometogo", className: "left-[6%] top-[52%] -rotate-2" },
  { key: "google", className: "left-[36%] top-[50%] rotate-5" },
  { key: "holidu", className: "left-[66%] top-[54%] -rotate-5" },
  { key: "nestpick", className: "left-[22%] top-[72%] rotate-3" },
  { key: "airbnb", className: "left-[52%] top-[74%] -rotate-6" }
] as const;
