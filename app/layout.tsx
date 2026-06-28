import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Southstar Studio | Design Agency",
    template: "%s | Southstar Studio",
  },
  description:
    "Southstar Studio is a modern design agency crafting thoughtful brands, websites, and digital experiences for ambitious startups.",
  keywords: [
    "design agency",
    "branding",
    "web design",
    "UI/UX",
    "startup design",
    "Next.js",
  ],
  authors: [{ name: "Southstar Studio" }],
  openGraph: {
    title: "Southstar Studio | Design Agency",
    description:
      "Modern brand and web design studio helping startups launch with clarity and confidence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
