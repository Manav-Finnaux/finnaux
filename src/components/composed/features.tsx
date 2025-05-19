import MaxWidthWrapper from "./maxWidthWrapper"
import Section from "./section"
import { Badge } from "../ui/badge";
import Heading from "./heading";
import Text from "./text";
import Marquee from "react-fast-marquee";

const features = [
  'Integrated APIs*',
  'Integrated GL Accounting',
  'Product wise Policy',
  'Repossessed Sizing & Sold',
  'Legal Managment',
  'Vouchar Trail',
  'Scheduled Transactions',
  'Managed Portfolio',
  'Loan Re-Scheduling',
  'Definable NPA Calculation',
  'User Chat',
  'Closure/Waiver Approval',
]


export default function Features() {
  return (
    <Section>
      <MaxWidthWrapper className="flex flex-col">
        <div>
          <Badge className="mx-0">
            Features
          </Badge>

          {/* Heading + Para */}
          <div className="flex flex-col gap-4 max-w-3xl">
            <Heading as="h2">Streamline Your Lending</Heading>
            <Text variant="lg">
              {/* We understand the unique challenges of personal lending. Our platform is purpose-built to help you move faster, stay compliant, and scale smarter. */}
              Finnaux simplifies every step of the lending process, from applications to analytics — all in one powerful platform.
            </Text>
          </div>
        </div>

        {/* Features marquee */}

        <Marquee direction="up" style={{ backgroundColor: 'red' }}>
          Hello
        </Marquee>
      </MaxWidthWrapper>
    </Section>
  )
}