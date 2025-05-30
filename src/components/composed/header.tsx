"use client";
import Link from "next/link";
import Section from "./section";
import { HeroSectionType } from "@/lib/api.types";
import { Bebas_Neue } from "next/font/google";
import { useEffect, useRef } from "react";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function HeroSection({ data }: { data: HeroSectionType }) {
  const headingParts = [
    { text: "Financial", color: "text-white" },
    { text: "Solutions", color: "text-white" },
    { text: "for", color: "text-white" },
    { text: "Modern", color: "text-[#c4ec5a]" },
    { text: "Lending", color: "text-white" },
    { text: "Institutions", color: "text-white" },
  ];

  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only initialize animations when in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-float");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (backgroundRef.current) {
      const elements = backgroundRef.current.querySelectorAll(".float-element");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section
      variant="top"
      className={`${bebas.className} text-gray-800 min-h-screen xl:max-h-[980px] xl:min-h-fit relative overflow-hidden`}>
      {/* Optimized Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-br from-teal-900 via-teal-700 to-teal-500">
        {/* Static geometric pattern */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, #c4ec5a 1px, transparent 1px),
              radial-gradient(circle at 80% 70%, #c4ec5a 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
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
                filter: "blur(60px)",
                animationDuration: `${20 + i * 5}s`,
                animationDelay: `${i * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content - unchanged from original */}
      <div className="relative z-10 flex flex-col justify-center items-start sm:items-center sm:text-center py-8 px-4 sm:px-6 max-w-7xl mx-auto gap-4 min-h-[calc(100vh-4rem)]">
        <div
          className="w-full md:max-w-[90%] lg:max-w-[75%]"
          data-aos="fade-up">
          <h1
            className="text-7xl xs:text-5xl md:text-8xl lg:text-9xl tracking-wider mb-5 sm:mb-4 text-white leading-tight"
            data-aos="fade-up">
            {headingParts.map((part, i) => (
              <span key={i} className={`${part.color} inline-block`}>
                {part.text.split("").map((letter, j) => (
                  <span
                    key={j}
                    className="inline-block hover:text-[#c4ec5a] transition-colors duration-300 hover:scale-105">
                    {letter}
                  </span>
                ))}
                &nbsp;
              </span>
            ))}
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl mb-4 pb-3 sm:mb-6 text-gray-200 max-w-2xl mx-auto font-sans"
            data-aos="fade-up">
            {data.tagline ||
              "End-to-end financial technology solutions for lenders of all sizes"}
          </p>

          <div
            className="flex flex-col min-[390px]:flex-row gap-5 w-full sm:items-center justify-start sm:justify-center"
            data-aos="fade-up"
            data-aos-delay="300">
            {data.cta?.map(({ href, label }, idx) => {
              const isPrimary = idx === 0;
              return (
                <Link href={href || "#"} key={idx}>
                  <button
                    className={`
                    w-full
                    min-[390px]:w-fit
                    ${
                      isPrimary
                        ? "bg-[#c4ec5a] text-black"
                        : "bg-transparent text-white border-2 border-white"
                    } 
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

// "use client";

// import Link from "next/link";
// import Section from "./section"; // Assuming Section component is robust
// import { HeroSectionType } from '@/lib/api.types';
// import { Bebas_Neue } from 'next/font/google';
// import { useEffect, useRef } from 'react';

// const bebas = Bebas_Neue({
//   weight: '400',
//   subsets: ['latin'],
//   display: 'swap',
// });

// // Define keyframe variables for consistent animation on floating elements
// const createRandomAnimationValues = () => {
//   const values = [];
//   for (let i = 0; i < 6; i++) { // For each of the 6 floating elements
//     values.push({
//       x: Math.random() * 120 - 60, // -60 to 60px
//       y: Math.random() * 120 - 60, // -60 to 60px
//       rotate: Math.random() * 360, // 0 to 360 degrees
//       delay: Math.random() * 6, // 0 to 6 seconds delay
//       duration: Math.random() * 30 + 20, // 20 to 50 seconds duration
//       size: Math.random() * 250 + 150, // 150 to 400px size
//       initialTop: Math.random() * 100,
//       initialLeft: Math.random() * 100,
//     });
//   }
//   return values;
// };

// export default function HeroSection({ data }: { data: HeroSectionType }) {
//   const headingParts = [
//     { text: "Financial", color: "text-white" },
//     { text: "Solutions", color: "text-white" },
//     { text: "for", color: "text-white" },
//     { text: "Modern", color: "text-[#c4ec5a]" }, // Highlighted word
//     { text: "Lending", color: "text-white" },
//     { text: "Institutions", color: "text-white" }
//   ];

//   const animatedElementProps = useRef(createRandomAnimationValues());

//   // *** IMPORTANT: Global CSS for these keyframes ***
//   // It's highly recommended to place these `@keyframes` rules in your `globals.css` file
//   // (e.g., `src/app/globals.css` or equivalent) for better performance, build optimization,
//   // and maintainability in a Next.js/Tailwind project.
//   // I've kept the useEffect here to show the complete code, but for production, move this to globals.css.
//   useEffect(() => {
//     const styleSheet = document.styleSheets[0];
//     const keyframesFloat = `@keyframes float {
//       0% { transform: translate(0, 0) rotate(var(--float-start-rotate, 0deg)); }
//       100% { transform: translate(var(--float-end-x, 0px), var(--float-end-y, 0px)) rotate(var(--float-end-rotate, 0deg)); }
//     }`;
//     const keyframesGradientShift = `@keyframes gradientShift {
//       0% { background-position: 0% 50%; }
//       50% { background-position: 100% 50%; }
//       100% { background-position: 0% 50%; }
//     }`;

//     // Check if keyframes already exist to avoid adding duplicates on re-renders
//     const existingRules = Array.from(styleSheet.cssRules).map(rule => rule.cssText);
//     if (!existingRules.some(rule => rule.includes('@keyframes float'))) {
//       styleSheet.insertRule(keyframesFloat, styleSheet.cssRules.length);
//     }
//     if (!existingRules.some(rule => rule.includes('@keyframes gradientShift'))) {
//       styleSheet.insertRule(keyframesGradientShift, styleSheet.cssRules.length);
//     }
//   }, []);

//   return (
//     <Section
//       variant="top"
//       className={`${bebas.className} text-gray-800 min-h-screen xl:max-h-[980px] xl:min-h-fit relative overflow-hidden`}
//     >
//       {/* Premium Animated Background */}
//       <div className="absolute inset-0 z-0">
//         {/* Base dark gradient and animated mesh */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background: 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)', // Deep dark base
//           }}
//         >
//           {/* Animated Mesh Gradient Overlay */}
//           <div
//             className="absolute inset-0 opacity-80" // Increased opacity for the gradient mesh
//             style={{
//               backgroundImage: `radial-gradient(at 20% 70%, #065F46 0%, transparent 50%),
//                               radial-gradient(at 80% 30%, #0F766E 0%, transparent 50%),
//                               radial-gradient(at 40% 10%, #075985 0%, transparent 60%)`, // Mixing more colors
//               backgroundSize: '200% 200%', // Larger background for animation
//               animation: 'gradientShift 30s ease infinite alternate', // Animate the background position
//               backgroundBlendMode: 'overlay', // Blend with the base
//             }}
//           ></div>
//         </div>

//         {/* Animated floating elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           {animatedElementProps.current.map((props, i) => (
//             <div
//               key={i}
//               className="absolute rounded-full bg-teal-300/10" // Lighter teal/lower opacity for subtler blend
//               style={{
//                 width: `${props.size}px`,
//                 height: `${props.size}px`,
//                 top: `${props.initialTop}%`,
//                 left: `${props.initialLeft}%`,
//                 filter: 'blur(80px)', // Increased blur for softer look
//                 animation: `float ${props.duration}s infinite alternate ease-in-out`,
//                 animationDelay: `${props.delay}s`,
//                 '--float-end-x': `${props.x}px`,
//                 '--float-end-y': `${props.y}px`,
//                 '--float-end-rotate': `${props.rotate}deg`
//               } as React.CSSProperties} // Type assertion for custom CSS properties
//             />
//           ))}
//         </div>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 flex flex-col justify-center items-start sm:items-center sm:text-center py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto gap-4 min-h-[calc(100vh-4rem)]">
//         <div className="w-full md:max-w-[90%] lg:max-w-[75%] pt-16 sm:pt-20 lg:pt-0" data-aos="fade-up">
//           <h1
//             className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider mb-5 sm:mb-6 text-white leading-tight font-extrabold"
//             data-aos="fade-up"
//           >
//             {headingParts.map((part, i) => (
//               <span key={i} className={`${part.color} inline-block`}>
//                 {part.text.split('').map((letter, j) => (
//                   <span
//                     key={j}
//                     className="inline-block hover:text-[#c4ec5a] transition-colors duration-300 hover:scale-105 will-change-transform"
//                   >
//                     {letter}
//                   </span>
//                 ))}
//                 &nbsp;
//               </span>
//             ))}
//           </h1>

//           <p
//             className="text-base sm:text-lg md:text-xl mb-6 pb-3 sm:mb-8 text-gray-200 max-w-2xl mx-auto font-sans opacity-90"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             {data.tagline || "End-to-end financial technology solutions for lenders of all sizes, powered by innovation and efficiency."}
//           </p>

//           <div className="flex flex-col min-[390px]:flex-row gap-4 sm:gap-6 w-full sm:items-center justify-start sm:justify-center" data-aos="fade-up" data-aos-delay="400">
//             {data.cta?.slice(0, 2).map(({ href, label }, idx) => {
//               const isPrimary = idx === 0;
//               return (
//                 <Link href={href || "#"} key={idx} passHref>
//                   <button
//                     className={`
//                       relative isolate overflow-hidden
//                       w-full min-[390px]:w-fit
//                       ${isPrimary
//                         ? 'bg-[#c4ec5a] text-black shadow-lg shadow-[#c4ec5a]/40'
//                         : 'bg-transparent text-white border-2 border-white'
//                       }
//                       px-8 py-3 text-base sm:text-lg font-sans font-semibold rounded-full
//                       hover:scale-105 transition-transform duration-300
//                       focus:outline-none focus:ring-4 focus:ring-[#c4ec5a] focus:ring-opacity-70
//                       active:scale-95
//                       group
//                     `}
//                   >
//                     {isPrimary && (
//                       <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></span>
//                     )}
//                     {!isPrimary && (
//                       <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
//                     )}
//                     <span className="relative z-10">{label || (isPrimary ? "Get Started" : "Learn More")}</span>
//                   </button>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Scrolling indicator */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
//         <div className="animate-bounce w-6 h-9 border-2 border-white rounded-full flex justify-center items-center">
//           <div className="w-1.5 h-2.5 bg-white rounded-full mt-1"></div>
//         </div>
//       </div>
//     </Section>
//   );
// }
