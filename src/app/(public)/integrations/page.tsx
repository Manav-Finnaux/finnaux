import { CardBody, CardContainer } from "@/components/ui/3d_card";
import {
  Banknote,
  Cpu,
  Fingerprint,
  MessageSquareDot,
  ScanLine,
  ShieldCheck,
  Verified,
  Workflow,
} from "lucide-react";
import Section from "@/components/composed/section";
import Image from "next/image";
import fetchAPI, { INTEGRATIONS_API } from "@/lib/api";
import { IntegrationPageResponseType } from "@/lib/api.types";

const ICONS_BY_INDEX = [Verified, Fingerprint, ScanLine, ShieldCheck, Cpu, MessageSquareDot];
const COLORS_BY_INDEX = [
  'blue',
  'purple',
  'green',
  'amber',
  'cyan',
  'pink'
];

export default async function TechnologyPartners() {
  const data = await fetchAPI<IntegrationPageResponseType>(INTEGRATIONS_API);
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  return (
    <Section
      variant="top"
      className="bg-gradient-to-br from-teal-50/70 via-green-50/70 to-cyan-50/70 w-full min-h-screen">
      {/* Hero Section */}
      <div
        className="max-w-7xl mx-auto px-6 text-center mb-16"
        data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
          {data.heading}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {data.tagline}
        </p>
      </div>

      {/* Collection Types Section */}
      <div className="max-w-7xl mx-auto px-6 mb-18">
        <div className="bg-white/70 rounded-xl shadow-inner p-6 mb-8 border border-gray-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-4 ">
            <Workflow className="text-teal-400 w-8 h-8" />
            {data.thirdPartyAPIs.collectionTypesGroup.heading}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.thirdPartyAPIs.collectionTypesGroup.collectionTypeCard.map(({ companyLogo, heading, tagline }, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
                <h4 className="text-md font-semibold text-xl flex items-center justify-center text-gray-800 mb-2">
                  {heading}
                </h4>
                <p className="  text-gray-800 mb-3 text-sm flex items-center justify-center">
                  {tagline}
                </p>
                <div className="grid sm:grid-cols-2 gap-3 max-w-sm mx-auto">
                  {companyLogo.map((partner, i) => (
                    <div key={i} className="bg-gray-50 border-gray-200 border rounded-lg p-3 flex items-center justify-center relative h-16">
                      <Image
                        src={partner.clientLogo ? `${baseUrl}${partner.clientLogo.url}` : ''}
                        alt={partner.companyName ? partner.companyName : ''}
                        className="object-contain"
                        fill
                        sizes="(max-width: 120px) 100vw, 120px"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integration Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {data.thirdPartyAPIs.thirdPartyAPICards.map(({ companyLogo, heading, tagline }, index) => {
          const Icon = ICONS_BY_INDEX[index];
          return (
            <CardContainer
              key={index}
              className="w-full h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}>
              <CardBody className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                <div className="p-6 flex-1 text-center">
                  <div className="flex items-center justify-center gap-4 mb-5">
                    <Icon className={`w-8 h-8 text-${COLORS_BY_INDEX[index]}-600`} />
                    <h2 className="text-2xl font-bold text-gray-800">
                      {heading}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-6">{tagline}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-sm mx-auto">
                    {companyLogo.map(({ clientLogo, companyName }, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 border-gray-200 border rounded-lg p-3 flex items-center justify-center relative h-16 max-w-sm">
                        <Image
                          src={clientLogo ? baseUrl + clientLogo?.url : ''}
                          alt={companyName ? companyName : ''}
                          className="object-contain"
                          fill
                          sizes="(max-width: 120px) 100vw, 120px"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          )
        })}
      </div>

      {/* Verification Services */}
      <div className="max-w-7xl mx-auto px-6 mb-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
          {data.verificationSuite.heading}
        </h2>
        <div className="max-w-md mx-auto sm:max-w-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.verificationSuite.suiteCards.map(({ features, heading }, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {heading}
              </h3>
              <ul className="space-y-2">
                {features.map(({ listItem }, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-4 h-4 text-teal-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">{listItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Payment & Collection */}
      <div className="max-w-7xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
          {data.paymentCollectionChannels.heading}
        </h2>
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 sm:grid-cols-2 max-w-md mx-auto sm:max-w-none">
          <div className="p-6 sm:p-8 md:p-10 border-b sm:border-b-0 sm:border-r border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
              <Banknote className="w-6 h-6 text-green-500" />
              {data.paymentCollectionChannels.cards[0].heading}
            </h3>
            <ul className="space-y-4">
              {
                data.paymentCollectionChannels.cards[0].list.map(({ level1, level2 }, idx) => {
                  return (
                    <li key={idx} className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-4 hidden min-[320px]:block">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {level1}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {level2}
                        </p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div className="p-6 sm:p-8 md:p-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
              <ScanLine className="w-6 h-6 text-blue-500" />
              {data.paymentCollectionChannels.cards[1].heading}
            </h3>
            <ul className="space-y-4">
              {
                data.paymentCollectionChannels.cards[1].list.map(({ level1, level2 }, idx) => {
                  return (
                    <li className="flex items-start" key={idx}>
                      <div className="bg-blue-100 p-2 rounded-full mr-4 hidden min-[320px]:block">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {level1}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {level2}
                        </p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
