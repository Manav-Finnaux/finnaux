// "use client";
import 'aos/dist/aos.css';
import { LayoutGridIcon, MoveRightIcon } from "lucide-react";
import Link from "next/link";
// import { useEffect } from "react";
import { Badge } from "../ui/badge";
import Heading from "./heading";
import MaxWidthWrapper from "./maxWidthWrapper";
import Section from "./section";
import Text from "./text";

const MODULES = [
  {
    label: 'Loan Originating System',
    href: '/modules/los',
    description: 'Streamline your loan application and approval process with automated workflows'
  },
  {
    label: 'Loan Management System',
    href: '/modules/lms',
    description: 'Comprehensive tools for managing active loans and borrower relationships'
  },
  {
    label: 'GL Accounting',
    href: '/modules/accounting',
    description: 'Integrated general ledger for seamless financial tracking and reporting'
  },
  {
    label: 'Manage Portfolio',
    href: '/modules/portfolio',
    description: 'Real-time portfolio monitoring and risk assessment tools'
  },
  {
    label: 'Configuration',
    href: '/modules/configuration',
    description: 'Customizable settings to tailor the platform to your business needs'
  },
  {
    label: 'Reports',
    href: '/modules/reports',
    description: 'Advanced analytics and customizable reporting dashboards'
  },
];

export default function FunctionalBlocks() {
  // useEffect(() => {
  //   // Initialize AOS only on client side
  //   if (typeof window !== 'undefined') {
  //     const AOS = require('aos');
  //     AOS.init({
  //       once: true, // Animations only happen once
  //       duration: 600, // Faster duration for performance
  //       easing: 'ease-out-quad', // Simple easing for performance
  //       offset: 50, // Triggers animation a bit earlier
  //       delay: 0, // Default no delay (stagger handled individually)
  //     });
  //   }
  // }, []);

  return (
    <Section className="py-16 md:py-24 bg-gradient-to-b from-white to-teal-50/30">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12 xl:gap-16">
          {/* Left Column - Heading */}
          <div 
            className="space-y-6 lg:w-1/3 xl:w-1/4"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <Badge 
              variant="outline" 
              className="font-semibold bg-teal-50 border w-fit px-4 py-2 rounded-full mb-4 text-teal-600 font-semiboldflex items-center"
              data-aos="zoom-in"
              data-aos-delay="50"
            >
              <LayoutGridIcon className="w-4 h-4 text-teal-600" />
              <Text className="text-teal-700">Explore Our Modules</Text>
            </Badge>

            <Heading 
              as="h2" 
              className="text-3xl md:text-4xl lg:text-[2.5rem] leading-tight text-gray-800"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Modules That Drive <span className="text-teal-600">Efficiency</span>
            </Heading>
            
            <Text 
              className="text-gray-600 md:text-lg hidden lg:block"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Discover our comprehensive suite of tools designed to optimize every aspect of your lending operations.
            </Text>
          </div>

          {/* Right Column - Modules List */}
          <div className="lg:w-2/3 xl:w-3/4">
            <div 
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-teal-100"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              {MODULES.map(({ label, href, description }, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay={150 + (idx * 50)} // Shorter staggered delay
                >
                  <Link 
                    href={href} 
                    className="block group transition-all duration-200 hover:bg-teal-50/30"
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Text 
                            variant="xl" 
                            as="p" 
                            className="font-semibold text-gray-800 group-hover:text-teal-700 transition-colors duration-200"
                          >
                            {label}
                          </Text>
                          <Text className="text-gray-600 mt-2 hidden sm:block transition-opacity duration-200 group-hover:opacity-90">
                            {description}
                          </Text>
                        </div>
                        <div className="transition-transform duration-200 group-hover:translate-x-1">
                          <MoveRightIcon className="w-5 h-5 text-gray-400 group-hover:text-teal-600 mt-1 flex-shrink-0 transition-colors duration-200" />
                        </div>
                      </div>
                    </div>
                    {idx !== MODULES.length - 1 && (
                      <div className="border-b border-teal-50 mx-6 transition-opacity duration-200 group-hover:opacity-70" />
                    )}
                  </Link>
                </div>
              ))}
            </div>
            
            {/* Mobile-only CTA */}
            <div 
              className="mt-8 lg:hidden text-center"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="400"
            >
              <Link 
                href="/modules" 
                className="inline-flex items-center text-teal-600 font-medium hover:text-teal-800 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-teal-50"
              >
                View all module features
                <MoveRightIcon className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </Section>
  );
}


// "use client";
// import { LayoutGridIcon, MoveRightIcon, ArrowRightIcon } from "lucide-react";
// import { Badge } from "../ui/badge";
// import MaxWidthWrapper from "./maxWidthWrapper";
// import Section from "./section";
// import Heading from "./heading";
// import Link from "next/link";
// import Text from "./text";
// import { useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

