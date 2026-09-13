import { Space_Grotesk, Archivo } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
});
const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Hossain Simum Anon — Business × AI",
  description:
    "Hossain Simum Anon — visionary who understands business end to end and scales it with AI. Founder, marketer, engineer, and consultant. Dhaka, Bangladesh.",
  openGraph: {
    title: "Hossain Simum Anon — Business × AI",
    description: "I understand business and scale it with AI.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${space.variable} ${archivo.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}