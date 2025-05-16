import Image from "next/image";
import s from "../../uploads/grad2.jpeg";
import AlphaWave from "./images/AlphaWave.svg";
import Marquee from "react-fast-marquee";
import Section from "./section";
export default function Header() {
  return (
    <>
      <Section
        variant="top"
        className="text-white min-h-vh relative"
        style={{
          backgroundImage: 'url("/grad2.jpeg")',
          backgroundSize: "cover",
        }}>
        {/* Hero Content */}
        <div className="flex flex-col justify-center items-center text-center py-8 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-8 gap-4 sm:gap-8 min-h-[calc(100vh-5rem)]">
          <div className="w-full md:max-w-[75%]">
            <h1 className="text-2xl sm:text-4xl md:text-6xl text-center font-extrabold mb-4 sm:mb-6">
              Software Built for Modern Loan Providers
            </h1>
            <p className="text-lg sm:text-2xl mb-6 sm:mb-8">
              End-to-end software for loan origination, underwriting, customer
              engagement, and compliance.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <button className="bg-[#c4ec5a] text-black sm:h-14 sm:rounded-lg sm:px-10 sm:text-xl">
                Get a Demo
              </button>
              <button className="bg-[#f5fbe3] text-black sm:h-14 sm:rounded-lg sm:px-10 sm:text-xl">
                See how it works
              </button>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center mt-8">
              <p className="flex flex-col gap-2 items-center">
                <span className="text-2xl font-medium text-[#c4ec5a]">50+</span>
                Clients
              </p>
              <p className="flex flex-col gap-2 items-center">
                <span className="text-2xl font-medium text-[#c4ec5a]">10x</span>
                Faster Approvals
              </p>
              <p className="flex flex-col gap-2 items-center">
                <span className="text-2xl font-medium text-[#c4ec5a]">
                  99.9%
                </span>
                Platform Uptime
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-b from-transparent to-background" />

        {/* <div className="absolute bg-red-500  left-0 w-full h-40" /> */}
      </Section>
    </>
  );
}
