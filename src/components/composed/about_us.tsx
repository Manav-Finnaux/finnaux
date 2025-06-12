import { ArrowRightIcon, UsersRoundIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import MaxWidthWrapper from "./max_width_wrapper";
import Section from "./section";
import Text from "./text";
import { AboutUsSectionType } from "@/lib/api.types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Heading from "./heading";

export default function AboutUs({ data }: { data: AboutUsSectionType }) {
  const baseUrl = process.env.SERVER_API_BASE_URL!;

  return (
    <Section className="md:py-2">
      <MaxWidthWrapper className="rounded-3xl bg-gradient-to-br from-teal-50/40 to-teal-100/20 border border-teal-200/50 px-6 py-10 sm:px-10 sm:py-14 md:px-14 md:py-16 lg:px-16 lg:py-20 flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
        {/* Textual Content */}
        <div
          className="flex flex-col gap-6 lg:gap-8 lg:w-1/2"
          data-aos="fade-up">
          <Badge
            variant="outline"
            className="w-fit bg-white border-teal-300 text-teal-700 shadow"
            data-aos="zoom-in">
            <UsersRoundIcon className="w-4 h-4" />
            <Text className="text-sm">About Us</Text>
          </Badge>

          <Text
            as="p"
            variant="xl"
            className="text-teal-800 font-medium"
            data-aos="fade-up"
            data-aos-delay="100">
            Discover Our Journey in Loan Management Software
          </Text>

          <Heading
            as="h2"
            className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] leading-tight"
            data-aos="fade-up"
            data-aos-delay="200">
            Transforming <span className="text-teal-600">NBFC Operations</span>{" "}
            with Innovation
          </Heading>

          <Text
            className="text-gray-700 text-justify text-base sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="300">
            {data.content}
          </Text>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2"
            data-aos="fade-up"
            data-aos-delay="400">
            {data.cta.map(({ href, label }, idx) => {
              const primary = idx === 1;
              return (
                <Link
                  key={idx}
                  href={href}
                  className={cn(
                    "flex items-center justify-center gap-2 px-6 py-3 sm:py-4 rounded-lg transition-all duration-300 shadow hover:shadow-md active:scale-95 text-base font-medium",
                    primary
                      ? "border-2 border-teal-600 text-teal-700 hover:bg-teal-50"
                      : "bg-teal-600 hover:bg-teal-700 text-white"
                  )}>
                  {label}
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Image */}
        <div
          className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[460px] lg:w-1/2 overflow-hidden rounded-2xl shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200">
          <Image
            src={baseUrl + data.image.url}
            alt="Finnaux team working"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/10 to-transparent" />
        </div>
      </MaxWidthWrapper>
    </Section>
  );
}
