"use client";

import Features from "@/lib/assets/features/demo.avif";
import { ArrowLeft, ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Page() {

  return (
    <div className="bg-white min-h-screen w-full pt-32 lg:py-36 pb-14">
      {/* Header Section */}
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-28 px-2 sm:px-4">
        <div className="flex flex-col items-center space-y-6 mb-8">
          {/* Back button */}
          <button
            onClick={() => window.location.href = '/modules'}
            className="flex items-center gap-2 px-5 py-1 text-sm sm:text-base select-none"
            data-aos="fade-right"
            data-aos-delay="100">
            <ArrowLeft className="w-4 h-4" />
            Back To All Services
          </button>

          {/* Heading */}
          <h1
            className="text-3xl md:text-4xl lg:text-6xl font-bold pb-10 text-center"
            data-aos="fade-up"
            data-aos-delay="200">
            Loan Originating System
          </h1>
        </div>

        {/* Image */}
        <div
          className="w-full rounded-lg shadow-lg overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="300">
          <Image
            src={Features}
            alt="Loan Originating System"
            className="w-full h-auto object-cover"
            priority
            placeholder="blur"
          />
        </div>

        {/* Content and Contact Card */}
        <div className="mt-14 sm:mt-20 lg:mt-28 flex flex-col lg:flex-row lg:space-x-2 relative rounded-xl p-6">
          {/* Main content */}
          <div className="w-full space-y-6 max-w-3xl text-gray-800">
            <p
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-teal-700"
              data-aos="fade-up"
              data-aos-delay="350">
              Why do you need this service?
            </p>

            <div
              className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="400">
              <p>
                At Quickfix, we understand how frustrating it can be to deal
                with a leaky faucet or pipe. That's why we offer reliable and
                efficient faucet and leak repair services to help you save money
                on your water bills and prevent further damage to your property.
              </p>
              <p>
                Our experienced plumbers use state-of-the-art equipment and
                techniques to diagnose and repair any type of faucet or leak
                issue. We work quickly and efficiently to minimize disruption to
                your daily routine, and we always leave your property clean and
                tidy.
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-teal-700">
                Our Service is always guaranteed.
              </p>
              <p>
                If you're experiencing plumbing issues in your basement, it's
                best to call a licensed plumber to assess the situation and make
                any necessary repairs. A professional plumber can help you
                identify the cause of the problem and ensure that your basement
                plumbing system is functioning properly and safely.
              </p>
              <ol className="list-disc pl-6 font-medium text-gray-700 space-y-2">
                <li>We provide the most reasonable cost.</li>
                <li>Finish work before deadline.</li>
                <li>Certified materials delivered in a timely manner.</li>
              </ol>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-teal-700 mt-6">
                What is included?
              </p>
              <p>
                Whether you have a dripping faucet, a broken pipe, or a major
                water leak, we have the skills and expertise to fix the problem
                promptly. We use high-quality parts and materials to ensure that
                our repairs are long-lasting and effective.
              </p>
              <ol className="list-disc pl-6 font-medium text-gray-700 space-y-2">
                <li>We provide the most reasonable cost.</li>
                <li>Finish work before deadline.</li>
                <li>Certified materials delivered in a timely manner.</li>
              </ol>
              <p>
                Don't let a faucet or leak issue ruin your day. Contact Quickfix
                for professional faucet and leak repair services that you can
                count on. Call us today to schedule an appointment or request
                emergency plumbing services.
              </p>
            </div>
          </div>

          {/* Contact Card - Hidden on smaller screens, visible and positioned on large screens */}
          <div className="hidden lg:flex lg:absolute lg:top-0 lg:right-0 lg:transform lg:translate-x-1/2 lg:-translate-y-1/2 bg-white rounded-xl flex-col gap-2 p-6 shadow-xl w-72 backdrop-blur-sm border border-teal-100/20" data-aos="fade-left" data-aos-delay="500">
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-semibold text-center text-teal-800 mb-3">
                Have Additional Questions?
              </h3>

              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3 text-teal-700 hover:text-teal-800 transition-colors text-sm sm:text-base group cursor-pointer">
                  <MapPin className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Vidyadhar Nagar, Jaipur</span>
                </div>

                <div className="flex items-center gap-3 text-teal-700 hover:text-teal-800 transition-colors text-sm sm:text-base group cursor-pointer">
                  <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+91-9828020432</span>
                </div>

                <div className="flex items-center gap-3 text-teal-700 hover:text-teal-800 transition-colors text-sm sm:text-base group cursor-pointer">
                  <Mail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>finnauxindia@gmail.com</span>
                </div>
              </div>

              <button className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-white rounded-lg py-2 px-4 flex items-center justify-center gap-2 font-medium transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                Contact Us <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-teal-50 opacity-90 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
