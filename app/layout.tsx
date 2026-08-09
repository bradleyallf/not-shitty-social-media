import type { Metadata } from "next";
import { headers } from "next/headers";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", base);

  return {
    metadataBase: base,
    title: "Fourfold",
    description: "A quieter place to keep up with the people you love.",
    openGraph: {
      title: "Fourfold",
      description: "Four thoughtful updates a year, shared only with the people you choose.",
      type: "website",
      images: [{ url: socialImage, width: 1733, height: 907, alt: "Fourfold — A little life, shared slowly." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Fourfold",
      description: "A little life, shared slowly.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
