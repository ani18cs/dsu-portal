import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dayananda Sagar University | Portal",
  description: "India's First AI University",
};

import { Navbar } from "@/components/layout/Navbar";
import { AdmissionBanner } from "@/components/layout/AdmissionBanner";
import { Footer } from "@/components/layout/Footer";
import Chatbot from "@/components/Chatbot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main className="flex-1 w-full relative">
          {children}
        </main>
        <AdmissionBanner />
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
