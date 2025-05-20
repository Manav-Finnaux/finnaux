import Image from "next/image";
import { Badge } from "../ui/badge";
import { MessageSquareIcon } from "lucide-react";
import Text from "./text";
import Heading from "./heading";
import Section from "./section";
import { Marquee } from "./magic-ui-marquee";

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
      name: "Mike Johnson",
      role: "Director, FinanceHub",
      image: "/testimonial3.jpg",
      text: "Outstanding service and support. The platform has exceeded our expectations in every way.",
    },
    {
      name: "Mike Johnson",
      role: "Director, FinanceHub",
      image: "/testimonial3.jpg",
      text: "Outstanding service and support. The platform has exceeded our expectations in every way.",
    },
  ];

  return (
    <Section className="overflow-hidden space-y-6">
      {/* <MaxWidthWrapper className="container mx-auto px-0 space-y-4"> */}
      <Badge>
        <MessageSquareIcon size={14} fill="teal" stroke="teal" />
        <Text className="text-sm">
          Testimonials
        </Text>
      </Badge>

      <Heading as="h2" className="text-center">
        What Our Clients Say
      </Heading>

      <div className="relative">
        <div className="overflow-hidden w-full py-10">
          <Marquee className="flex items-center">
            <div className="flex py-5">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-zinc-100/70 border-zinc-300 border rounded-2xl h-auto shadow-lg w-80 mx-4 flex flex-col px-4 justify-between py-8 hover:scale-105 transition-transform duration-300">

                  <div className="bg-slate-50 border w-fit mx-2 px-4 py-2 rounded-full mb-4">
                    01 Apr, 2025
                  </div>

                  <p className="text-gray-700 font-medium px-3 leading-relaxed">
                    {testimonial.text}
                  </p>

                  <div className="flex items-center mt-6 pt-4 border-t px-5">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={'https://avatar.iran.liara.run/public'}
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
      {/* </MaxWidthWrapper> */}
    </Section>
  );
}