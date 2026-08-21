import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  // Colors, fonts, and boxShadow.card live in app/globals.css's @theme block (Tailwind v4
  // CSS-first config) — keep only tokens that don't have a CSS-first equivalent here.
  theme: {
    extend: {
      borderRadius: {
        card: "12px",
        hero: "20px",
        // "panel" is still consumed by components/ui/panel.tsx (OwnerVisibility, Prompt 4 —
        // not yet reverted to spec this round). Remove once that section is restored.
        panel: "32px"
      },
      maxWidth: {
        content: "1200px"
      }
    }
  },
  plugins: []
};

export default config;
