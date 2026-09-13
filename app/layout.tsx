import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hossain Simum Anon — AI Content Specialist",
  description:
    "AI Content Specialist portfolio — imagination to AI-driven visuals and copy, optimized for results. Hossain Simum Anon.",
  openGraph: {
    title: "Hossain Simum Anon — AI Content Specialist",
    description: "I turn imagination into AI content that gets results.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${space.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}