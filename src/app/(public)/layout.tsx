"use client"

import Footer from "@/components/composed/Footer";
import Navbar from "@/components/composed/nav";
import AOS from "aos";
import "aos/dist/aos.css";
import type { Metadata } from "next";
import { useEffect } from "react";
import "./globals.css";


export const metadata: Metadata = {
  title: "Finnaux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      offset: 100,
      easing: "ease-in-out-cubic"
    })
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>

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