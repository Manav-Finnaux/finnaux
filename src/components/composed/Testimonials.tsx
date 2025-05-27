// "use client"
import { MessageSquareIcon } from "lucide-react";
import Image from "next/image";
// import { useEffect } from "react";
import { Badge } from "../ui/badge";
import Heading from "./heading";
import { Marquee } from "./magic-ui-marquee";
import Section from "./section";
import Text from "./text";


export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, TechCorp",
      image: "/testimonial1.jpg",
      text: "The loan management system has transformed how we handle our financial operations. Highly recommended!",
    },
    {
      name: "Sarah Smith",
      role: "CFO, StartupX",
      image: "/testimonial2.jpg",
      text: "Incredible platform that has streamlined our entire loan process. The efficiency gains are remarkable.",
    },
    {
      name: "Mike Johnson",
      role: "Director, FinanceHub",
      image: "/testimonial3.jpg",
      text: "Outstanding service and support. The platform has exceeded our expectations in every way.",
    },
    {
      name: "Emily Davis",
      role: "Manager, FinTech Solutions",
      image: "/testimonial4.jpg",
      text: "A game changer for our business. The user experience is top-notch!",
    },
    {
      name: "Chris Lee",
      role: "CTO, Innovate Inc.",
      image: "/testimonial5.jpg",
      text: "The best investment we've made in our financial operations. Highly recommend!",
    },
  ];

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const AOS = require("aos");
  //     AOS.init({
  //       once: true,
  //       duration: 600,
  //       easing: "ease-out-quad",
  //     });
  //   }
  // }, []);

  return (
    <Section className="overflow-hidden space-y-6 py-16 bg-gray-50">
      <Badge className="font-semibold bg-teal-50 border w-fit px-4 py-2 rounded-full mb-4 text-teal-600 font-semiboldflex items-center mx-auto" data-aos="fade-up" data-aos-delay="100">
        <MessageSquareIcon size={14} fill="teal" stroke="teal" />
        <Text>Testimonials</Text>
      </Badge>

      <Heading as="h2" className="text-center text-3xl font-bold text-gray-900" data-aos="fade-up" data-aos-delay="150">
        What Our Clients Say
      </Heading>

      <div className="relative">
        <div className="overflow-hidden w-full py-10">
          <Marquee className="flex items-center">
            <div className="flex py-5">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl shadow-lg w-80 mx-2 flex flex-col px-4 justify-between py-8 hover:shadow-xl transition-shadow duration-300"
                  data-aos="fade-up"
                  data-aos-delay={200 + (index * 100)}
                >
                  <div className="bg-teal-50 border w-fit mx-2 px-4 py-2 rounded-full mb-4 text-teal-600 font-semibold">
                    01 Apr, 2025
                  </div>

                  <p className="text-gray-700 font-medium px-3 leading-relaxed">
                    {testimonial.text}
                  </p>

                  <div className="flex items-center mt-6 pt-4 border-t border-gray-200 px-5">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </Section>
  );
}
