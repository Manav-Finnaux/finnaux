import { ArrowLeft, ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Features from "@/lib/assets/features/demo.avif";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white min-h-screen w-full pt-32 lg:py-36 pb-14">
      {/* Header Section */}
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-28 px-2 sm:px-4">
        <div className="flex flex-col justify-center items-center space-y-4">
          <p className="flex gap-2 justify-center items-center text-sm sm:text-base">
            <ArrowLeft className="size-4" /> Back To All Services
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium pb-10 sm:pb-20 text-center">
            Loan Originating System
          </h1>
        </div>

        <div className="w-full">
          <Image
            src={Features}
            alt="Loan Originating System"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div className="mt-12 sm:mt-20 lg:mt-28 flex flex-col lg:flex-row lg:space-x-12">
          <div className="w-full">
            <div className="flex flex-col space-y-4">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-medium">
                Why do you need this service?
              </p>
              <p className="text-sm sm:text-base">
                At Quickfix, we understand how frustrating it can be to deal
                with a leaky faucet or pipe. That's why we offer reliable and
                efficient faucet and leak repair services to help you save money
                on your water bills and prevent further damage to your property.
              </p>
              <p className="text-sm sm:text-base">
                Our experienced plumbers use state-of-the-art equipment and
                techniques to diagnose and repair any type of faucet or leak
                issue. We work quickly and efficiently to minimize disruption to
                your daily routine, and we always leave your property clean and
                tidy.
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium">
                Our Service is always guaranteed.
              </p>
              <p className="text-sm sm:text-base">
                If you're experiencing plumbing issues in your basement, it's
                best to call a licensed plumber to assess the situation and make
                any necessary repairs. A professional plumber can help you
                identify the cause of the problem and ensure that your basement
                plumbing system is functioning properly and safely.
              </p>

              <ol className="list-disc mx-4 font-light text-sm sm:text-base">
                <li>We provide the most reasonable cost.</li>
                <li>Finish work before Deadline</li>
                <li>The certified materials in a timely.</li>
              </ol>
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium">What is included?</p>
              <p className="text-sm sm:text-base">
                Whether you have a dripping faucet, a broken pipe, or a major
                water leak, we have the skills and expertise to fix the problem
                promptly. We use high-quality parts and materials to ensure that
                our repairs are long-lasting and effective.
              </p>
              <ol className="list-disc mx-4 font-light text-sm sm:text-base">
                <li>We provide the most reasonable cost.</li>
                <li>Finish work before Deadline</li>
                <li>The certified materials in a timely.</li>
              </ol>

              <p className="text-sm sm:text-base">
                Don't let a faucet or leak issue ruin your day. Contact Quickfix
                for professional faucet and leak repair services that you can
                count on. Call us today to schedule an appointment or request
                emergency plumbing services.
              </p>
            </div>
          </div>

          {/* Contact Card - Shows as fixed card on large screens, bottom card on mobile */}
          <div className="mt-8 hidden bg-teal-50 rounded-lg lg:flex flex-col gap-2 p-6 lg:sticky lg:top-28 shadow-md lg:h-64">
            <h3 className="text-lg sm:text-xl font-semibold text-center text-teal-800 mb-3">
              Have Additional Questions?
            </h3>

            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-3 text-teal-700 text-sm sm:text-base">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Vidyadhar Nagar, Jaipur</span>
              </div>

              <div className="flex items-center gap-3 text-teal-700 text-sm sm:text-base">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+91-9828020432</span>
              </div>

              <div className="flex items-center gap-3 text-teal-700 text-sm sm:text-base">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>finnauxindia@gmail.com</span>
              </div>
            </div>

            <button className="mt-4 lg:mt-auto w-full lg:w-auto flex items-center justify-center lg:justify-start gap-2 text-teal-600 hover:text-teal-800 font-medium transition-colors text-sm sm:text-base">
              Contact Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
