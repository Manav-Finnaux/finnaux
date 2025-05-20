import { LayoutGridIcon, MoveRightIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import MaxWidthWrapper from "./maxWidthWrapper";
import Section from "./section";
import Heading from "./heading";
import Link from "next/link";
import Text from "./text";

const MODULES = [
  {
    label: 'Loan Originating System',
    href: '',
  },
  {
    label: 'Loan Management System',
    href: '',
  },
  {
    label: 'GL Accounting',
    href: '',
  },
  {
    label: 'Manage Portfolio',
    href: '',
  },
  {
    label: 'Configuration',
    href: '',
  },
  {
    label: 'Reports',
    href: '',
  },
];

export default function FunctionalBlocks() {
  return (
    <Section>
      <MaxWidthWrapper className="flex flex-col gap-8 md:flex-row md:gap-14">
        <div className="space-y-6 md:w-1/4">
          <Badge className="mx-0">
            <LayoutGridIcon stroke="teal" fill="teal" />
            Explore Our Modules
          </Badge>

          <Heading as="h2">
            Modules That Drive Efficiency
          </Heading>
        </div>

        <div className="md:w-3/4">
          {
            MODULES.map(({ label, href }, idx) => (
              <Link key={idx} href={href} className="block border-b border-b-black py-2 last-of-type:border-none">
                <div className="py-6 hover:bg-teal-100/60 rounded-lg">
                  <Text variant="xl" as="p" className="flex items-center justify-between px-4 font-medium">
                    {label}
                    <MoveRightIcon />
                  </Text>
                </div>
              </Link>
            ))
          }
        </div>
      </MaxWidthWrapper>
    </Section>
  );
}