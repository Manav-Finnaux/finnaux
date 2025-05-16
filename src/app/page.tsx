import Features from "@/components/composed/features";
import Heading from "@/components/composed/heading";
import MaxWidthWrapper from "@/components/composed/maxWidthWrapper";
import Section from "@/components/composed/section";
import Text from "@/components/composed/text";
import { Badge } from "@/components/ui/badge";
import { AwardIcon, BarChart2Icon, ClipboardListIcon, FileTextIcon, FolderOpenIcon, HandshakeIcon, LayersIcon, PieChartIcon, SettingsIcon, ShieldCheckIcon, ZapIcon } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AboutUs from "@/components/composed/aboutUs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "@/components/composed/Header";
import MarqueeSection from "@/components/composed/Marquee";

const whyChooseUs = [
  {
    icon: ShieldCheckIcon,
    title: 'Compliance Made Simple',
    description: 'Stay ahead of regulations with built-in compliance tools, automatic document tracking, and audit-ready reporting.'
  },
  {
    icon: ZapIcon,
    title: 'Faster Loan Decisions',
    description: 'Automate credit assessments, reduce manual reviews, and get approvals out 10x faster—without sacrificing accuracy.'
  },
  {
    icon: LayersIcon,
    title: 'Scalable Infrastructure',
    description: "Whether you're servicing hundreds or millions, our platform grows with you—secure, stable, and built for high volume."
  },
  {
    icon: HandshakeIcon,
    title: 'Dedicated Support & Onboarding',
    description: 'Get personalized onboarding and expert guidance every step of the way. No bots—just real people who understand lending.'
  },
];

const services = [
  {
    title: 'Loan Originating System',
    description: 'Manage the entire pre-disbursement process — from enquiry to disbursement — with configurable workflows, user rights, and task assignments. The system logs every action, ensuring regulatory compliance and a comprehensive audit trail.',
    icon: FileTextIcon,
    badge: 'Automated Workflows'
  },
  {
    title: 'Loan Management System',
    description: 'Convert loan applications to active loans, handle disbursements, EMI billing, NACH/PDC processing, and closures. Includes loan-related accounting, customer tracking, and exportable reports for sales, operations, and collections.',
    icon: ClipboardListIcon,
    badge: 'End-to-End Lending'
  },
  {
    title: 'GL Accounting',
    description: 'An integrated accounting system that automates voucher posting for transactions and offers financial reports like cash book, bank reconciliation, trial balance, P&L, and balance sheet.',
    icon: BarChart2Icon,
    badge: 'Integrated Finance'
  },
  {
    title: 'Manage Portfolio',
    description: 'Configure and manage branches, user roles, loan products, documents, charges, and employee hierarchy. Admins can also handle geographical and tax configurations relevant to lending operations.',
    icon: FolderOpenIcon,
    badge: 'Centralized Control'
  },
  {
    title: 'Configuration',
    description: 'Centralized control panel to manage user rights, loan products, policies, templates, and other key settings across the platform, ensuring consistency in LOS and LMS.',
    icon: SettingsIcon,
    badge: 'Customizable Settings'
  },
  {
    title: 'Reports',
    description: 'Generate comprehensive reports with customizable filters, grouping, and formatting options. Access MIS, analytical, and loan-specific reports to gain actionable insights.',
    icon: PieChartIcon,
    badge: 'Data-Driven Insights'
  },
];

