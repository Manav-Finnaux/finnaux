import {
  CalendarDaysIcon,
  CheckCircleIcon,
  LaughIcon,
  PhoneIcon,
  ShieldIcon,
} from "lucide-react";
import { Badge } from "../ui/badge";
import Heading from "./heading";
import MaxWidthWrapper from "./max_width_wrapper";
import { NumberTicker } from "./number_ticker";
import Section from "./section";
import Text from "./text";
import { WhyChooseUsType } from "@/lib/api.types";

const ICONS_BY_INDEX = [LaughIcon, ShieldIcon, CalendarDaysIcon, PhoneIcon];

export default function WhyChooseUs({ data }: { data: WhyChooseUsType }) {
  return (
    <Section className="relative -my-36 bg-white mb-16 py-16  overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute -right-20 -top-20 w-96 h-96 bg-teal-100 rounded-full blur-3xl"
          data-aos="zoom-in"
          data-aos-delay="300"
        />
      </div>

      <MaxWidthWrapper>
        <div
          className="flex flex-col items-center text-center mb-16"
          data-aos="fade-up">
          <Badge className="bg-teal-50 border w-fit px-4 py-2 rounded-full mb-4 text-teal-600 font-semiboldflex items-center mx-auto font-semibold">
            <CheckCircleIcon className="w-4 h-4 mr-2" />
            Why Choose Us?
          </Badge>

          <Heading as="h2" className="mb-4 text-4xl font-bold text-gray-900">
            Precision Engineered for
            <span className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
              {" "}
              Financial Excellence
            </span>
          </Heading>

          <Text className="max-w-2xl text-gray-600">{data.tagline}</Text>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {data.whyChooseUsCard.map(
            ({ data, suffix, tagline, title }, index) => {
              const Icon = ICONS_BY_INDEX[index];
              return (
                <div
                  key={index}
                  className="relative bg-white rounded-xl p-6 sm:p-7 md:p-8 shadow-xs hover:shadow-sm transition-all duration-300 border border-gray-100 group overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 50}>
                  {/* Gradient background overlay (only on hover) */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-50/30 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    {/* Icon and Number */}
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-teal-600" />
                      </div>
                      <div className="text-2xl font-bold text-teal-700 flex items-baseline gap-1">
                        <NumberTicker
                          value={data}
                          className="font-sans tracking-tight"
                        />
                        <span className="text-lg font-medium text-teal-600">
                          {suffix}
                        </span>
                      </div>
                    </div>

                    {/* Title and Description */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                        {title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {tagline}
                      </p>
                    </div>
                  </div>

                  {/* Hover effect elements */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            }
          )}
        </div>

        <div
          className="mt-12 text-center"
          data-aos="fade-up"
          data-aos-delay="600">
          <Text className="text-lg font-semibold text-gray-900 leading-snug">
            {data.footer}
          </Text>
          {/* <Text className="text-lg font-medium text-gray-500 italic">{data.footer}</Text> */}
        </div>
      </MaxWidthWrapper>
    </Section>
  );
}
