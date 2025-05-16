import { UsersRoundIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import MaxWidthWrapper from "./maxWidthWrapper";
import Section from "./section";
import Text from "./text";
import Heading from "./heading";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AboutUs() {
  return (
    <Section>
      <MaxWidthWrapper className="flex flex-col gap-8 sm:w-3/4 max-w-[640px] md:max-w-[720px] md:gap-14 lg:flex-row lg:max-w-none lg:h-fit lg:gap-16">
        {/* Heading + Paras */}
        <div className="flex flex-col justify-center items-center text-center gap-6 w-fit lg:items-start lg:text-left">

          <Badge variant={'outline'}>
            <UsersRoundIcon color="teal" fill="teal" />
            <Text>About Us</Text>
          </Badge>

          <Text as="p" variant="xl">
            Discover Our Journey in Loan Management Software
          </Text>
          <Heading as="h2">Transforming NBFC Operations with Innovation</Heading>
          <Text>At Finnaux, we are a dedicated team of software professionals committed to revolutionizing loan management for Non-Banking Financial Companies (NBFCs). With over 20 years of expertise in the NBFC sector, our mission is to empower financial institutions with innovative, user-friendly solutions that streamline lending processes and enhance operational efficiency.</Text>

          <div className="flex flex-col gap-4 md:flex-row">
            <Button>
              <Link href={''}>Explore Our Solutions</Link>
            </Button>
            <Button asChild variant={'secondary'}>
              <Link href={''}>Connect with Us</Link>
            </Button>
          </div>
        </div>
        {/* Img */}
        <div className="relative w-full h-56 md:h-96 lg:h-auto rounded-xl">
          <Image src={'/about-us.png'} alt="" fill className="object-cover rounded-xl lg:h-auto" />
        </div>
      </MaxWidthWrapper>
    </Section>
  );
}