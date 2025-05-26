"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { NumberTicker } from "@/components/composed/number-ticker";

export default function Page() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);

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

    const fetchData = async () => {
      try {
        const res = await fetch(
          "http://192.168.0.15:1337/api/service-page?populate[Module][populate][module][fields][0]=documentId&populate[whyChooseUs][populate]=whyChooseUsCard"
        );
        const json = await res.json();
        setData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div className="min-h-screen flex justify-center items-center">Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-r from-teal-200/20 via-green-200/20 to-cyan-200/20 min-h-screen w-full py-32 md:py-32 overflow-hidden">
      {/* Decorative Backgrounds */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100/20 rounded-full blur-3xl -z-10" data-aos="fade-in" data-aos-delay="300" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl -z-10" data-aos="fade-in" data-aos-delay="500" />

      {/* Header */}
      <div className="flex flex-col space-y-4 items-center justify-center mb-16" data-aos="fade-in">
        <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-center px-4 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent" data-aos="fade-in" data-aos-delay="100">
          {data.Heading}
        </span>
        <span className="text-lg font-light text-center px-4 max-w-2xl text-gray-600" data-aos="fade-up" data-aos-delay="150">
          {data.Tagline}
        </span>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.Module.map((item: any, index: number) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md p-8 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay={200 + index * 50}>
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{item.heading}</h3>
              <p className="text-gray-600">{item.excerpt}</p>
              <button
                onClick={() => router.push(`/${item.module.documentId}`)}
                className="bg-teal-600 hover:bg-teal-700 text-white shadow-md rounded-lg py-2 px-4 transition-all duration-300">
                Read more
              </button>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-24 text-center space-y-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800" data-aos="fade-up" data-aos-delay="100">
            {data.whyChooseUs?.heading}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{data.whyChooseUs?.tagline}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.whyChooseUs?.whyChooseUsCard?.map((card: any, index: number) => (
              <div key={card.id} className="space-y-2 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300" data-aos="fade-up" data-aos-delay={150 + index * 50}>
                <div className="text-4xl font-bold text-blue-600">
                  <NumberTicker className="text-blue-600" value={card.data} />
                  {card.suffix || ""}
                </div>
                <div className="font-semibold text-gray-800">{card.title}</div>
                {card.tagline && <p className="text-gray-600">{card.tagline}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
