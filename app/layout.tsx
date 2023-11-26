import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Modal from "./components/layout/Modal";
import WhatsappRedirect from "./components/layout/WhatsappRedirect";
import HeartFloating from "./components/layout/HeartFloating";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BAM SRL Traslochi",
  description: `Traslochi BAM SRL: leader nei traslochi a Verona con ${
    new Date().getFullYear() - 2012
  } anni di esperienza. Servizi completi per traslochi aziendali, industriali, e residenziali.`,
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
        <WhatsappRedirect />
        <Footer />
      </body>
    </html>
  );
}
