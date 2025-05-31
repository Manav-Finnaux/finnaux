import Image from "next/image";
import { Marquee } from "./magic_ui_marquee";
import { ClientLogosMarqueeType } from "@/lib/api.types";

export default function MarqueeSection({ data }: { data: ClientLogosMarqueeType[] }) {
  const firstRow = data.slice(0, data.length / 2);
  const secondRow = data.slice(data.length / 2);
  const baseUrl = process.env.SERVER_API_BASE_URL!;

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-10 my-14">
      <Marquee className="[--duration:60s]">
        {firstRow.map(({ clientLogo, companyName }, idx) => (
          <div key={idx} className="w-44 h-16 mx-8 relative">
            <Image
              src={
                baseUrl + clientLogo.url
              }
              alt={companyName}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:60s]">
        {secondRow.map(({ clientLogo, companyName }, idx) => (
          <div key={idx} className="w-44 h-16 mx-8 relative">
            <Image
              src={
                baseUrl + clientLogo.url
              }
              alt={companyName}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
