import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/app/components/NavigationBar/NavigationBar";


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
  // TODO: Replace with actual auth logic later
  const isLoggedIn = false;
  
  // Mock user data for testing
  const mockUser = {
    name: "John Trader",
    email: "john@stockpro.com",
    profileImage: "" // Leave empty to see gradient avatar with initials
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <NavigationBar isLoggedIn={isLoggedIn} user={isLoggedIn ? mockUser : undefined} />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
