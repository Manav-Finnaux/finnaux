import { MessageSquareIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Heading from "./heading";
import { Marquee } from "./magic_ui_marquee";
import Section from "./section";
import Text from "./text";
import { TestimonialsSectionType } from "@/lib/api.types";

export default function Testimonials({ data }: { data: TestimonialsSectionType }) {
  const baseUrl = process.env.SERVER_API_BASE_URL;

  return (
    <Section className="overflow-hidden space-y-6 py-16 bg-gray-50">
      <Badge
        className="font-semibold bg-teal-50 border w-fit px-4 py-2 rounded-full mb-4 text-teal-600 font-semiboldflex items-center mx-auto"
        data-aos="fade-up"
        data-aos-delay="100">
        <MessageSquareIcon size={14} fill="teal" stroke="teal" />
        <Text>Testimonials</Text>
      </Badge>

      <Heading
        as="h2"
        className="text-center text-3xl font-bold text-gray-900"
        data-aos="fade-up"
        data-aos-delay="150">
        What Our Clients Say
      </Heading>

      <div className="relative">
        <div className="overflow-hidden w-full py-10">
          <Marquee className="flex items-center [--duration:10s]" pauseOnHover>
            {/* gap is 1rem cuz in Marquee, gap is 1rem -- consistency :) */}
            <div className="flex py-5 gap-x-4">
              {data.testimonial.map(({ name, testimonial, designation, avatar, companyName }, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl shadow-lg w-80 flex flex-col px-4 justify-between py-8 hover:shadow-xl transition-shadow duration-300"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}>
                  <div>
                    <div className="bg-teal-50 border w-fit mx-2 px-2 py-1 text-sm rounded-full mb-4 text-teal-600 font-medium">
                      {companyName}
                    </div>

                    <p className="text-gray-700 font-medium px-3 leading-relaxed line-clamp-5">
                      {testimonial}
                    </p>
                  </div>

                  <div className="flex items-center mt-6 pt-4 border-t border-gray-200 px-5">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={baseUrl + avatar.url}
                        alt={name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {designation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        <div className="hidden min-[480px]:block absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="hidden min-[480px]:block absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </Section>
  );
}
