import Image from "next/image";
import { Button } from "../ui/button";
import Heading from "./heading";
import Text from "./text";
import Link from "next/link";
import MaxWidthWrapper from "./maxWidthWrapper";

const LINKS = [
  {
    colHeading: "Column 1",
    links: [
      {
        label: "Link2",
        href: "",
      },
      {
        label: "Link3",
        href: "",
      },
      {
        label: "Link1",
        href: "",
      },
    ],
  },
  {
    colHeading: "Column 2",
    links: [
      {
        label: "Link2",
        href: "",
      },
      {
        label: "Link3",
        href: "",
      },
      {
        label: "Link1",
        href: "",
      },
    ],
  },
  {
    colHeading: "Column 3",
    links: [
      {
        label: "Link2",
        href: "",
      },
      {
        label: "Link3",
        href: "",
      },
      {
        label: "Link1",
        href: "",
      },
    ],
  },
  // {
  //   colHeading: 'Column 1',
  //   links: [
  //     {
  //       label: 'Link2',
  //       href: '',
  //     },
  //     {
  //       label: 'Link3',
  //       href: '',
  //     },
  //     {
  //       label: 'Link1',
  //       href: '',
  //     },
  //   ],
  // },
];

export default function Footer() {
  return (
    <div className="bg-stone-900 text-white rounded-3xl p-[1px] mx-4 sm:mx-8">
      <MaxWidthWrapper className="p-4 sm:p-10 pt-8 md:p-14 md:pt-10 lg:p-24 lg:pt-20">
        {/* CTA */}
        <div className="text-center pb-12 space-y-6 border-b border-b-stone-400">
          <Heading as="h2">
            <span className="block min-[445px]:inline">Simplify Lending.</span>{" "}
            <span className="block min-[445px]:inline">Maximize Growth.</span>
          </Heading>
          <Text as="p" className="text-stone-400">
            Join the NBFCs modernizing their loan management with our powerful,
            easy-to-use platform.
          </Text>
          <Button
            className="max-w-44"
            style={{ background: "none", backgroundColor: "#20a9a1" }}>
            Schedule a Free Demo
          </Button>
        </div>

        {/* Footer */}
        <footer className="pt-16 flex flex-col gap-6 sm:flex-row sm:justify-between">
          <div className="space-y-4">
            {/* Logo */}
            <div className="w-32 h-14 relative">
              <Image src={"/logo-finnaux.png"} alt="" fill />
            </div>
            <Text as="p" className="text-sm w-3/4">
              End-to-end software for loan origination, underwriting, customer
              engagement, and compliance.
            </Text>
          </div>

          <div className="sm:flex sm:gap-6 md:gap-10 lg:gap-20">
            {/* links */}
            {LINKS.map(({ colHeading, links }) => (
              <ul key={colHeading}>
                <Text as="p" className="font-medium mb-2">
                  {colHeading}
                </Text>
                <div className="sm:flex sm:flex-col sm:gap-2">
                  {links.map(({ label, href }) => (
                    <Link href={href} key={label} className="text-stone-300">
                      <li>{label}</li>
                    </Link>
                  ))}
                </div>
              </ul>
            ))}
          </div>
        </footer>
      </MaxWidthWrapper>

      {/* Company Name BIGGGGG */}
      <div className="flex justify-between text-white/5 text-5xl min-[400px]:text-[16vw] font-bold leading-none select-none -m-2 -mb-4 mt-0 sm:-m-6 sm:-mb-8 md:-mb-10 lg:-mb-14">
        <Text as="p">F</Text>
        <Text as="p">I</Text>
        <Text as="p">N</Text>
        <Text as="p">N</Text>
        <Text as="p">A</Text>
        <Text as="p">U</Text>
        <Text as="p">X</Text>
      </div>
    </div>
  );
}
