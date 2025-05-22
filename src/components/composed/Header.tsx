import Link from "next/link";
import Section from "./section";

export default function HeroSection() {
  return (
    <Section
      variant="top"
      className="text-gray-800 min-h-vh relative" // Changed text to gray-800 for better contrast
      style={{
        background: "linear-gradient(135deg, #e6fffa 0%, #b2f5ea 50%, #81e6d9 100%)",
        backgroundSize: "cover",
      }}
    >
      {/* Hero Content */}
      <div className="flex flex-col justify-center items-center text-center py-8 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-8 gap-4 sm:gap-8 min-h-[calc(100vh-5rem)]">
        <div className="w-full md:max-w-[75%]">
          <h1 className="text-2xl sm:text-4xl md:text-6xl text-center font-extrabold mb-4 sm:mb-6 text-teal-900">
            Software Built for Modern Loan Providers
          </h1>
          <p className="text-lg sm:text-2xl mb-6 sm:mb-8 text-teal-800">
            End-to-end software for loan origination, underwriting, customer
            engagement, and compliance.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Link href={'/about'}>
              <button className="bg-teal-600 hover:bg-teal-700 text-white sm:h-14 rounded-lg px-6 sm:px-10 text-lg sm:text-xl transition-colors duration-300 shadow-md">
                About Us Page
              </button>
            </Link>
            <button className="bg-white hover:bg-gray-50 text-teal-700 border border-teal-600 sm:h-14 rounded-lg px-6 sm:px-10 text-lg sm:text-xl transition-colors duration-300 shadow-md">
              See how it works
            </button>
          </div>

          {/* <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center mt-8">
            <p className="flex flex-col gap-2 items-center text-teal-800">
              <span className="text-2xl font-medium text-teal-700">50+</span>
              Clients
            </p>
            <p className="flex flex-col gap-2 items-center text-teal-800">
              <span className="text-2xl font-medium text-teal-700">10x</span>
              Faster Approvals
            </p>
            <p className="flex flex-col gap-2 items-center text-teal-800">
              <span className="text-2xl font-medium text-teal-700">99.9%</span>
              Platform Uptime
            </p>
          </div> */}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-b from-transparent to-white" />
    </Section>
  );
}