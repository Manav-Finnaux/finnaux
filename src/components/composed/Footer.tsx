"use client";

import 'aos/dist/aos.css';
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Heading from "./heading";
import MaxWidthWrapper from "./maxWidthWrapper";
import Text from "./text";

const LINKS = [
  {
    colHeading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Solutions", href: "#solutions" },
      { label: "Pricing", href: "#pricing" },
      { label: "Demo", href: "#demo" },
    ],
  },
  {
    colHeading: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    colHeading: "Resources",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "Guides", href: "#guides" },
      { label: "Support", href: "#support" },
      { label: "API Status", href: "#status" },
    ],
  },
];

const LETTERS = ['F', 'I', 'N', 'N', 'A', 'U', 'X'];

export default function Footer() {


  return (

    <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white rounded-3xl p-[1px] mx-4 sm:mx-8 shadow-2xl relative overflow-hidden group">
      {/* Animated gradient background - THIS IS THE NEW PART */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="animate-subtle-gradient absolute inset-0 opacity-20 bg-blue-300" />
      </div> */}

      <MaxWidthWrapper className="relative p-4 sm:p-10 pt-8 md:p-14 md:pt-10 lg:p-24 lg:pt-20 backdrop-blur-sm">
        {/* Enhanced CTA Section */}
        <div
          className="text-center pb-12 space-y-6 border-b border-b-stone-400/30"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Heading as="h2" className="bg-gradient-to-r from-white via-teal-300 to-cyan-200 bg-clip-text text-transparent">
            <span
              className="block min-[445px]:inline hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              Transform Your Lending.
            </span>{" "}
            <span
              className="block min-[445px]:inline hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Elevate Your Growth.
            </span>
          </Heading>

          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="relative"
          >
            <Text as="p" className="text-stone-300 max-w-2xl mx-auto relative">
              Join forward-thinking NBFCs revolutionizing loan management with our
              intuitive, powerful platform.
            </Text>
          </div>

          <div
            className="inline-block hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Button
              className="max-w-44 bg-gradient-to-r from-cyan-400 to-teal-500 hover:from-cyan-500 hover:to-teal-600 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <span className="drop-shadow-md">Get Started</span>
            </Button>
          </div>
        </div>

        {/* Rest of the footer remains exactly the same */}
        <footer
          className="pt-16 flex flex-col gap-6 sm:flex-row sm:justify-between"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="space-y-4" data-aos="fade-right" data-aos-delay="500">
            <div className="w-32 h-14 relative group hover:scale-105 transition-transform duration-300">
              <Image
                src={"/logo-finnaux.png"}
                alt="Finnaux Logo"
                fill
                className="drop-shadow-lg object-contain object-left"
              />
            </div>

            <Text as="p" className="text-sm w-3/4 text-stone-300 leading-relaxed">
              End-to-end software for loan origination, underwriting, customer
              engagement, and compliance.
            </Text>

            <div className="flex gap-4 pt-2">
              {['twitter', 'linkedin', 'github'].map((social, index) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="text-stone-400 hover:text-teal-400 transition-colors duration-300"
                  data-aos="fade-up"
                  data-aos-delay={600 + index * 100}
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current rounded-full hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="sm:flex sm:gap-6 md:gap-10 lg:gap-20">
            {LINKS.map(({ colHeading, links }, idx) => (
              <ul
                key={colHeading}
                data-aos="fade-up"
                data-aos-delay={500 + idx * 150}
              >
                <Text as="p" className="font-medium mb-2 text-teal-300">
                  {colHeading}
                </Text>
                <div className="sm:flex sm:flex-col sm:gap-2">
                  {links.map(({ label, href }, linkIdx) => (
                    <Link
                      href={href}
                      key={label}
                      className="text-stone-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      data-aos="fade-up"
                      data-aos-delay={600 + idx * 150 + linkIdx * 50}
                    >
                      <li>{label}</li>
                    </Link>
                  ))}
                </div>
              </ul>
            ))}
          </div>
        </footer>
      </MaxWidthWrapper>

      {/* FINNAUX letters - kept exactly the same as requested */}
      <div className="flex justify-between text-white/5 text-5xl min-[400px]:text-[16vw] font-bold leading-none select-none -m-2 -mb-4 mt-0 sm:-m-6 sm:-mb-8 md:-mb-10 lg:-mb-14">
        {LETTERS.map((letter, index) => (
          <Text
            as="p"
            key={index}
            className="hover:text-white/10 transition-colors duration-300 cursor-default hover:scale-105 transform"
            data-aos="fade-up"
            data-aos-delay={700 + index * 100}
            data-aos-anchor-placement="top-bottom"
          >
            {letter}
          </Text>
        ))}
      </div>

      <div
        className="text-center text-stone-500 text-xs pb-4 pt-2"
        data-aos="fade"
        data-aos-delay="1400"
      >
      </div>
    </div>
  );
}