import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Heading from "./heading";
import { Marquee } from "./magic_ui_marquee";
import MaxWidthWrapper from "./max_width_wrapper";
import Section from "./section";
import Text from "./text";

const features = [
  "Integrated APIs*",
  "Integrated GL Accounting",
  "Product wise Policy",
  "Repossessed Sizing & Sold",
  "Legal Managment",
  "Vouchar Trail",
  "Scheduled Transactions",
  "Managed Portfolio",
  "Loan Re-Scheduling",
  "Definable NPA Calculation",
  "User Chat",
  "Closure/Waiver Approval",
  "Pre Sales/FI/PD",
  "Kyc Verification*",
  "Collection & Follow up",
  "Daily Collection Report",
  "Field Force Tracking*",
  "Team Monitoring",
];

export default function Features() {
  return (
    <Section
      id="features"
      style={{
        background:
          "linear-gradient(230deg, rgb(153, 221, 214) -13.07%, rgb(255, 255, 255) 55%)",
      }}
      className="bg-left md:bg-no-repeat md:bg-left-bottom md:bg-contain relative pt-[1px]">
      <MaxWidthWrapper className="flex flex-col gap-14  md:flex-row mt-20">
        <div className="flex flex-col gap-8 md:w-1/2  z-30 self-center">
          <Badge
            className="mx-0 border font-semibold bg-teal-50 text-teal-600 p-2 rounded-full mb-4 px-4 py-2 w-fit"
            data-aos="fade-up"
            data-aos-delay="100">
            Features
          </Badge>
          {/* <Badge
            className="bg-teal-100 text-teal-600 p-2 rounded-lg flex items-center"
            data-aos="fade-up"
            data-aos-delay="100">
            Why Choose Us?
          </Badge> */}

          {/* Heading + Para */}
          <div className="flex flex-col gap-6 max-w-3xl">
            {" "}
            <Heading
              as="h2"
              className="text-4xl md:text-5xl lg:text-6xl leading-tight"
              data-aos="fade-up"
              data-aos-delay="150">
              <span className="text-teal-600">Streamline</span> Your Lending
              Operations
            </Heading>
            <Text
              variant="lg"
              className="text-gray-700"
              data-aos="fade-up"
              data-aos-delay="200">
              Finnaux simplifies every step of the lending process, from
              applications to analytics — all in one powerful platform.
            </Text>
          </div>

          <Button className="w-fit">Get Started</Button>
        </div>

        {/* Features marquee */}
        <div className="h-[360px] sm:h-[480px]  z-30 overflow-hidden w-full mx-2 md:w-1/2 flex flex-col md:mx-auto">
          <Marquee vertical className="p-0 lg:w-5/6 lg:ml-auto">
            {features.map((feature, idx) => (
              // <div key={feature} className="p-6 shadow-[inset_50px_0px_390px_9px_rgba(255,_255,_255,_1)] bg-primary/80 text-lg font-medium border-2 rounded-lg flex gap-8 justify-between items-center">
              // p-6 px-16
              <div
                key={feature}
                className="p-4 sm:p-6 sm:px-16 md:p-6 md:text-lg border-2 rounded-xl flex gap-8 justify-between items-center shadow-[inset_0px_20px_207px_10px_rgba(252,_252,_252,_0.6)]">
                <div>{feature}</div>
                <Badge className="mx-0 bg-teal-50">
                  {idx < 9 ? `0${idx + 1}` : idx + 1}
                </Badge>
              </div>
            ))}
          </Marquee>
        </div>
      </MaxWidthWrapper>

      <div className="w-full absolute inset-0 z-20 overflow-visible">
        <div className="abc-mAnAv-divOne"></div>
        <div className="abc-mAnAv-divTwo"></div>
        <div className="abc-mAnAv-divThree"></div>
      </div>
    </Section>
  );
}

// "use client";

// import MaxWidthWrapper from "./maxWidthWrapper";
// import Section from "./section";
// import { Badge } from "../ui/badge";
// import Heading from "./heading";
// import Text from "./text";
// import { Marquee } from "./magic-ui-marquee";
// import { Button } from "../ui/button";
// import {
//   Cpu,
//   FileSearch,
//   GanttChart,
//   Handshake,
//   Landmark,
//   LineChart,
//   ListChecks,
//   MailCheck,
//   ScrollText,
//   ShieldCheck,
//   Smartphone,
//   TimerReset,
//   Users,
//   WalletCards,
//   CalendarCheck,
//   MessageSquareText,
//   ClipboardCheck
// } from "lucide-react";

