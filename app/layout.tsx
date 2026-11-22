import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const agravePro = localFont({
  src: [
    { path: "./fonts/agrave/AgravePro-Thin.ttf", weight: "100", style: "normal" },
    { path: "./fonts/agrave/AgravePro-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./fonts/agrave/AgravePro-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/agrave/AgravePro-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/agrave/AgravePro-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/agrave/AgravePro-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/agrave/AgravePro-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-agrave",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riya Weds Debmalya",
  description: "Mark The Date 13th Dec 2026",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${agravePro.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}