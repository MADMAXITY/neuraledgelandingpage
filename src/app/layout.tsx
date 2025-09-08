import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const manrope = Manrope({ variable: "--font-display", subsets: ["latin"], display: "swap", weight: ["600","700","800"] });
const inter = Inter({ variable: "--font-body", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "NeuralEdge — Integrated AI agents for meaningful work",
  description:
    "Outcome-first AI integration to automate the robot work and scale meaningful work.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "any" },
    ],
    shortcut: ["/favicon.png"],
    apple: ["/favicon.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