// const MODULES = [
//   {
//     label: 'Loan Originating System',
//     href: '/modules/los',
//     description: 'Streamline your loan application and approval process with automated workflows',
//     icon: <LayoutGridIcon className="w-6 h-6 text-teal-600" />
//   },
//   {
//     label: 'Loan Management System',
//     href: '/modules/lms',
//     description: 'Comprehensive tools for managing active loans and borrower relationships',
//     icon: <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//     </svg>
//   },
//   {
//     label: 'GL Accounting',
//     href: '/modules/accounting',
//     description: 'Integrated general ledger for seamless financial tracking and reporting',
//     icon: <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//     </svg>
//   },
//   {
//     label: 'Manage Portfolio',
//     href: '/modules/portfolio',
//     description: 'Real-time portfolio monitoring and risk assessment tools',
//     icon: <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//     </svg>
//   },
//   {
//     label: 'Configuration',
//     href: '/modules/configuration',
//     description: 'Customizable settings to tailor the platform to your business needs',
//     icon: <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//     </svg>
//   },
//   {
//     label: 'Reports',
//     href: '/modules/reports',
//     description: 'Advanced analytics and customizable reporting dashboards',
//     icon: <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//     </svg>
//   },
// ];

// export default function FunctionalBlocks() {
//   useEffect(() => {
//     AOS.init({
//       once: true,
//       duration: 600,
//       easing: 'ease-out-quad',
//       offset: 50,
//     });
//   }, []);

//   return (
//     <Section className="py-16 md:py-24 bg-gradient-to-b from-white to-teal-50/30 relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-teal-100/30 blur-[80px] -z-10" />
//       <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-cyan-100/20 blur-[80px] -z-10" />

//       <MaxWidthWrapper>
//         <div className="flex flex-col gap-10 lg:flex-row lg:gap-12 xl:gap-16">
//           {/* Left Column - Heading */}
//           <div 
//             className="space-y-6 lg:w-1/3 xl:w-1/4"
//             data-aos="fade-right"
//           >
//             <Badge 
//               variant="outline" 
//               className="font-semibold bg-teal-50 border w-fit px-4 py-2 rounded-full mb-4 text-teal-600 flex items-center gap-2"
//               data-aos="zoom-in"
//               data-aos-delay="50"
//             >
//               <LayoutGridIcon className="w-4 h-4" />
//               <span>Explore Our Modules</span>
//             </Badge>

//             <Heading 
//               as="h2" 
//               className="text-3xl md:text-4xl lg:text-[2.5rem] leading-tight text-gray-800"
//               data-aos="fade-up"
//               data-aos-delay="100"
//             >
//               <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
//                 Powerful
//               </span> Functional Modules
//             </Heading>
            
//             <Text 
//               className="text-gray-600 md:text-lg hidden lg:block"
//               data-aos="fade-up"
//               data-aos-delay="150"
//             >
//               Discover our comprehensive suite of tools designed to optimize every aspect of your lending operations.
//             </Text>

//             {/* Desktop CTA */}
//             <Link 
//               href="/modules" 
//               className="hidden lg:flex items-center text-teal-600 font-medium hover:text-teal-800 transition-colors duration-200 mt-4 w-fit group"
//               data-aos="fade-up"
//               data-aos-delay="200"
//             >
//               Explore all modules
//               <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
//             </Link>
//           </div>

//           {/* Right Column - Modules List */}
//           <div className="lg:w-2/3 xl:w-3/4">
//             <CardContainer className="grid grid-cols-1 gap-4">
//               {MODULES.map(({ label, href, description, icon }, idx) => (
//                 <CardItem 
//                   key={idx}
//                   data-aos="fade-up"
//                   data-aos-delay={150 + (idx * 50)}
//                   className="w-full"
//                 >
//                   <CardBody className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-200/50 transition-all duration-300 group">
//                     <Link 
//                       href={href} 
//                       className="block p-6 md:p-8"
//                     >
//                       <div className="flex items-start justify-between gap-6">
//                         <div className="flex items-start gap-4">
//                           <div className="p-3 bg-teal-50 rounded-lg flex-shrink-0">
//                             {icon}
//                           </div>
//                           <div>
//                             <Text 
//                               variant="xl" 
//                               as="p" 
//                               className="font-semibold text-gray-800 group-hover:text-teal-700 transition-colors"
//                             >
//                               {label}
//                             </Text>
//                             <Text className="text-gray-600 mt-2 transition-opacity duration-200">
//                               {description}
//                             </Text>
//                           </div>
//                         </div>
//                         <div className="transition-transform duration-200 group-hover:translate-x-1 text-gray-300 group-hover:text-teal-500">
//                           <MoveRightIcon className="w-5 h-5 mt-1 flex-shrink-0" />
//                         </div>
//                       </div>
//                     </Link>
//                   </CardBody>
//                 </CardItem>
//               ))}
//             </CardContainer>
            
//             {/* Mobile CTA */}
//             <div 
//               className="mt-8 lg:hidden text-center"
//               data-aos="fade-up"
//               data-aos-delay={150 + (MODULES.length * 50)}
//             >
//               <Link 
//                 href="/modules" 
//                 className="inline-flex items-center text-teal-600 font-medium hover:text-teal-800 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-teal-50 group"
//               >
//                 View all module features
//                 <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </MaxWidthWrapper>
//     </Section>
//   );
// }