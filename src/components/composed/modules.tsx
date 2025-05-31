import { LayoutGridIcon, MoveRightIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import Heading from "./heading";
import MaxWidthWrapper from "./max_width_wrapper";
import Section from "./section";
import Text from "./text";
import { ModulesSectionType } from "@/lib/api.types";

const MODULES = [
  {
    label: 'Loan Originating System',
    href: '/modules/los',
    description: 'Streamline your loan application and approval process with automated workflows'
  },
  {
    label: 'Loan Management System',
    href: '/modules/lms',
    description: 'Comprehensive tools for managing active loans and borrower relationships'
  },
  {
    label: 'GL Accounting',
    href: '/modules/accounting',
    description: 'Integrated general ledger for seamless financial tracking and reporting'
  },
  {
    label: 'Manage Portfolio',
    href: '/modules/portfolio',
    description: 'Real-time portfolio monitoring and risk assessment tools'
  },
  {
    label: 'Configuration',
    href: '/modules/configuration',
    description: 'Customizable settings to tailor the platform to your business needs'
  },
  {
    label: 'Reports',
    href: '/modules/reports',
    description: 'Advanced analytics and customizable reporting dashboards'
  },
];

export default function FunctionalBlocks({ data }: { data: ModulesSectionType }) {

  return (
    <Section id='modules' className="py-16 md:py-24 bg-gradient-to-b from-white to-teal-50/30">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12 xl:gap-16">
          {/* Left Column - Heading */}
          <div
            className="space-y-6 lg:w-1/3 xl:w-1/4"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <Badge
              variant="outline"
              className="font-semibold bg-teal-50 border w-fit px-4 py-2 rounded-full mb-4 text-teal-600 font-semiboldflex items-center"
              data-aos="zoom-in"
              data-aos-delay="50"
            >
              <LayoutGridIcon className="w-4 h-4 text-teal-600" />
              <Text className="text-teal-700">Modules</Text>
            </Badge>

            <Heading
              as="h2"
              className="text-3xl md:text-4xl lg:text-[2.5rem] leading-tight text-gray-800"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Modules That Drive <span className="text-teal-600">Efficiency</span>
            </Heading>

            <Text
              className="text-gray-600 md:text-lg hidden lg:block"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Discover our comprehensive suite of tools designed to optimize every aspect of your lending operations.
            </Text>
          </div>

          {/* Right Column - Modules List */}
          <div className="lg:w-2/3 xl:w-3/4">
            <div
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-teal-100"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              {data.moduleLinks.map(({ label, module, tagline }, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay={150 + (idx * 50)} // Shorter staggered delay
                >
                  <Link
                    href={'/products/' + module.documentId}
                    className="block group transition-all duration-200 hover:bg-teal-50/30"
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Text
                            variant="xl"
                            as="p"
                            className="font-semibold text-gray-800 group-hover:text-teal-700 transition-colors duration-200"
                          >
                            {label}
                          </Text>
                          <Text className="text-gray-600 mt-2 hidden sm:block transition-opacity duration-200 group-hover:opacity-90">
                            {tagline}
                          </Text>
                        </div>
                        <div className="transition-transform duration-200 group-hover:translate-x-1">
                          <MoveRightIcon className="w-5 h-5 text-gray-400 group-hover:text-teal-600 mt-1 flex-shrink-0 transition-colors duration-200" />
                        </div>
                      </div>
                    </div>
                    {idx !== MODULES.length - 1 && (
                      <div className="border-b border-teal-50 mx-6 transition-opacity duration-200 group-hover:opacity-70" />
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* Mobile-only CTA */}
            <div
              className="mt-8 lg:hidden text-center"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="400"
            >
              <Link
                href="/modules"
                className="inline-flex items-center text-teal-600 font-medium hover:text-teal-800 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-teal-50"
              >
                View all module features
                <MoveRightIcon className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </Section>
  );
}