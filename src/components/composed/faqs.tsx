import { CircleHelpIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Badge } from "../ui/badge";
import Heading from "./heading";
import MaxWidthWrapper from "./max_width_wrapper";
import Section from "./section";
import Text from "./text";
import { FaqsSectionType } from "@/lib/api.types";

export default function FAQs({ data }: { data: FaqsSectionType }) {
  return (
    <Section
      id="faq"
      className="space-y-8 bg-gray-50 !pt-0 rounded-lg shadow-md ">
      <Badge
        className="bg-teal-50 border w-fit px-4 py-2 rounded-full mb-4 text-teal-600 font-semiboldflex items-center mx-auto font-semibold"
        data-aos="fade-up"
        data-aos-delay="100">
        <CircleHelpIcon className="mr-2 w-4 h-4" />
        <Text>FAQ</Text>
      </Badge>

      {/* <Badge className="bg-teal-50 border w-fit px-4 py-2 rounded-full mb-4 text-teal-600 font-semiboldflex items-center mx-auto font-semibold">
        <CheckCircleIcon className="w-4 h-4 mr-2" />
        Why Choose Us?
      </Badge> */}

      <MaxWidthWrapper className="flex flex-col items-center gap-8 ">
        <Heading
          as="h2"
          className="mb-10 text-3xl font-bold text-gray-800 "
          data-aos="fade-up"
          data-aos-delay="150">
          {data.heading}
        </Heading>

        <Accordion type="single" collapsible className="w-full text-left">
          {data.qna.map(({ question, answer }, idx) => (
            <AccordionItem
              key={idx}
              value={idx.toString()}
              className="data-[state=open]:bg-primary/5 border-2 border-black/10 last-of-type:border transition-all duration-300 bg-gradient-to-r from-transparent via-white to-transparent hover:from-teal-50/50 hover:via-teal-50/30 hover:to-transparent rounded-xl mb-2"
              data-aos="fade-up"
              data-aos-delay={200 + idx * 50}>
              <AccordionTrigger className="text-lg sm:text-2xl font-medium py-6 px-4 transition-all duration-300 rounded-lg group">
                <div className="text-teal-600 mr-4 group-hover:scale-105 transition-transform">
                  {idx < 9 ? `0${idx + 1}.` : `${idx + 1}.`}
                </div>
                <div className="mr-auto group-hover:text-teal-700 transition-colors">
                  {question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="mx-12 text-gray-700 text-justify text-base sm:text-xl pb-6 animate-fadeIn">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </MaxWidthWrapper>
    </Section>
  );
}
