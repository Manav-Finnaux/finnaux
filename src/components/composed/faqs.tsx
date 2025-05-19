import { CircleHelpIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import MaxWidthWrapper from "./maxWidthWrapper";
import Section from "./section";
import Text from "./text";
import Heading from "./heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

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
]

export default function FAQs() {

  return (
    <Section className="space-y-8">
      <Badge>
        <CircleHelpIcon />
        <Text>FAQs</Text>
      </Badge>
      <MaxWidthWrapper className="flex flex-col items-center gap-8">
        <Heading as="h2">
          Questions? Answers!
        </Heading>

        {
          FAQS.map(({ question, answer }) => (
            <Accordion key={question} type="single" collapsible className="bg-slate-100 border border-stone-200 w-2/4 mx-auto py-4 space-y-3 rounded-lg px-12">
              <AccordionItem value="item-1">
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>
                  {answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))
        }

      </MaxWidthWrapper>
    </Section>
  );
}