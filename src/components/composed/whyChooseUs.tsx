"use client"
"use client";
import { CheckCircleIcon, LifeBuoy, Network, Shield } from "lucide-react";
import { useEffect } from "react";
import { Badge } from "../ui/badge";
import Heading from "./heading";
import MaxWidthWrapper from "./maxWidthWrapper";
import { NumberTicker } from "./number-ticker";
import Section from "./section";
import Text from "./text";


export default function WhyChooseUs() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      AOS.init({
        once: true,
        duration: 600,
        easing: "ease-out-quad",
      });
    }
  }, []);

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-teal-600" />,
      value: 99,
      suffix: "%",
      title: "Reliable Solutions",
      description: "Minimized errors and ensured data integrity"
    },
    {
      icon: <LifeBuoy className="w-6 h-6 text-teal-600" />,
      value: 24,
      suffix: "/7",
      title: "Unmatched Assistance",
      description: "Round-the-clock operational support"
    },
    {
      icon: <Network className="w-6 h-6 text-teal-600" />,
      value: 500,
      suffix: "+",
      title: "Trusted Network",
      description: "Growing community of successful NBFCs"
    }
  ];

  return (
    <Section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-teal-100 rounded-full blur-3xl"
          data-aos="zoom-in" data-aos-delay="400" />
      </div>

      <MaxWidthWrapper>
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
          <Badge className="bg-teal-50 border w-fit px-4 py-2 rounded-full mb-4 text-teal-600 font-semiboldflex items-center mx-auto font-semibold">
            <CheckCircleIcon className="w-4 h-4 mr-2" />
            Why Choose Us?
          </Badge>

          <Heading as="h2" className="mb-4 text-4xl font-bold text-gray-900">
            Precision Engineered for
            <span className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
              {" "}Financial Excellence
            </span>
          </Heading>

          <Text className="max-w-2xl text-gray-600">
            Transform your lending operations with our meticulously crafted financial infrastructure solutions
          </Text>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-50 group"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="p-3 bg-teal-100/50 rounded-lg">
                    {feature.icon}
                  </div>
                  <div className="text-4xl font-bold text-teal-600">
                    <NumberTicker className=" tracking-normal" value={feature.value} />
                    {feature.suffix}
                  </div>
                </div>

                <Heading as="h3" className="mb-3 text-xl font-semibold text-gray-900">
                  {feature.title}
                </Heading>
                <Text className="text-gray-600 leading-relaxed">
                  {feature.description}
                </Text>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="600">
          <Text className="text-sm text-gray-500 italic">
            Trusted by 50+ financial institutions across 12 countries
          </Text>
        </div>
      </MaxWidthWrapper>
    </Section>
  );
}