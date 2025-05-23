"use client";
import { CircleHelpIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import MaxWidthWrapper from "./maxWidthWrapper";
import Section from "./section";
import Text from "./text";
import Heading from "./heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { useEffect } from "react";
import 'aos/dist/aos.css';

const FAQS = [
  {
    question: 'What is the purpose of this service?',
    answer: "Our service is designed to provide exceptional solutions tailored to meet your specific needs. Whether you're looking for comprehensive support or targeted assistance, we're here to help."
  },
  {
    question: "How can I get started?",
    answer: "Getting started is easy! Simply sign up on our website, complete the registration process, and explore our range of services."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers. For more information on payment options, visit our billing page."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time through your account settings. Please review our cancellation policy for further details."
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach our customer support team via email at support@example.com or through the live chat feature on our website."
  },
];

export default function FAQs() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init({
        once: true,
        duration: 600,
        easing: 'ease-out-quad',
      });
    }
  }, []);

  return (
    <Section className="space-y-8 bg-gray-50 p-8 rounded-lg shadow-md">

      <Badge className="bg-teal-100 text-teal-600 p-2 rounded-lg flex items-center" data-aos="fade-up" data-aos-delay="100">
      <CircleHelpIcon className="mr-2" />
        <Text>Testimonials</Text>
      </Badge>
      <MaxWidthWrapper className="flex flex-col items-center gap-8">
        <Heading as="h2" className="mb-10 text-3xl font-bold text-gray-800" data-aos="fade-up" data-aos-delay="150">
          Questions? Answers!
        </Heading>

        <Accordion type="single" collapsible className="w-full text-left">
          {
            FAQS.map(({ question, answer }, idx) => (
              <AccordionItem 
                key={idx} 
                value={idx.toString()} 
                className="data-[state=open]:bg-teal-50 border-b last-of-type:border-none transition-all duration-300"
                data-aos="fade-up" 
                data-aos-delay={200 + idx * 50} // Staggered delay for each FAQ
              >
                <AccordionTrigger className="text-lg sm:text-2xl font-medium py-6 data-[state=open]:pb-0 px-2 hover:bg-teal-100 transition-colors">
                  <div className="text-teal-600 mr-4">
                    {idx < 9 ? `0${idx + 1}.` : `${idx + 1}.`}
                  </div>
                  <div className="mr-auto">
                    {question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="mx-12 text-gray-700 text-justify text-base sm:text-xl pb-6">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))
          }
        </Accordion>
      </MaxWidthWrapper>
    </Section>
  );
}
