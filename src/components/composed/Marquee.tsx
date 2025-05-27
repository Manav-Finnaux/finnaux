import Image from "next/image";
// import Marquee from "react-fast-marquee";
import { Marquee } from "./magic-ui-marquee";
import Section from "./section";

export default function MarqueeSection() {
  return (
    <>
      <Section className="w-full flex flex-col items-center overflow-x-hidden space-y-8 relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-56 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-56 after:bg-gradient-to-l after:from-white after:to-transparent">
        <div className="overflow-x-hidden w-full space-y-8 = my-10">
          <Marquee
            style={{ animationDuration: "10s" }}
            repeat={40}
            className="flex whitespace-nowrap font-semibold text-md ">
            <div className="w-44 h-16 mx-8 relative">
              <Image src={"/3Portals.svg"} alt="Google" fill />
            </div>
          </Marquee>

          <Marquee
            style={{ animationDuration: "10s" }}
            repeat={40}
            reverse
            className="flex whitespace-nowrap font-semibold text-md">
            <div className="w-44 h-16 mx-8 relative">
              <Image src={"/Clandestine.svg"} alt="Google" fill />
            </div>
          </Marquee>
        </div>
      </Section>
    </>
  );
}
