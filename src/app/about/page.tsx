"use client"; // Important for using client-side hooks like useEffect

import Image from "next/image";
import MissionImage from "@/lib/assets/features/mission.png";
import VisionImage from "@/lib/assets/features/leadership.png"; // Renamed for clarity, assuming it's the same image for vision
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Don't forget to import the AOS CSS

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Smooth, longer duration for animations
      once: true, // Animations play only once as elements enter viewport
      easing: "ease-out-cubic", // A very smooth easing function
      offset: 100, // Start animation when element is 100px from viewport bottom
    });
  }, []);

  return (
    <>
      {/* Company Overview Section */}
      <div className="bg-gradient-to-r from-teal-100/70 via-green-100/70 to-cyan-100/70 min-h-screen w-full py-20 md:py-32 lg:py-40 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-center flex-col space-y-6 py-12">
            <h1
              className="font-medium text-4xl sm:text-5xl lg:text-6xl text-center sm:text-left" // Added text alignment for responsiveness
              data-aos="fade-up"
              data-aos-delay="100">
              Empowering Your Financial Future
            </h1>
            <h3
              className="font-medium text-lg sm:text-xl w-full md:w-3/4 lg:w-1/2 text-center sm:text-left mx-auto sm:mx-0" // Adjusted width and added text alignment
              data-aos="fade-up"
              data-aos-delay="200">
              At Finnaux, our journey is rooted in one purpose — your
              prosperity. With unwavering commitment and expert insight
            </h3>
          </div>
        </div>
      </div>

      {/* Main Content Card & Experience Card Container */}
      <div className="relative my-12 md:my-24 lg:my-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {" "}
        {/* Added horizontal padding and max-width for better control */}
        {/* Experience Card */}
        {/* Adjusted top position for better overlap on larger screens, increased max-width */}
        <div
          className="hidden md:flex bg-gradient-to-b from-teal-100/80 to-teal-50 border-teal-300/60 border rounded-xl h-72 lg:h-80 w-full max-w-[20rem] lg:max-w-[28rem] absolute shadow-xl shadow-teal-100/60 right-4 lg:right-20 -top-40 lg:-top-60 flex-col justify-evenly p-4 lg:p-6 z-10" // Reduced h-80 to h-72 for md, kept lg:h-80, adjusted padding
          data-aos="fade-left"
          data-aos-delay="300">
          <h1 className="bg-gradient-to-b from-cyan-400 to-teal-300 px-4 text-8xl lg:text-9xl text-transparent bg-clip-text text-left">
            {" "}
            {/* Adjusted font size */}
            18
          </h1>
          <div className="flex flex-row justify-between items-start gap-2">
            <div className="rounded-full h-12 w-20 lg:h-14 lg:w-24 bg-white border-2 border-black mx-4 lg:mx-8"></div>{" "}
            {/* Adjusted size and margin */}
            <div className="text-left pr-2 text-sm lg:text-base flex-1">
              {" "}
              {/* Adjusted font size */}
              Years experience with a deep understanding of the challenges and
              opportunities
            </div>
          </div>
        </div>
        {/* Main Card Content */}
        {/* Added dynamic padding for mobile, adjusted pt for desktop */}
        <div
          className="bg-gradient-to-r from-white/60 to-white/50 border-cyan-300 border rounded-2xl p-6 pt-40 md:pt-10 lg:pt-4" // Adjusted overall padding, and pt for md/lg screens
          data-aos="fade-up"
          data-aos-delay="400">
          {/* Mission Statement */}
          {/* Adjusted margin for mobile and desktop */}
          <div
            className="ml-0 md:ml-24 mt-0 md:mt-20 mb-8 md:mb-16 w-full max-w-3xl" // Adjusted mt and mb, added max-width
            data-aos="fade-right"
            data-aos-delay="500">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug">
              {" "}
              {/* Adjusted font size */}
              Our mission is to make a positive impact by transforming the way
              people interact with their finances.
            </h1>
          </div>

          {/* Mission and Vision Sections */}
          {/* Adjusted gap and padding for better mobile stacking */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-24 px-2 md:px-6 pb-6">
            {" "}
            {/* Removed px-4 and md:px-8 from original, using responsive px from parent */}
            <div
              className="flex-1 text-base sm:text-lg font-medium space-y-4 md:space-y-6 px-2 md:px-8 py-4 md:py-8" // Adjusted font size and spacing
              data-aos="fade-up"
              data-aos-delay="600">
              <p>
                Your success is our mission. As business advisors, we offer
                expert guidance, unlocking your potential for growth and
                profitability.
              </p>
              <p className="font-light">
                Our vision is to create a financially secure future for all,
                offering innovative solutions & expert guidance to navigate
                prosperity.
              </p>
            </div>
            <div className="flex-1 px-2 md:px-6 py-4 md:py-8">
              <div className="space-y-6 md:space-y-10">
                {" "}
                {/* Adjusted spacing */}
                <div data-aos="fade-up" data-aos-delay="700">
                  <div className="flex items-center gap-3 mb-2">
                    <Image
                      src={MissionImage}
                      alt="Mission Icon"
                      className="size-10 sm:size-11" // Adjusted icon size for mobile
                    />
                    <h3 className="font-medium text-xl sm:text-2xl">
                      Our Mission
                    </h3>{" "}
                    {/* Adjusted font size */}
                  </div>
                  <p className="text-base sm:text-lg pl-12 sm:pl-14">
                    {" "}
                    {/* Adjusted font size and padding */}
                    Our mission is to reshape lives by offering financial
                    expertise, faster growth, & securing futures through trusted
                    partnerships & innovation.
                  </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="800">
                  <div className="flex items-center gap-3 mb-2">
                    <Image
                      src={VisionImage} // Using VisionImage
                      alt="Vision Icon"
                      className="size-10 sm:size-11" // Adjusted icon size for mobile
                    />
                    <h3 className="font-medium text-xl sm:text-2xl">
                      Our Vision
                    </h3>{" "}
                    {/* Adjusted font size */}
                  </div>
                  <p className="text-base sm:text-lg pl-12 sm:pl-14">
                    {" "}
                    {/* Adjusted font size and padding */}
                    Our vision is to create a financially secure future for all,
                    offering innovative solutions & expert guidance to navigate
                    prosperity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="w-full bg-[#f8f8f7] py-16 md:py-24 my-0">
        {" "}
        {/* Adjusted padding */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {" "}
          {/* Adjusted gap */}
          {/* Left: Text Content */}
          <div
            className="lg:w-1/2 w-full p-4 md:p-8 lg:pr-12 flex flex-col justify-center" // Adjusted padding
            data-aos="fade-right"
            data-aos-delay="100">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              {" "}
              {/* Adjusted font size */}
              Our Story
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10">
              {" "}
              {/* Adjusted font size and margin */}
              With our card, you gain access to a range of exclusive benefits,
              convenient features, and unparalleled rewards that will enhance
              your everyday life.
            </p>
            <div className="relative pl-6 sm:pl-8">
              {" "}
              {/* Adjusted padding */}
              <div className="absolute left-0 top-0 h-full w-px bg-gray-300"></div>
              <div className="space-y-6 sm:space-y-8">
                {" "}
                {/* Adjusted spacing */}
                {[
                  {
                    num: "01.",
                    title: "Convenience",
                    desc: "Our services offer unmatched convenience, allowing you to effortlessly manage your finances from anywhere, at any time.",
                  },
                  {
                    num: "02.",
                    title: "Time-Saving",
                    desc: "Our revolutionary solution is here to liberate you from the shackles of administrative burdens.",
                  },
                  {
                    num: "03.",
                    title: "Enhanced Security",
                    desc: "We prioritize the security of your financial information. Our robust security measures, including encryption.",
                  },
                  {
                    num: "04.",
                    title: "Access to Innovative Tools",
                    desc: "Gain access to a wide range of innovative tools and features designed to enhance your financial management.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={200 + index * 100}>
                    <div className="flex items-baseline gap-2 sm:gap-3">
                      {" "}
                      {/* Adjusted gap */}
                      <span className="text-gray-400 font-mono text-base sm:text-lg">
                        {" "}
                        {/* Adjusted font size */}
                        {item.num}
                      </span>
                      <span className="font-semibold text-lg sm:text-xl text-gray-900">
                        {" "}
                        {/* Adjusted font size */}
                        {item.title}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 ml-8 sm:ml-10 mt-1">
                      {item.desc}
                    </p>{" "}
                    {/* Adjusted font size and margin */}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right: Image */}
          <div
            className="lg:w-1/2 w-full flex items-center justify-center mt-8 lg:mt-0 p-4" // Adjusted margin-top for mobile
            data-aos="fade-left"
            data-aos-delay="200">
            <img
              src="https://framerusercontent.com/images/zUDHecteYnTB4LOHVycktRWCYY.jpg"
              alt="Card Payment"
              // For Next.js Image component, it's better to explicitly set width/height or use fill
              // For img tag, max-w-md and w-full handle responsiveness well.
              className="rounded-2xl shadow-lg w-full max-w-sm sm:max-w-md object-cover" // Adjusted max-width for small screens
            />
          </div>
        </div>
      </section>
    </>
  );
}
