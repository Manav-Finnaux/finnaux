import { FeaturesSectionType } from "@/lib/api.types";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Heading from "./heading";
import { Marquee } from "./magic_ui_marquee";
import MaxWidthWrapper from "./max_width_wrapper";
import Section from "./section";
import Text from "./text";
import Link from "next/link";
import { SparklesIcon } from "lucide-react";

export default function Features({ data }: { data: FeaturesSectionType }) {
  return (
    <Section
      id="features"
      style={{
        background:
          "linear-gradient(230deg, rgb(153, 221, 214) -13.07%, rgb(255, 255, 255) 55%)",
      }}
      className="bg-left md:bg-no-repeat md:bg-left-bottom md:bg-contain relative pt-[1px]">
      <MaxWidthWrapper className="flex flex-col gap-14  md:flex-row mt-20">
        <div className="flex flex-col gap-8 md:w-1/2  z-30 self-center">
          <Badge
            className="mx-0 border font-semibold bg-teal-50 text-teal-600 p-2 rounded-full mb-4 px-4 py-2 w-fit"
            data-aos="fade-up"
            data-aos-delay="100">
            <SparklesIcon className="mr-2 w-4 h-4" />
            <Text>Features</Text>
          </Badge>

          {/* Heading + Para */}
          <div className="flex flex-col gap-6 max-w-3xl">
            {" "}
            <Heading
              as="h2"
              className="text-4xl md:text-5xl lg:text-6xl leading-tight"
              data-aos="fade-up"
              data-aos-delay="150">
              <span className="text-teal-600">Streamline</span> Your Lending
              Operations
            </Heading>
            <Text
              variant="lg"
              className="text-gray-700"
              data-aos="fade-up"
              data-aos-delay="200">
              Finnaux simplifies every step of the lending process, from
              applications to analytics — all in one powerful platform.
            </Text>
          </div>

          <Link href={"/contact"}>
            <Button className="w-fit">Get Started</Button>
          </Link>
        </div>

        {/* Features marquee */}
        <div className="h-[360px] sm:h-[480px]  z-30 overflow-hidden w-full mx-2 md:w-1/2 flex flex-col md:mx-auto">
          <Marquee vertical className="p-0 lg:w-5/6 lg:ml-auto">
            {data.feature.map(({ feature }, idx) => (
              <div
                key={feature}
                className="p-4 sm:p-6 sm:px-16 md:p-6 md:text-lg border-2 rounded-xl flex gap-8 justify-between items-center shadow-[inset_0px_20px_207px_10px_rgba(252,_252,_252,_0.6)]">
                <div>{feature}</div>
                <Badge className="mx-0 bg-teal-50">
                  {idx < 9 ? `0${idx + 1}` : idx + 1}
                </Badge>
              </div>
            ))}
          </Marquee>
        </div>
      </MaxWidthWrapper>

      <div className="w-full absolute inset-0 z-20 overflow-visible">
        <div className="abc-mAnAv-divOne"></div>
        <div className="abc-mAnAv-divTwo"></div>
        <div className="abc-mAnAv-divThree"></div>
      </div>
    </Section>
  );
}
