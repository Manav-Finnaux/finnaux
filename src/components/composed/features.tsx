import { cn } from "@/lib/utils"
import MaxWidthWrapper from "./maxWidthWrapper"
import Section from "./section"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge";
import { MonitorCheckIcon, SmartphoneIcon } from "lucide-react";
import { features } from "@/lib/assets/features/featuresIcons";
import Heading from "./heading";
import Text from "./text";


// const features = [
//   {
//     title: 'Seamless API connections with KYC, credit bureaus, and payment gateways.',
//     description: "Connect effortlessly with third-party services like KYC verification, credit bureaus, and payment gateways.",
//     icon: LinkIcon,
//     desktop: true,
//     mobile: true
//   },
//   {
//     title: 'Real-time financial tracking with GL accounting integration.',
//     description: "Maintain accurate, real-time financial records with built-in accounting functionality.",
//     icon: BookIcon,
//     desktop: true,
//     mobile: true
//   },
//   {
//     title: 'Custom loan policies, NPA calculations, and rescheduling',
//     description: "Configure rules and workflows specific to loan products, including NPA calculation and loan re-scheduling.",
//     icon: FileCogIcon,
//     desktop: true,
//     mobile: true
//   },
//   {
//     title: 'Manage portfolios, transactions, and recovery processes',
//     description: "Stay in control with tools for managing loan portfolios, scheduled transactions, closures, waivers, and voucher trails.",
//     icon: Repeat2Icon,
//     desktop: true,
//     mobile: true
//   },
//   {
//     title: 'Asset tracking, legal case management, and recovery tools',
//     description: "Track repossessed assets, manage legal cases, and monitor sales or recoveries.",
//     icon: DollarSignIcon,
//     desktop: true,
//     mobile: true
//   },
//   {
//     title: 'Mobile tools for KYC, FI, and PD for field teams',
//     description: "Enable field teams to perform KYC verification, pre-sales inquiries, field investigation (FI), and personal discussion (PD) via mobile.",
//     icon: IdCardIcon,
//     desktop: false,
//     mobile: true
//   },
//   {
//     title: 'Real-time collection tracking and follow-up tools',
//     description: "Streamline daily collections with real-time reporting and follow-up tracking.",
//     icon: ChartNoAxesCombinedIcon,
//     desktop: false,
//     mobile: true
//   },
//   {
//     title: 'Monitor team performance and enable internal communication',
//     description: "Track field force activity, monitor team performance, and enable internal communication with chat support.",
//     icon: UsersIcon,
//     desktop: false,
//     mobile: true
//   },
// ]
// const features = [
//   {
//     title: 'Seamless API Integration',
//     description: "Connect effortlessly with third-party services like KYC verification, credit bureaus, and payment gateways.",
//     icon: LinkIcon,
//     desktop: true,
//     mobile: true
//   },
//   {
//     title: 'Integrated General Ledger (GL) Accounting',
//     description: "Maintain accurate, real-time financial records with built-in accounting functionality.",
//     icon: BookIcon,
//     desktop: true,
//     mobile: true
//   },
//   {
//     title: 'Customizable Loan Policies',
//     description: "Configure rules and workflows specific to loan products, including NPA calculation and loan re-scheduling.",
//     icon: FileCogIcon,
//     desktop: true,
//     mobile: true
//   },
//   {
//     title: 'Portfolio & Transaction Management',
//     description: "Stay in control with tools for managing loan portfolios, scheduled transactions, closures, waivers, and voucher trails.",
//     icon: Repeat2Icon,
//     desktop: true,
//     mobile: true
//   },
//   {
//     title: 'Legal & Asset Recovery Tools',
//     description: "Track repossessed assets, manage legal cases, and monitor sales or recoveries.",
//     icon: DollarSignIcon,
//     desktop: true,
//     mobile: true
//   },
//   {
//     title: 'KYC, FI, and PD On-the-Go',
//     description: "Enable field teams to perform KYC verification, pre-sales inquiries, field investigation (FI), and personal discussion (PD) via mobile.",
//     icon: IdCardIcon,
//     desktop: false,
//     mobile: true
//   },
//   {
//     title: 'Collection & Follow-up Tools',
//     description: "Streamline daily collections with real-time reporting and follow-up tracking.",
//     icon: ChartNoAxesCombinedIcon,
//     desktop: false,
//     mobile: true
//   },
//   {
//     title: 'Team Performance & Monitoring',
//     description: "Track field force activity, monitor team performance, and enable internal communication with chat support.",
//     icon: UsersIcon,
//     desktop: false,
//     mobile: true
//   },
// ]

export default function Features() {
  return (
    <Section>
      <MaxWidthWrapper className="flex flex-col justify-center items-center gap-10 mx-auto">
        <Badge>
          Features
        </Badge>

        {/* Heading + Para */}
        <div className="flex flex-col gap-4 min-[560px]:text-center max-w-3xl">
          <Heading as="h2">Streamline Your Lending</Heading>
          <Text variant="lg">
            {/* We understand the unique challenges of personal lending. Our platform is purpose-built to help you move faster, stay compliant, and scale smarter. */}
            Finnaux simplifies every step of the lending process, from applications to analytics — all in one powerful platform.
          </Text>
        </div>

        {/* Features grid */}
        <div className="grid gap-4 max-w-[720px] md:max-w-[1080px] sm:grid-cols-2 sm:gap-0 md:grid-cols-3 lg:grid-cols-4">
          {
            features.map(({ title, icon: Icon, desktop, mobile }) => {
              return (
                <div key={title} className={cn("max-w-[360px] min-h-[300px] p-4 space-y-4 flex flex-col justify-evenly items-center gap-4 text-center h-auto",
                  // idx % 2 === 0 && 'sm:border-r md:border-r-0', (idx === 6 || idx === 7) && 'sm:border-b-0', (idx !== 2 && idx !== 5) && 'md:border-r'
                )}>
                  <Icon width={32} height={32} />
                  <div className="flex flex-col gap-3 items-center text-lg font-semibold h-auto">
                    <Heading as="h3">{title}</Heading>
                    <div className="flex gap-2">
                      {desktop && (
                        <Button variant={'outline'}>
                          <MonitorCheckIcon size={64} />
                        </Button>
                      )}
                      {mobile && (
                        <Button variant={'outline'}>
                          <SmartphoneIcon />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </MaxWidthWrapper>
    </Section>
  )
}