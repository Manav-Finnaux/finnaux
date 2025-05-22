'use client'
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();
  
  return (
    <div className="bg-gradient-to-r from-teal-200/20 via-green-200/20 to-cyan-200/20 min-h-screen w-full py-32 md:py-32">
      {/* Header Section */}
      <div className="flex flex-col space-y-4 items-center justify-center mb-16">
        <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-center px-4">Our Services</span>
        <span className="text-lg font-light text-center px-4 max-w-2xl">
          We provide comprehensive financial solutions tailored to your needs
        </span>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="text-xl font-bold">Investment Planning</h3>
            <p className="text-gray-600">Strategic investment solutions to help you achieve your financial goals</p>
            <button onClick={() => router.push('/compo')} className="bg-teal-600 text-white shadow-md rounded-lg py-1 px-2 "> Read more </button>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold">Wealth Management</h3>
            <p className="text-gray-600">Comprehensive wealth management services for long-term financial security</p>
            <button className="bg-teal-600 text-white shadow-md rounded-lg py-1 px-2 "> Read more </button>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-8 space-y-4">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🏦</span>
            </div>
            <h3 className="text-xl font-bold">Banking Solutions</h3>
            <p className="text-gray-600">Modern banking solutions designed for your personal and business needs</p>
            <button className="bg-teal-600 text-white shadow-md rounded-lg py-1 px-2 "> Read more </button>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white rounded-xl shadow-md p-8 space-y-4">
            <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-bold">Market Analysis</h3>
            <p className="text-gray-600">In-depth market analysis and research for informed decision making</p>
            <button className="bg-teal-600 text-white shadow-md rounded-lg py-1 px-2 "> Read more </button>
          </div>

          {/* Service Card 5 */}
          <div className="bg-white rounded-xl shadow-md p-8 space-y-4">
            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-bold">Risk Management</h3>
            <p className="text-gray-600">Comprehensive risk assessment and management strategies</p>
            <button className="bg-teal-600 text-white shadow-md rounded-lg py-1 px-2 "> Read more </button>
          </div>

          {/* Service Card 6 */}
          <div className="bg-white rounded-xl shadow-md p-8 space-y-4">
            <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-bold">Digital Banking</h3>
            <p className="text-gray-600">Next-generation digital banking services for seamless transactions</p>
            <button className="bg-teal-600 text-white shadow-md rounded-lg py-1 px-2 "> Read more </button>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-24 text-center space-y-8">
          <h2 className="text-3xl font-bold">Why Choose Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">24/7</div>
              <div className="font-semibold">Support Available</div>
              <p className="text-gray-600">Round-the-clock assistance for all your needs</p>
              
            </div>

            {/* Feature 2 */}
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">15+</div>
              <div className="font-semibold">Years Experience</div>
              <p className="text-gray-600">Proven track record of excellence</p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">100%</div>
              <div className="font-semibold">Secure</div>
              <p className="text-gray-600">Top-tier security for your assets</p>
            </div>

            {/* Feature 4 */}
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">50K+</div>
              <div className="font-semibold">Happy Clients</div>
              <p className="text-gray-600">Trusted by thousands worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
