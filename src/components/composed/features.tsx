import MaxWidthWrapper from "./maxWidthWrapper"
import Section from "./section"
import { Badge } from "../ui/badge";
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
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
          {
            features.map(({ title, icon: Icon, description }) => {
              return (
                <div key={title} className={" h-auto bg-stone-50 border border-gray-200 p-[5px] rounded-3xl hover:scale-[1.03] transition ease-in-out duration-200 hover:shadow-sm"}>
                  <div className="bg-gradient-to-br from-transparent via-transparent to-teal-100/50 border-gray-200 border rounded-2xl h-full flex flex-col justify-center items-center gap-2 px-4 py-4">
                    <div className="flex gap-4 self-start items-center">
                      <Icon className="size-12" />
                      <Heading as="h3">{title}</Heading>
                    </div>
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