"use client";
import Link from "next/link";
import Section from "./section";
import { HeroSectionType } from '@/lib/api.types';
import { Bebas_Neue } from 'next/font/google';
import { useEffect, useRef } from 'react';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function HeroSection({ data }: { data: HeroSectionType }) {
  const headingParts = [
    { text: "Financial", color: "text-white" },
    { text: "Solutions", color: "text-white" },
    { text: "for", color: "text-white" },
    { text: "Modern", color: "text-[#c4ec5a]" },
    { text: "Lending", color: "text-white" },
    { text: "Institutions", color: "text-white" }
  ];

  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only initialize animations when in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-float');
        }
      });
    }, { threshold: 0.1 });

    if (backgroundRef.current) {
      const elements = backgroundRef.current.querySelectorAll('.float-element');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section
      variant="top"
      className={`${bebas.className} text-gray-800 min-h-screen xl:max-h-[980px] xl:min-h-fit relative overflow-hidden`}
    >
      {/* Optimized Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-br from-teal-900 via-teal-700 to-teal-500"
      >
        {/* Static geometric pattern */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, #c4ec5a 1px, transparent 1px),
              radial-gradient(circle at 80% 70%, #c4ec5a 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Optimized floating elements - reduced count and simplified animation */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="float-element rounded-full bg-teal-400/20 opacity-0"
              style={{
                width: `${150 + i * 50}px`,
                height: `${150 + i * 50}px`,
                top: `${20 + i * 20}%`,
                left: `${10 + i * 25}%`,
                filter: 'blur(60px)',
                animationDuration: `${20 + i * 5}s`,
                animationDelay: `${i * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content - unchanged from original */}
      <div className="relative z-10 flex flex-col justify-center items-start sm:items-center sm:text-center py-8 px-4 sm:px-6 max-w-7xl mx-auto gap-4 min-h-[calc(100vh-4rem)]">
        <div className="w-full md:max-w-[90%] lg:max-w-[75%]" data-aos="fade-up">
          <h1
            className="text-7xl xs:text-5xl md:text-8xl lg:text-9xl tracking-wider mb-5 sm:mb-4 text-white leading-tight"
            data-aos="fade-up"
          >
            {headingParts.map((part, i) => (
              <span key={i} className={`${part.color} inline-block`}>
                {part.text.split('').map((letter, j) => (
                  <span
                    key={j}
                    className="inline-block hover:text-[#c4ec5a] transition-colors duration-300 hover:scale-105"
                  >
                    {letter}
                  </span>
                ))}
                &nbsp;
              </span>
            ))}
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl mb-4 pb-3 sm:mb-6 text-gray-200 max-w-2xl mx-auto font-sans"
            data-aos="fade-up"
          >
            End-to-end financial technology solutions for lenders of all sizes
          </p>

          <div className="flex flex-col min-[390px]:flex-row gap-5 w-full sm:items-center justify-start sm:justify-center" data-aos="fade-up" data-aos-delay="300">
            {data.cta?.map(({ href, label }, idx) => {
              const isPrimary = idx === 0;
              return (
                <Link href={href || "#"} key={idx}>
                  <button className={`
                    w-full
                    min-[390px]:w-fit
                    ${isPrimary ? 'bg-[#c4ec5a] text-black' : 'bg-transparent text-white border-2 border-white'} 
                    px-6 py-2 text-base sm:text-lg font-sans font-medium rounded-3xl
                    hover:scale-105 transition-transform duration-300
                    focus:outline-none focus:ring-2 focus:ring-[#c4ec5a]
                    active:scale-95
                  `}>
                    {label || (isPrimary ? "Get Started" : "Learn More")}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Optimized global animation styles */}
      <style jsx global>{`
        @keyframes float {
          0% { 
            opacity: 0;
            transform: translate(0, 0) scale(0.95); 
          }
          20% {
            opacity: 1;
          }
          100% { 
            opacity: 1;
            transform: translate(0, -50px) scale(1); 
          }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
      `}</style>
    </Section>
  );
}