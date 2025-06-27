import fetchAPI, { CONTACT_DETAIL_API } from "@/lib/api";
import { ContactInfoType, ModuleDetailsResponseType } from "@/lib/api.types";
import { ArrowLeft, ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const MODULE_DETAIL_API = `/modules/${product}?populate[0]=faqs.qna&populate[heroImage][fields][0]=url`;
  const baseUrl = process.env.SERVER_API_BASE_URL; // for appending ahead of images
  const moduleData =
    await fetchAPI<ModuleDetailsResponseType>(MODULE_DETAIL_API);
  const contactDetailsData =
    await fetchAPI<ContactInfoType>(CONTACT_DETAIL_API);

  const components = {
    h2: (props: React.ComponentProps<"h2">) => (
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-teal-700"
        {...props}
      />
    ),
    h3: (props: React.ComponentProps<"h3">) => (
      <h3
        className="text-xl sm:text-2xl lg:text-3xl font-semibold text-teal-700"
        {...props}
      />
    ),
    ol: (props: React.ComponentProps<"ol">) => (
      <ol
        className="list-disc pl-6 font-medium text-gray-700 space-y-2"
        {...props}
      />
    ),
    ul: (props: React.ComponentProps<"ul">) => (
      <ul
        className="list-disc pl-6 font-medium text-gray-700 space-y-2"
        {...props}
      />
    ),
  };

  return (
    <div className="bg-white min-h-screen w-full pt-32 lg:py-36 pb-14">
      {/* Header Section */}
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-28 px-2 sm:px-4">
        <div className="flex flex-col items-center space-y-6 mb-8">
          {/* Back link */}
          <Link
            href={"/products"}
            className="flex items-center gap-2 px-5 py-1 text-sm sm:text-base select-none"
            data-aos="fade-right"
            data-aos-delay="100">
            <ArrowLeft className="w-4 h-4" />
            Back To All Services
          </Link>

          {/* Heading */}
          <h1
            className="text-3xl md:text-4xl lg:text-6xl font-bold pb-10 text-center"
            data-aos="fade-up"
            data-aos-delay="200">
            {/* Loan Originating System */}
            {moduleData.title}
          </h1>
        </div>

        {/* Image */}
        <div
          className="w-full h-36 sm:h-56 md:w-4/5 md:h-96 md:mx-auto lg:max-w-[1024px] relative rounded-lg shadow-lg overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="300">
          <Image
            src={`${baseUrl}${moduleData.heroImage.url}`}
            alt="Loan Originating System"
            className="w-full h-auto object-contain"
            priority
            fill
          />
        </div>
        {/* Content and Contact Card */}
        <div className="mt-14 sm:mt-20 lg:mt-28 flex flex-col lg:flex-row lg:gap-14 lg:space-x-2 rounded-xl max-w-md mx-auto sm:max-w-fit sm:p-6">
          {/* Main content */}
          <div
            className="w-full space-y-6 max-w-3xl text-gray-800 break-words hyphens-auto text-justify"
            data-aos="fade-up"
            data-aos-delay="350">
            <MDXRemote
              components={components}
              source={moduleData.articleBody}
            />
          </div>

          {/* Contact Card - Hidden on smaller screens, visible and positioned on large screens */}
          <div
            className="hidden lg:h-fit lg:flex lg:sticky lg:top-24 lg:right-0 lg:transform lg:translate-x-1/2 lg:-translate-y-1/2 bg-white rounded-xl flex-col gap-2 p-6 shadow-xl w-72 backdrop-blur-sm border border-teal-100/20"
            data-aos="fade-left"
            data-aos-delay="500">
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-semibold text-center text-teal-800 mb-3">
                Connect With Us ?
              </h3>

              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3 text-teal-700 hover:text-teal-800 transition-colors text-sm sm:text-base group cursor-pointer">
                  <MapPin className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform self-start" />
                  <div className="flex flex-col text-md">
                    {contactDetailsData.address.map(({ listItem, id }) => {
                      return <span key={id}>{listItem}</span>;
                    })}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-teal-700 hover:text-teal-800 transition-colors text-sm sm:text-base group cursor-pointer">
                  <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{contactDetailsData.phoneNumber[0].phoneNumber}</span>
                </div>

                <div className="flex items-center gap-3 text-teal-700 hover:text-teal-800 transition-colors text-sm sm:text-base group cursor-pointer">
                  <Mail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{contactDetailsData.email}</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-white rounded-lg py-2 px-4 flex items-center justify-center gap-2 font-medium transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-teal-50 opacity-90 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
