import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ConditionalNav from "@/src/app/components/ConditionalNav";
import { GradientHeadings } from "./components/GradientHeadings";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Braden Carter | Portfolio",
  description: "Full-stack developer portfolio showcasing projects and technical expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased  bg-theme-color-dark-gray`}
      >
        <ConditionalNav />
        {children}
      </body>
    </html>
  );
}
