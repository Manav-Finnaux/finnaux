"use client";
import { Building, MessageSquareIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Heading from "./heading";
import { Marquee } from "./magic_ui_marquee";
import Section from "./section";
import Text from "./text";
import { TestimonialsSectionType } from "@/lib/api.types";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

// import Testimonials from "./testing";

export default function Testimonials({
  data,
}: {
  data: TestimonialsSectionType;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const TestimonialCard = ({
    name,
    testimonial,
    designation,
    avatar,
    companyName,
    index,
    rating = 5,
  }: {
    name: string;
    testimonial: string;
    designation: string;
    avatar: { url: string };
    companyName: string;
    index: number;
    rating?: number;
  }) => (
    <div
      key={index}
      className="bg-white border border-gray-200 rounded-2xl shadow-lg w-80 flex flex-col px-4 justify-between py-8 hover:shadow-xl transition-shadow duration-300"
      data-aos="fade-up"
      data-aos-delay={200 + index * 100}
      data-aos-once="true">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r rounded-lg from-teal-400 to-teal-600" />
      <div>
        <div className="bg-teal-50 border border-teal-100 w-fit mx-2 px-2 py-1 text-sm rounded-full mb-4 text-teal-600 font-medium flex items-center gap-1">
          <Building className="w-3 h-3" />
          {companyName}
        </div>

        <p className="text-gray-700 font-medium px-3 leading-relaxed line-clamp-5 break-words hyphens-auto text-justify">
          {testimonial}
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="mt-4 text-sm font-medium text-teal-700 hover:text-teal-800 w-full flex justify-end items-center gap-1 transition-colors"
              data-aos="fade-up"
              data-aos-delay={index * 100 + 200}>
              Read more
              <svg
                xmlns="http:www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-teal-100">
                  <Image
                    src={`${baseUrl}${avatar.url}`}
                    alt={name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <DialogTitle className="text-lg">{name}</DialogTitle>
                  <DialogDescription>{designation}</DialogDescription>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-4 mt-4">
              <div className="bg-teal-50 border border-teal-100 w-fit px-3 py-1 text-sm rounded-full text-teal-600 font-medium inline-flex items-center gap-1">
                <Building className="w-3 h-3 " />
                {companyName}
              </div>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {testimonial}
              </p>

              {rating && (
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">{rating}.0</span>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex items-center mt-6 pt-4 border-t border-gray-200 px-5">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-teal-100 transition-transform duration-300 group-hover:scale-110">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${avatar.url}`}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{designation}</p>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`w-3 h-3 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Section
      className="overflow-hidden space-y-6 py-16 bg-gradient-to-b from-gray-50 to-white"
      id="testimonials">
      <div data-aos="fade-up">
        <Badge className=" bg-teal-50 border border-teal-100 w-fit px-4 py-2 rounded-full mb-4 text-teal-600 font-semibold flex items-center mx-auto gap-2 hover:bg-teal-100 transition-colors">
          <MessageSquareIcon
            size={14}
            className="fill-teal-500 text-teal-500"
          />
          <Text>Client Testimonials</Text>
        </Badge>

        <Heading
          as="h2"
          className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          What Our Clients Say
        </Heading>

        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Don&apos;t just take our word for it. Here&apos;s what our clients
          have to say about their experience.
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden w-full py-10">
          {data.testimonial.length > 4 ? (
            <Marquee
              className="flex items-center [--duration:30s]"
              pauseOnHover>
              <div className="flex py-5 gap-x-4">
                {data.testimonial.map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} index={index} />
                ))}
              </div>
            </Marquee>
          ) : (
            <div className="flex flex-wrap justify-center gap-4 py-5 ">
              {data.testimonial.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} index={index} />
              ))}
            </div>
          )}
        </div>

        {data.testimonial.length > 4 && (
          <>
            <div className="hidden min-[480px]:block absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-white to-transparent  z-10" />
            <div className="hidden min-[480px]:block absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white to-transparent z-10" />
          </>
        )}
      </div>
    </Section>
  );
}
