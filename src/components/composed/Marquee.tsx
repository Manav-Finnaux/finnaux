import Image from "next/image";
import * as ClientLogo from '../../../public/3Portals.svg';
import * as ClientLogo2 from '../../../public/Clandestine.svg';
import Marquee from "react-fast-marquee";
import Section from "./section";

export default function MarqueeSection() {
  return (
    <>
      {/* MARQUEE - CLIENT LOGOS OR TRUSTED BRANDS */}
      <Section className="w-full flex flex-col items-center overflow-x-hidden space-y-8 relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-56 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-56 after:bg-gradient-to-l after:from-white after:to-transparent">
        {/* Placeholder for marquee component, will be animated */}

        <div className="overflow-x-hidden w-full space-y-8 = my-10">
          <Marquee
            speed={20}
            autoFill
            className="flex whitespace-nowrap font-semibold text-md ">
            <Image src={ClientLogo} alt="Google" className="h-12 w-auto mx-8" />
          </Marquee>

          <Marquee
            speed={20}
            direction="right"
            autoFill
            className="flex whitespace-nowrap font-semibold text-md">
            <Image src={ClientLogo2} alt="Google" className="h-12 w-auto mx-8" />
          </Marquee>
        </div>
      </Section>
    </>
  );
}
