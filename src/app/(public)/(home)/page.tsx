import Features from "@/components/composed/features";
// import { BarChart2Icon, ClipboardListIcon, FileTextIcon, FolderOpenIcon, PieChartIcon, SettingsIcon } from "lucide-react";
import AboutUs from "@/components/composed/aboutUs";
import FAQs from "@/components/composed/faqs";
import HeroSection from "@/components/composed/Header";
import MarqueeSection from "@/components/composed/Marquee";
import FunctionalBlocks from "@/components/composed/modules";
import Testimonials from "@/components/composed/Testimonials";
import WhyChooseUs from "@/components/composed/whyChooseUs";

// const services = [
//   {
//     title: 'Loan Originating System',
//     description: 'Manage the entire pre-disbursement process — from enquiry to disbursement — with configurable workflows, user rights, and task assignments. The system logs every action, ensuring regulatory compliance and a comprehensive audit trail.',
//     icon: FileTextIcon,
//     badge: 'Automated Workflows'
//   },
//   {
//     title: 'Loan Management System',
//     description: 'Convert loan applications to active loans, handle disbursements, EMI billing, NACH/PDC processing, and closures. Includes loan-related accounting, customer tracking, and exportable reports for sales, operations, and collections.',
//     icon: ClipboardListIcon,
//     badge: 'End-to-End Lending'
//   },
//   {
//     title: 'GL Accounting',
//     description: 'An integrated accounting system that automates voucher posting for transactions and offers financial reports like cash book, bank reconciliation, trial balance, P&L, and balance sheet.',
//     icon: BarChart2Icon,
//     badge: 'Integrated Finance'
//   },
//   {
//     title: 'Manage Portfolio',
//     description: 'Configure and manage branches, user roles, loan products, documents, charges, and employee hierarchy. Admins can also handle geographical and tax configurations relevant to lending operations.',
//     icon: FolderOpenIcon,
//     badge: 'Centralized Control'
//   },
//   {
//     title: 'Configuration',
//     description: 'Centralized control panel to manage user rights, loan products, policies, templates, and other key settings across the platform, ensuring consistency in LOS and LMS.',
//     icon: SettingsIcon,
//     badge: 'Customizable Settings'
//   },
//   {
//     title: 'Reports',
//     description: 'Generate comprehensive reports with customizable filters, grouping, and formatting options. Access MIS, analytical, and loan-specific reports to gain actionable insights.',
//     icon: PieChartIcon,
//     badge: 'Data-Driven Insights'
//   },
// ];

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <AboutUs />
      <FunctionalBlocks />
      <Features />
      <WhyChooseUs />
      <Testimonials />
      <FAQs />
    </>
  );
}

/**
 * services.map(({ title, description, icon: Icon, badge }, idx) => {
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
 */