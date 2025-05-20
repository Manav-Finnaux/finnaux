import type { Metadata } from "next";
import "./globals.css";
import * as fonts from '@/lib/font';
// import Navbar from "@/components/composed/nav";
import Footer from "@/components/composed/Footer";

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
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}

/**
 * About Us
 * Our Team?
 * Our story
 * 
 * Modules
 *   <All pages for each module>
 * 
 * Contact Us
 * Terms & Conditions
 * Privicy & Poilcy
 *
 */