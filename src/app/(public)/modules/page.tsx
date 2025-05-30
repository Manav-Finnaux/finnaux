import { NumberTicker } from "@/components/composed/number_ticker";
import fetchAPI, { MODULE_COLLECTION_API } from "@/lib/api";
import { OurServicesResponseType } from "@/lib/api.types";
import { cn } from "@/lib/utils";
import { BarChart2Icon, BookOpenIcon, CreditCardIcon, FileTextIcon, SettingsIcon, WrenchIcon } from "lucide-react";
import Link from "next/link";

const ICON_BY_INDEX = [
  FileTextIcon,
  CreditCardIcon,
  BookOpenIcon,
  SettingsIcon,
  WrenchIcon,
  BarChart2Icon,
];

const COLORS_BY_INDEX = ['text-blue-600', 'text-green-600', 'text-lime-600', 'text-yellow-600', 'text-red-600', 'text-teal-600'];
const BG_COLORS_BY_INDEX = ['bg-blue-100', 'bg-green-100', 'bg-lime-100', 'bg-yellow-100', 'bg-red-100', 'bg-teal-100'];

export default async function Page() {
  const data = await fetchAPI<OurServicesResponseType>(MODULE_COLLECTION_API);

  return (
    <div className="bg-gradient-to-r from-teal-200/20 via-green-200/20 to-cyan-200/20 min-h-screen w-full py-32 md:py-32 overflow-hidden">
      {/* Decorative Backgrounds */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100/20 rounded-full blur-3xl -z-10" data-aos="fade-in" data-aos-delay="300" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl -z-10" data-aos="fade-in" data-aos-delay="500" />

      {/* Header */}
      <div className="flex flex-col space-y-4 items-center justify-center mb-16" data-aos="fade-in">
        <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-center px-4 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent" data-aos="fade-in" data-aos-delay="100">
          {data.heading}
        </span>
        <span className="text-lg font-light text-center px-4 max-w-2xl text-gray-600" data-aos="fade-up" data-aos-delay="150">
          {data.tagline}
        </span>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.module.map(({ id, heading, excerpt, module }, index: number) => {
            const Icon = ICON_BY_INDEX[index];

            return (
              <div key={id} className="bg-white max-w-md mx-auto sm:max-w-none rounded-xl shadow-md p-4 py-6 sm:p-8 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay={200 + index * 50}>
                <div className={cn(`w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center`, BG_COLORS_BY_INDEX[index])}>
                  <Icon className={cn(`text-2xl`, COLORS_BY_INDEX[index])} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">{heading}</h3>
                <p className="text-gray-600">{excerpt}</p>
                <Link
                  href={`/modules/${module.documentId}`}
                  className="block"
                >
                  <button
                    className="bg-teal-600 hover:bg-teal-700 text-white shadow-md rounded-lg py-2 px-4 transition-all duration-300">
                    Read more
                  </button>
                </Link>
              </div>
            )
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-24 text-center space-y-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800" data-aos="fade-up" data-aos-delay="100">
            {data.whyChooseUs?.heading}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{data.whyChooseUs?.tagline}</p>

          <div className="max-w-md mx-auto grid grid-cols-1 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.whyChooseUs?.whyChooseUsCard?.map(({ data, id, title, suffix, tagline }, index: number) => (
              <div key={id} className="space-y-2 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300" data-aos="fade-up" data-aos-delay={150 + index * 50}>
                <div className="text-4xl font-bold text-blue-600">
                  <NumberTicker className="text-blue-600" value={data} />
                  {suffix || ""}
                </div>
                <div className="font-semibold text-gray-800">{title}</div>
                {tagline && <p className="text-gray-600">{tagline}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
