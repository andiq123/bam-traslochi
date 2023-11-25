import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Modal from "./components/layout/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BAM SRL Traslochi",
  description: `Traslochi BAM SRL offre servizi professionali di trasloco a Verona e Villafranca di Verona. Siamo leader nel settore con oltre ${
    new Date().getFullYear() - 2012
  } anni di esperienza.`,
  keywords: [
    "traslochi",
    "traslochi verona",
    "traslochi aziendale",
    "traslochi industriale",
    "trasporto mobili Verona",
    "imballaggio mobili Verona",
    "trasloco casa Verona",
    "trasloco ufficio Verona",
    "trasloco pianoforte Verona",
    "traslochi economici Verona",
    "preventivo trasloco Verona",
  ],
  alternates: {
    canonical: "https://bam-traslochi.it/",
    languages: { it: "https://bam-traslochi.it" },
  },
  verification: { google: "pVZbKXV3NKcjq3vizj0OcVBNTtPaJKOsBg42uw0DSks" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <Modal />
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
