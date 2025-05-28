import Link from "next/link";
import Section from "./section";
import { HeroSectionType } from '@/lib/api.types';

export default function HeroSection({ data }: { data: HeroSectionType }) {
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
            {/* Software Built for <span className="text-teal-700">Modern</span> Loan Providers */}
            {data.heading}
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-teal-800 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* End-to-end software for loan origination, underwriting, customer engagement, and compliance. */}
            {data.tagline}
          </p>


          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            {
              data.cta.map(({ href, label }, idx) => {
                const styles = idx === 0 ?
                  `bg-[#c4ec5a] text-black sm:h-14 sm:rounded-lg sm:px-10 sm:text-xl` :
                  `bg-[#f5fbe3] text-black sm:h-14 sm:rounded-lg sm:px-10 sm:text-xl`;

                return (
                  <Link href={href} key={idx}>
                    <button className={styles}>
                      {label}
                    </button>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-b from-transparent to-white" />
    </Section>
  );
}



// import Link from "next/link";
// import Section from "./section";

// export default function HeroSection() {
//   return (
//     <>
//       <Section
//         variant="top"
//         className="text-white min-h-vh relative"
//         style={{
//           backgroundImage: 'url("/grad2.jpeg")',
//           backgroundSize: "cover",
//         }}>
//         {/* Hero Content */}
//         <div className="flex flex-col justify-center items-center text-center py-8 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-8 gap-4 sm:gap-8 min-h-[calc(100vh-5rem)]">
//           <div className="w-full md:max-w-[75%]">
//             <h1 className="text-2xl sm:text-4xl md:text-6xl text-center font-extrabold mb-4 sm:mb-6">
//               Software Built for Modern Loan Providers
//             </h1>
//             <p className="text-lg sm:text-2xl mb-6 sm:mb-8">
//               End-to-end software for loan origination, underwriting, customer
//               engagement, and compliance.
//             </p>

//             <div className="flex flex-col gap-4 sm:flex-row justify-center">
//               <Link href={'/about'}>
//                 <button className="bg-[#c4ec5a] text-black sm:h-14 sm:rounded-lg sm:px-10 sm:text-xl">
//                   About Us Page
//                 </button>
//               </Link>
//               <button className="bg-[#f5fbe3] text-black sm:h-14 sm:rounded-lg sm:px-10 sm:text-xl">
//                 See how it works
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-b from-transparent to-background" />

//       </Section>
//     </>
//   );
// }
