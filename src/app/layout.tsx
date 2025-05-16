import type { Metadata } from "next";
import "./globals.css";
import * as fonts from '@/lib/font';
import Footer from "@/components/composed/footer";
import Navbar from "@/components/composed/nav";

export const metadata: Metadata = {
  title: "Finnaux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${fonts.geist.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
