import { CheckCircleIcon, LifeBuoyIcon, NetworkIcon, ShieldIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import Heading from "./heading";
import MaxWidthWrapper from "./max_width_wrapper";
import { NumberTicker } from "./number_ticker";
import Section from "./section";
import Text from "./text";
import { WhyChooseUsType } from "@/lib/api.types";

const ICONS_BY_INDEX = [
  ShieldIcon,
  LifeBuoyIcon,
  NetworkIcon
]

export default function WhyChooseUs({ data }: { data: WhyChooseUsType }) {

  return (
    <Section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute -right-20 -top-20 w-96 h-96 bg-teal-100 rounded-full blur-3xl"
          data-aos="zoom-in"
          data-aos-delay="400"
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

          <Text className="max-w-2xl text-gray-600">
            Transform your lending operations with our meticulously crafted
            financial infrastructure solutions
          </Text>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {data.whyChooseUsCard.map(({ data, suffix, tagline, title }, index) => {
            const Icon = ICONS_BY_INDEX[index];
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-teal-50 group"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="p-3 bg-teal-100/50 rounded-lg">
                      {/* <Icon className="w-6 h-6 text-teal-600" /> */}
                    </div>
                    <div className="text-4xl font-bold text-teal-600">
                      <NumberTicker
                        className=" tracking-normal"
                        value={data}
                      />
                      {suffix}
                    </div>
                  </div>

                  <Heading
                    as="h3"
                    className="mb-3 text-xl font-semibold text-gray-900">
                    {title}
                  </Heading>
                  <Text className="text-gray-600 leading-relaxed">
                    {tagline}
                  </Text>
                </div>
              </div>
            )
          })}
        </div>

        <div
          className="mt-12 text-center"
          data-aos="fade-up"
          data-aos-delay="600">
          <Text className="text-sm text-gray-500 italic">
            {data.footer}
          </Text>
        </div>
      </MaxWidthWrapper>
    </Section>
  );
}
