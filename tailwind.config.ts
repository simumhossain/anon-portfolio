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
        bg: "#0e0e12",
        fg: "#e8e8ea",
        card: "#17161c",
        "card-warm": "#1d1c23",
        muted: "#121119",
        mfg: "#a5adb8",
        line: "#2a2a33",
        accent: "#5b8def",
        "accent-2": "#8a5be8",
        "accent-3": "#2fc6c0",
        "accent-soft": "rgba(91,141,239,.15)",
      },
      maxWidth: { container: "76rem" },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(255,255,255,.02), 0 1px 3px rgba(0,0,0,.4)",
        hover: "0 14px 34px rgba(0,0,0,.6)",
        lift: "0 26px 52px rgba(0,0,0,.65)",
        glow: "0 0 24px rgba(91,141,239,.35)",
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