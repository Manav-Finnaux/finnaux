"use client";

import Footer from "@/components/composed/footer";
import Navbar from "@/components/composed/nav";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      offset: 100,
      easing: "ease-in-out-cubic",
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>{children}</main>
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
