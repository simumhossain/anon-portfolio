import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        heading: ["var(--font-space)", "Space Grotesk", "-apple-system", "sans-serif"],
      },
      colors: {
        bg: "#fafafa",
        fg: "#09090b",
        card: "#ffffff",
        muted: "#f4f4f5",
        mfg: "#64748b",
        line: "#e4e4e7",
        accent: "#2563eb",
        "accent-soft": "#eaf0fe",
      },
      maxWidth: { container: "76rem" },
      boxShadow: {
        card: "0 1px 2px rgba(16,24,40,.04), 0 1px 3px rgba(16,24,40,.06)",
        hover: "0 8px 24px rgba(16,24,40,.08)",
        lift: "0 20px 40px rgba(9,9,11,.10)",
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