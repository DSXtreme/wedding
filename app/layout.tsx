import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <footer className="fixed bottom-2 left-4 flex gap-1">
          <img src="/location.png" alt="loc" className="h-[15px] w-auto relative top-1" />
          <Link href={"https://www.google.com/maps/place/Hotel+Rajarhat+Palace-Banquet+%26+Lodging/@26.3510875,89.4063157,17z/data=!3m1!4b1!4m6!3m5!1s0x39e2ff0059f7f6b7:0xfe148b625b8ffa4e!8m2!3d26.3510875!4d89.4088906!16s%2Fg%2F11wb89049s?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D"}>
            Direct me to RajarHat Palace
          </Link> 
        </footer>
      </body>
    </html>
  );
}