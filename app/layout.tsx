import "./globals.css";
import type { Metadata } from "next";

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
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}