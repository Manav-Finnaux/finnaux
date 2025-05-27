import { ArrowRightIcon, UsersRoundIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import Heading from "./heading";
import MaxWidthWrapper from "./maxWidthWrapper";
import Section from "./section";
import Text from "./text";
import { AboutUsSectionTypes } from "@/lib/api.types";
// import { MDXRemote } from 'next-mdx-remote/rsc';`


export default function AboutUs({ data }: { data: AboutUsSectionTypes }) {
  // const aboutUsBody = data.content;
  // const components = {
  //   p: (props: React.ComponentProps<"p">) => <Text as="p" variant="xl" data-aos="fade-up" data-aos-delay="100" className="text-teal-800 font-medium" {...props} />,
  //   h2: (props: React.ComponentProps<"h2">) => <Heading
  //     as="h2"
  //     className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] leading-tight"
  //     data-aos="fade-up"
  //     data-aos-delay="200"
  //     {...props}
  //   />,
  //   span: (props: React.ComponentProps<"span">) => <Text
  //     className="text-gray-700 text-base sm:text-lg"
  //     data-aos="fade-up"
  //     data-aos-delay="300"
  //     {...props}
  //   />
  // }

  return (
    <Section className="py-16 md:py-2">
      <MaxWidthWrapper className="rounded-3xl bg-gradient-to-br from-teal-50/40 to-teal-100/20 border border-teal-200/50 px-6 py-10 sm:px-10 sm:py-14 md:px-14 md:py-16 lg:px-16 lg:py-20 flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">

        {/* Textual Content */}
        <div
          className="flex flex-col gap-6 lg:gap-8 lg:w-1/2"
          data-aos="fade-right"
        >
          <Badge
            variant="outline"
            className="w-fit bg-white border-teal-300 text-teal-700 shadow"
            data-aos="zoom-in"
          >
            <UsersRoundIcon className="w-4 h-4" />
            <Text className="text-sm">{data.badge}</Text>
          </Badge>

          {/* <MDXRemote source={aboutUsBody} components={components} /> */}

          <Text
            as="p"
            variant="xl"
            className="text-teal-800 font-medium"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Discover Our Journey in Loan Management Software
          </Text>

          <Heading
            as="h2"
            className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Transforming <span className="text-teal-600">NBFC Operations</span> with Innovation
          </Heading>

          <Text
            className="text-gray-700 text-base sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            At Finnaux, we’re a dedicated team of software professionals
            revolutionizing loan management for Non-Banking Financial Companies.
            With over 20 years in the NBFC sector, we deliver user-friendly
            solutions that streamline lending and boost efficiency.
          </Text>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              href="/solutions"
              className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 sm:py-4 rounded-lg transition-all duration-300 shadow hover:shadow-md active:scale-95 text-base font-medium"
            >
              Explore Solutions
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border-2 border-teal-600 text-teal-700 hover:bg-teal-50 px-6 py-3 sm:py-4 rounded-lg transition-all duration-300 shadow hover:shadow-md active:scale-95 text-base font-medium"
            >
              Contact Us
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Image */}
        <div
          className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[460px] lg:w-1/2 overflow-hidden rounded-2xl shadow-lg"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <Image
            src="/about-us.png"
            alt="Finnaux team working on loan management software"
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