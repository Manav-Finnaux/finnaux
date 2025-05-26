import * as fonts from '@/lib/font';
import type { Metadata } from "next";
import "./globals.css";

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
        {children}
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