// const features = [
//   {
//     name: "Integrated APIs*",
//     icon: <Cpu className="w-5 h-5 text-teal-600" />
//   },
//   {
//     name: "Integrated GL Accounting",
//     icon: <Landmark className="w-5 h-5 text-teal-600" />
//   },
//   {
//     name: "Product wise Policy",
//     icon: <ShieldCheck className="w-5 h-5 text-teal-600" />
//   },
//   {
//     name: "Repossessed Sizing & Sold",
//     icon: <GanttChart className="w-5 h-5 text-teal-600" />
//   },
//   {
//     name: "Legal Management",
//     icon: <FileSearch className="w-5 h-5 text-teal-600" />
//   },
//   {
//     name: "Voucher Trail",
//     icon: <ScrollText className="w-5 h-5 text-teal-600" />
//   },
//   {
//     name: "Scheduled Transactions",
//     icon: <CalendarCheck className="w-5 h-5 text-teal-600" />
//   },
//   {
//     name: "Managed Portfolio",
//     icon: <WalletCards className="w-5 h-5 text-teal-600" />
//   },
//   {
//     name: "Loan Re-Scheduling",
//     icon: <TimerReset className="w-5 h-5 text-teal-600" />
//   },
//   {
//     name: "Definable NPA Calculation",
//     icon: <LineChart className="w-5 h-5 text-teal-600" />
//   },
//   {
//     name: "User Chat",
//     icon: <MessageSquareText className="w-5 h-5 text-teal-600" />
//   },
//   {
//     name: "Closure/Waiver Approval",
//     icon: <ClipboardCheck className="w-5 h-5 text-teal-600" />
//   },
//   {
//     name: "Pre Sales/FI/PD",
//     icon: <Handshake className="w-5 h-5 text-teal-600" />
//   },
//   {
//     name: "KYC Verification*",
//     icon: <Smartphone className="w-5 h-5 text-teal-600" />
//   },
//   {
//     name: "Collection & Follow up",
//     icon: <MailCheck className="w-5 h-5 text-teal-600" />
//   },
//   {
//     name: "Daily Collection Report",
//     icon: <ListChecks className="w-5 h-5 text-teal-600" />
//   },
//   {
//     name: "Field Force Tracking*",
//     icon: <Users className="w-5 h-5 text-teal-600" />
//   },
//   {
//     name: "Team Monitoring",
//     icon: <Users className="w-5 h-5 text-teal-600" />
//   },
// ];

// export default function Features() {
//   return (
//     <Section
//       style={{
//         background:
//           "linear-gradient(230deg, rgba(153, 221, 214, 0.15) -13.07%, rgba(255, 255, 255, 0.15) 55%)",
//       }}
//       className="bg-left md:bg-no-repeat md:bg-left-bottom md:bg-contain relative pt-[1px] overflow-hidden">

//       {/* Floating background elements */}
//       <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal-100 blur-[100px]" />
//         <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-cyan-100 blur-[90px]" />
//       </div>

//       <MaxWidthWrapper className="flex flex-col gap-14 md:flex-row mt-20">
//         <div className="flex flex-col gap-8 md:w-1/2 z-30 self-center">
//           <Badge
//             className="mx-0 border font-semibold bg-teal-50 text-teal-600 p-2 rounded-full mb-4 px-4 py-2 w-fit"
//             data-aos="fade-up"
//             data-aos-delay="100">
//             <Cpu className="w-4 h-4 mr-2" />
//             Features
//           </Badge>

//           {/* Heading + Para */}
//           <div className="flex flex-col gap-6 max-w-3xl">
//             <Heading
//               as="h2"
//               className="text-4xl md:text-5xl lg:text-6xl leading-tight"
//               data-aos="fade-up"
//               data-aos-delay="150">
//               <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
//                 Streamline
//               </span> Your Lending Operations
//             </Heading>
//             <Text
//               variant="lg"
//               className="text-gray-700"
//               data-aos="fade-up"
//               data-aos-delay="200">
//               Finnaux simplifies every step of the lending process, from
//               applications to analytics — all in one powerful platform.
//             </Text>
//           </div>

//           <Button
//             className="w-fit bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 shadow-lg"
//             data-aos="fade-up"
//             data-aos-delay="250">
//             Get Started
//           </Button>
//         </div>

//         {/* Features marquee */}
//         <div className="h-[360px] sm:h-[480px] z-30 overflow-hidden md:w-1/2 flex flex-col mx-auto">
//           <Marquee vertical className="p-0 lg:w-5/6 lg:ml-auto" pauseOnHover>
//             {features.map((feature, idx) => (
//               <div
//                 key={feature.name}
//                 className="p-4 sm:p-6 sm:px-16 md:p-6 md:text-lg border-2 border-gray-200/50 rounded-xl flex gap-4 justify-between items-center bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
//                 data-aos="fade-left"
//                 data-aos-delay={100 + (idx * 50)}>
//                 <div className="flex items-center gap-4">
//                   <div className="p-2 bg-teal-50 rounded-lg">
//                     {feature.icon}
//                   </div>
//                   <span>{feature.name}</span>
//                 </div>
//                 <Badge className="mx-0 bg-teal-50 text-teal-600">
//                   {idx < 9 ? `0${idx + 1}` : idx + 1}
//                 </Badge>
//               </div>
//             ))}
//           </Marquee>
//         </div>
//       </MaxWidthWrapper>

//       {/* Decorative elements */}
//       <div className="w-full absolute inset-0 z-20 overflow-visible">
//         <div className="abc-mAnAv-divOne"></div>
//         <div className="abc-mAnAv-divTwo"></div>
//         <div className="abc-mAnAv-divThree"></div>
//       </div>
//     </Section>
//   );
// }
