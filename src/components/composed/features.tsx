import { cn } from "@/lib/utils"
import MaxWidthWrapper from "./maxWidthWrapper"
import Section from "./section"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge";
import { MonitorCheckIcon, SmartphoneIcon } from "lucide-react";
import { features } from "@/lib/assets/features/featuresIcons";
import Heading from "./heading";
import Text from "./text";


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
            features.map(({ title, icon: Icon, description }) => {
              return (
                <div key={title} className={cn("max-w-[360px] min-h-[300px] p-4 space-y-4 flex flex-col justify-evenly items-center gap-4 text-center h-auto"
                )}>
                  <Icon width={32} height={32} />
                  <div className="flex flex-col gap-3 items-center h-auto">
                    <Heading as="h3" className="text-lg font-semibold">{title}</Heading>
                    <Text>
                      {description}
                    </Text>
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