import { CheckCircleIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import MaxWidthWrapper from "./maxWidthWrapper";
import Section from "./section";
import Text from "./text";
import Heading from "./heading";
import { NumberTicker } from "./number-ticker";

// const whyChooseUs = [
//   {
//     stats: {
//       metric: 99,
//       followUp: '%'
//     },
//     heading: 'Reliable Solutions',
//     content: 'Our software minimizes errors and ensures data integrity.',
//   },
//   {
//     stats: {
//       metric: 24,
//       followUp: '/7 Support'
//     },
//     heading: 'Unmatched Assistance',
//     content: 'Get round-the-clock support to keep your operations smooth.',
//   },
//   {
//     stats: {
//       metric: 500,
//       followUp: '+'
//     },
//     heading: 'Trusted Network',
//     content: 'Join a growing community of successful NBFCs using Finnaux.',
//   },
// ];

export default function WhyChooseUs() {
  return (
    <Section>
      <MaxWidthWrapper className="flex flex-col gap-8">
        <Badge>
          <CheckCircleIcon stroke="teal" />
          Why Choose Us?
        </Badge>

        <Text variant="xl" as="p" className="text-center">
          Your lending operations need a reliable partner to streamline processes,
          so you can drive consistent growth and long-term profitability.
        </Text>

        <div className="flex flex-col mx-auto gap-4 sm:gap-8 sm:flex-row sm:flex-wrap sm:justify-center md:justify-normal md:flex-nowrap">
          {/* from--emerald-100/30 */}
          <div className="bg-stone-100/70 border border-transparent hover:border-teal-200 hover:bg-gradient-to-t from-slate-100 to-teal-50 max-w-80 rounded-xl sm:min-w-80 md:min-w-0 p-10 flex flex-col justify-between gap-10">
            <Text as="p" className="text-5xl text-teal-600">
              <NumberTicker value={99} className="text-teal-600" />%
            </Text>
            <div>
              <Heading as="h3" className="pb-2 font-semibold">
                Reliable Solutions
              </Heading>
              <Text className="text-gray-500">
                Our software minimizes errors and ensures data integrity.
              </Text>
            </div>
          </div>
          <div className="bg-stone-100/70 border border-transparent hover:border-teal-200 hover:bg-gradient-to-t from-slate-100 to-teal-50 max-w-80 rounded-xl sm:min-w-80 md:min-w-0 p-10 flex flex-col justify-between gap-10">
            <Text as="p" className="text-5xl text-teal-600">
              <NumberTicker value={99} className="text-teal-600" />%
            </Text>
            <div>
              <Heading as="h3" className="pb-2 font-semibold">
                Reliable Solutions
              </Heading>
              <Text className="text-gray-500">
                Our software minimizes errors and ensures data integrity.
              </Text>
            </div>
          </div>
          <div className="bg-stone-100/70 border border-transparent hover:border-teal-200 hover:bg-gradient-to-t from-emerald-100/30 to-teal-50 max-w-80 rounded-xl sm:min-w-80 md:min-w-0 p-10 flex flex-col justify-between gap-10">
            <Text as="p" className="text-5xl text-teal-600">
              <NumberTicker value={99} className="text-teal-600" />%
            </Text>
            <div>
              <Heading as="h3" className="pb-2 font-semibold">
                Reliable Solutions
              </Heading>
              <Text className="text-gray-500">
                Our software minimizes errors and ensures data integrity.
              </Text>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </Section>
  )
}

// const whyChooseUs = [
//   {
//     title: 'Compliance Made Simple',
//     description: 'Stay ahead of regulations with built-in compliance tools, automatic document tracking, and audit-ready reporting.'
//   },
//   {
//     title: 'Faster Loan Decisions',
//     description: 'Automate credit assessments, reduce manual reviews, and get approvals out 10x faster—without sacrificing accuracy.'
//   },
//   {
//     title: 'Scalable Infrastructure',
//     description: "Whether you're servicing hundreds or millions, our platform grows with you—secure, stable, and built for high volume."
//   },
//   {
//     title: 'Dedicated Support & Onboarding',
//     description: 'Get personalized onboarding and expert guidance every step of the way. No bots—just real people who understand lending.'
//   },
// ];