export default function Home() {
  return (
    <>
      {/* HeroSection */}
      <HeroSection />

      {/* Client logo marquee */}
      <MarqueeSection />

      {/* About Us */}
      <AboutUs />

      {/* Services */}
      <Section>
        <MaxWidthWrapper className="flex flex-col gap-10">
          {
            services.map(({ title, description, icon: Icon, badge }, idx) => {
              return (
                <div key={title} className={cn("bg-white rounded-3xl p-4 sm:p-6 md:p-10 max-w-lg flex flex-col gap-4 mx-auto md:max-w-2xl lg:w-9/12 lg:max-w-none lg:gap-24 xl:w-fit", idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse')}>
                  <div className="flex flex-col gap-4 lg:w-1/2">
                    <Badge variant={'outline'}>
                      <Icon />
                      {badge}
                    </Badge>
                    <div>
                      <Heading as="h2">
                        {title}
                      </Heading>
                    </div>
                    <Text as="p">
                      {description}
                    </Text>
                  </div>

                  <div className="relative w-full h-80 rounded-md border-slate-200 border lg:w-1/2">
                    <Image src={'/servicesSection.svg'} fill alt="" className="object-cover" />
                  </div>
                </div>
              );
            })
          }
        </MaxWidthWrapper>
      </Section>

      {/* Finnaux 1 overview */}

      {/* Features */}
      <Features />

      {/* Why Choose Us? */}
      <Section>
        <MaxWidthWrapper className="flex flex-col justify-center items-center gap-12 mx-auto">
          <Badge>
            <AwardIcon />
            Why Us
          </Badge>
          <div className="flex flex-col gap-4 min-[560px]:text-center max-w-3xl">
            <Heading as="h2">Why Choose Finnaux?</Heading>
            <Text as="p" variant="lg">
              With decades of NBFC expertise, Finnaux delivers tailored solutions that drive efficiency and elevate lending operations.
            </Text>
          </div>

          <div className="grid gap-4 max-w-[440px] grid-rows-4 min-[560px]:grid-cols-2 min-[560px]:max-w-none lg:grid-cols-3 lg:grid-rows-2">
            {/* img? */}
            <div className="h-auto bg-slate-400 rounded-lg min-w-24 row-span-2 min-[560px]:col-span-2 min-[560px]:min-w-[250px] min-[560px]:max-w-[480px] min-[560px]:mx-auto lg:col-span-1 lg:col-start-2 lg:col-end-3 lg:order-3">Hello</div>

            {/* cards */}
            {
              whyChooseUs.map(({ icon, title, description }, idx) => {
                let colStart, colEnd, rowStart, rowEnd, order;
                if (idx === 0) {
                  colStart = 'lg:col-start-1';
                  colEnd = 'lg:col-end-2';
                  rowStart = 'lg:row-start-1';
                  rowEnd = 'lg:row-end-2';
                  order = 'lg:order-1';
                }
                else if (idx === 1) {
                  // lg:-col-start-4 lg:-col-end-3 lg:row-start-2 lg:row-end-3 lg:order-2
                  colStart = 'lg:-col-start-4';
                  colEnd = 'lg:-col-end-3';
                  rowStart = 'lg:row-start-2';
                  rowEnd = 'lg:row-end-3';
                  order = 2;
                }
                else if (idx === 2) {
                  // lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 lg:order-4
                  colStart = 'lg:col-start-3';
                  colEnd = 'lg:col-end-4';
                  rowStart = 'lg:row-start-1';
                  rowEnd = 'lg:row-end-2';
                  order = 4;
                }
                else if (idx === 3) {
                  // lg:-col-start-2 lg:-col-end-1 lg:-row-start-2 lg:-row-end-1 lg:order-4
                  colStart = 'lg:-col-start-2';
                  colEnd = 'lg:-col-end-1';
                  rowStart = 'lg:-row-start-2';
                  rowEnd = 'lg:-row-end-1';
                  order = 5;
                }

                const ICON = icon;
                return (
                  <Card data-type='Card' key={title} className={cn("max-w-[420px]", `${colStart} ${colEnd} ${rowStart} ${rowEnd} ${order}`)}>
                    <CardHeader data-type='CardHeader' className="h-full flex flex-col justify-evenly items-center">
                      <div className="flex gap-2">
                        <ICON />
                        <CardTitle>
                          <Heading as="h3">
                            {title}
                          </Heading>
                        </CardTitle>
                      </div>

                      <CardDescription data-type='CardDescription' className="max-w-[320px]">
                        {description}
                        idx: {idx}
                        order: {order}
                        {` Rows: ${rowStart} ${rowEnd} Cols:${colStart} ${colEnd} `}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                )
              }
              )
            }
          </div>
        </MaxWidthWrapper>
      </Section>

      {/* CTA */}
      <Section>
        <MaxWidthWrapper className="bg-white flex flex-col items-center text-center gap-4 px-6 py-6 max-w-xl sm:max-w-4xl sm:px-8 sm:py-12 rounded-3xl min-[560px]:gap-5 md:gap-6">
          <h2 className="text-2xl font-medium min-[560px]:text-3xl md:text-4xl">
            <span className="block min-[445px]:inline">
              Simplify Lending.
            </span>
            {' '}
            <span className="block min-[445px]:inline">
              Maximize Growth.
            </span>
          </h2>
          <p className="text-md min-[560px]:text-lg md:text-xl">Join the NBFCs modernizing their loan management with our powerful, easy-to-use platform.</p>
          <Button className="max-w-44">
            Schedule a Free Demo
          </Button>
        </MaxWidthWrapper>
      </Section>
    </>
  );
}