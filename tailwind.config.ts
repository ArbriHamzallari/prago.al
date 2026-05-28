import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        vishnje: "#6E1A2B",
        "vishnje-dark": "#4E0F1E",
        "vishnje-soft": "#8A2738",
        cream: "#FAF6F1",
        sand: "#E8DDD0",
        charcoal: "#1C1917",
        stone: "#8A8079",
        "booking-blue": "#3B5BA5"
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 20px 60px -20px rgba(28,25,23,0.15)"
      },
      borderRadius: {
        "2xl": "16px"
      }
    }
  },
  plugins: []
};

export default config;
