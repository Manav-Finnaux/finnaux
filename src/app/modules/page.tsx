"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { NumberTicker } from "@/components/composed/number-ticker";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      AOS.init({
        once: true,
        duration: 800,
        easing: "ease-out-quint",
        offset: 120,
        delay: 100,
      });
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-teal-200/20 via-green-200/20 to-cyan-200/20 min-h-screen w-full py-32 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-64 h-64 bg-teal-100/20 rounded-full blur-3xl -z-10"
        data-aos="fade-in"
        data-aos-delay="300"
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl -z-10"
        data-aos="fade-in"
        data-aos-delay="500"
      />

      {/* Header Section */}
      <div
        className="flex flex-col space-y-4 items-center justify-center mb-16"
        data-aos="fade-in">
        <span
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-center px-4 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"
          data-aos="fade-in"
          data-aos-delay="100">
          Our Services
        </span>
        <span
          className="text-lg font-light text-center px-4 max-w-2xl text-gray-600"
          data-aos="fade-up"
          data-aos-delay="150">
          We provide comprehensive financial solutions tailored to your needs
        </span>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div
            className="bg-white rounded-xl shadow-md p-8 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="200">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800">
              Investment Planning
            </h3>
            <p className="text-gray-600">
              Strategic investment solutions to help you achieve your financial
              goals
            </p>
            <button
              onClick={() => router.push("/compo")}
              className="bg-teal-600 hover:bg-teal-700 text-white shadow-md rounded-lg py-2 px-4 transition-all duration-300">
              Read more
            </button>
          </div>

          {/* Service Card 2 */}
          <div
            className="bg-white rounded-xl shadow-md p-8 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="250">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800">
              Wealth Management
            </h3>
            <p className="text-gray-600">
              Comprehensive wealth management services for long-term financial
              security
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white shadow-md rounded-lg py-2 px-4 transition-all duration-300">
              Read more
            </button>
          </div>

          {/* Service Card 3 */}
          <div
            className="bg-white rounded-xl shadow-md p-8 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="300">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🏦</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800">
              Banking Solutions
            </h3>
            <p className="text-gray-600">
              Modern banking solutions designed for your personal and business
              needs
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white shadow-md rounded-lg py-2 px-4 transition-all duration-300">
              Read more
            </button>
          </div>

          {/* Service Card 4 */}
          <div
            className="bg-white rounded-xl shadow-md p-8 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="350">
            <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Market Analysis</h3>
            <p className="text-gray-600">
              In-depth market analysis and research for informed decision making
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white shadow-md rounded-lg py-2 px-4 transition-all duration-300">
              Read more
            </button>
          </div>

          {/* Service Card 5 */}
          <div
            className="bg-white rounded-xl shadow-md p-8 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="400">
            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Risk Management</h3>
            <p className="text-gray-600">
              Comprehensive risk assessment and management strategies
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white shadow-md rounded-lg py-2 px-4 transition-all duration-300">
              Read more
            </button>
          </div>

          {/* Service Card 6 */}
          <div
            className="bg-white rounded-xl shadow-md p-8 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="450">
            <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Digital Banking</h3>
            <p className="text-gray-600">
              Next-generation digital banking services for seamless transactions
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white shadow-md rounded-lg py-2 px-4 transition-all duration-300">
              Read more
            </button>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-24 text-center space-y-8" data-aos="fade-up">
          <h2
            className="text-3xl font-bold text-gray-800"
            data-aos="fade-up"
            data-aos-delay="100">
            Why Choose Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div
              className="space-y-2 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="150">
              <div className="text-4xl font-bold text-blue-600">
                <NumberTicker className="text-blue-600" value={24} />
                /7
              </div>
              <div className="font-semibold text-gray-800">
                Support Available
              </div>
              <p className="text-gray-600">
                Round-the-clock assistance for all your needs
              </p>
            </div>

            {/* Feature 2 */}
            <div
              className="space-y-2 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200">
              <div className="text-4xl font-bold text-blue-600">
                <NumberTicker className="text-blue-600" value={15} />+
              </div>
              <div className="font-semibold text-gray-800">
                Years Experience
              </div>
              <p className="text-gray-600">Proven track record of excellence</p>
            </div>

            {/* Feature 3 */}
            <div
              className="space-y-2 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="250">
              <div className="text-4xl font-bold text-blue-600">
                <NumberTicker className="text-blue-600" value={100} />%
              </div>
              <div className="font-semibold text-gray-800">Secure</div>
              <p className="text-gray-600">Top-tier security for your assets</p>
            </div>

            {/* Feature 4 */}
            <div
              className="space-y-2 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300">
              <div className="text-4xl font-bold text-blue-600">
                <NumberTicker className="text-blue-600" value={5000} />
              </div>
              <div className="font-semibold text-gray-800">Happy Clients</div>
              <p className="text-gray-600">Trusted by thousands worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
