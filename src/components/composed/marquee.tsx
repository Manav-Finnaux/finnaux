import Image from "next/image";
import { Marquee } from "./magic_ui_marquee";
import Section from "./section";
import { ClientLogosMarqueeType } from "@/lib/api.types";

export default function MarqueeSection({
  data,
}: {
  data: ClientLogosMarqueeType[];
}) {
  const baseUrl = process.env.SERVER_API_BASE_URL!;
  // const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL_LOCAL ?? 'http://192.168.1.5:1337/';
  const half = Math.ceil(data.length / 2);
  const marqueeOne = data.slice(0, half);
  const marqueeTwo = data.slice(half);

  return (
    <>
      <Section className="w-full flex flex-col items-center overflow-x-hidden space-y-8 relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-56 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-56 after:bg-gradient-to-l after:from-white after:to-transparent">
        <div className="overflow-x-hidden w-full space-y-8 = my-10">
          <Marquee
            style={{ animationDuration: "20s" }}
            repeat={40}
            className="flex whitespace-nowrap font-semibold text-md">
            {marqueeOne.map(({ clientLogo, companyName, id }) => {
              return (
                <div key={id} className="w-44 h-16 mx-8 relative">
                  <Image
                    src={clientLogo ? baseUrl + clientLogo.url : ""}
                    alt={companyName}
                    fill
                    className="object-contain"
                  />
                </div>
              );
            })}
          </Marquee>

          <Marquee
            style={{ animationDuration: "20s" }}
            repeat={40}
            reverse
            className="flex whitespace-nowrap font-semibold text-md">
            {marqueeTwo.map(({ clientLogo, companyName, id }) => (
              <div key={id} className="w-44 h-16 mx-8 relative">
                <Image
                  src={clientLogo ? baseUrl + clientLogo.url : ""}
                  alt={companyName}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </Section>
    </>
  );
}
