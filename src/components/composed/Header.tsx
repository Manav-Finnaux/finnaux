"use client";

import Link from "next/link";
import Section from "./section";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import { ArrowRightIcon } from "lucide-react";

export default function HeroSection() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init({
        once: true,
        duration: 600,
        easing: 'ease-out-quad',
      });
    }
  }, []);

  return (
    <Section
      variant="top"
      className="text-gray-800 min-h-[100svh] relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #e6fffa 0%, #b2f5ea 50%, #81e6d9 100%)",
      }}
    >
      {/* Animated background elements */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, #0d9488 1px, transparent 1px), radial-gradient(circle at 80% 70%, #0d9488 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Hero Content */}
      <div className="flex flex-col justify-center items-center text-center py-12 px-4 sm:px-8 max-w-7xl mx-auto gap-6 min-h-[calc(100vh-5rem)]">
        <div className="w-full md:max-w-[75%]" data-aos="fade-up">
          <h1 
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 text-teal-900 leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Software Built for <span className="text-teal-700">Modern</span> Loan Providers
          </h1>
          
          <p 
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-teal-800 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            End-to-end software for loan origination, underwriting, customer engagement, and compliance.
          </p>

          <div 
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link href={'/about'} className="flex-1 xs:flex-none">
              <button className="w-full xs:w-auto bg-teal-600 hover:bg-teal-700 text-white h-12 sm:h-14 rounded-lg px-6 sm:px-8 text-base sm:text-lg transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
                About Us
              </button>
            </Link>
            <button className="flex-1 xs:flex-none w-full xs:w-auto bg-white/90 hover:bg-white text-teal-700 border-2 border-teal-600 h-12 sm:h-14 rounded-lg px-6 sm:px-8 text-base sm:text-lg transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
              See how it works
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-b from-transparent to-white" />
    </Section>
  );
}