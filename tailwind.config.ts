import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-archivo)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-space)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      colors: {
        bg: "#0e0e10",
        fg: "#e7e7e9",
        card: "#16161a",
        "card-warm": "#1c1b20",
        muted: "#101014",
        mfg: "#9aa1ab",
        line: "#26262e",
        accent: "#3b82f6",
        "accent-soft": "rgba(59,130,246,.14)",
      },
      maxWidth: { container: "76rem" },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(255,255,255,.02), 0 1px 3px rgba(0,0,0,.35)",
        hover: "0 12px 32px rgba(0,0,0,.55)",
        lift: "0 24px 48px rgba(0,0,0,.6)",
        glow: "0 0 24px rgba(59,130,246,.25)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp .5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;