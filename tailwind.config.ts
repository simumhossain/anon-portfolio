import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFB",
        foreground: "#0A0A0F",
        muted: "#F2F3F5",
        "muted-foreground": "#6B7280",
        border: "#E5E7EB",
        card: "#FFFFFF",
        brand: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          900: "#1E3A5F",
        },
        accent: { DEFAULT: "#6D5DF6", soft: "#EEF0FF" },
      },
      fontFamily: {
        sans: ["Public Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      borderRadius: { xl2: "14px" },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
        lift: "0 12px 32px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;