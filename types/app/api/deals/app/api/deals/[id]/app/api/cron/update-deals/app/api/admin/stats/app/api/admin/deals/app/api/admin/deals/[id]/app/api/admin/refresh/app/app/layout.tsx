import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "80PercentClub — 80%+ Off Deals from Amazon, Flipkart, Myntra & More",
  description:
    "Discover the biggest discounts on Amazon, Flipkart, Meesho, Myntra, AJIO, Reliance Digital, Croma, and Bajaj Electronics. Only deals with 80% off or higher. Updated hourly.",
  keywords: [
    "deals",
    "discounts",
    "Amazon deals India",
    "Flipkart offers",
    "Myntra sale",
    "Reliance Digital deals",
    "Croma offers",
    "Bajaj Electronics",
    "80% off",
    "online shopping deals",
  ],
  openGraph: {
    title: "80PercentClub — Massive Discounts on Top Brands",
    description: "Find deals with 80% or more off from India's top e-commerce sites.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-slate-50">{children}</body>
    </html>
  );
}
