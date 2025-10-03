import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import UnauthHeader from "@/app/components/UnauthHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// ...
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Font for headers
const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-headers",
  display: "swap",
});

// Font for paragraphs and general text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Font for financial data and numbers
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-financial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stock Market Prediction",
  description: "Advanced stock market prediction application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Simulating authentication status - replace this with your actual auth logic
  const isLoggedIn = false;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.variable} ${robotoMono.variable} antialiased`}
      >
        {isLoggedIn ? <Header /> : <UnauthHeader />}
        {children}
      </body>
    </html>
  );
}
