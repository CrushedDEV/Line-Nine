import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NoiseOverlay from "@/components/NoiseOverlay";
import CustomCursor from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LINE NINE",
  description: "VRChat Underground | The Deepest Stop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-deep-black text-white`}
      >
        <NoiseOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
