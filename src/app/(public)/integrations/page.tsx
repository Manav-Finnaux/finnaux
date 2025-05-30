import {
  ShieldCheck,
  CreditCard,
  FileText,
  Landmark,
  QrCode,
  ScanLine,
  Banknote,
  BadgeCheck,
  FileDigit,
  FileSearch2,
  Home,
  Briefcase,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import fetchAPI, { INTEGRATIONS_API } from "@/lib/api";
import { IntegrationPageResponseType } from "@/lib/api.types";

const featureIcons = {
  "Document Verification": <FileText className="w-6 h-6 text-teal-500" />,
  "Financial Verification": <Landmark className="w-6 h-6 text-teal-500" />,
  "Asset Verification": <Home className="w-6 h-6 text-teal-500" />,
  "Business Verification": <Briefcase className="w-6 h-6 text-teal-500" />,
  "Payment Solutions": <CreditCard className="w-6 h-6 text-emerald-500" />,
  "Collection Methods": <Banknote className="w-6 h-6 text-blue-500" />,
};

export default async function IntegrationsPage() {
  const data = await fetchAPI<IntegrationPageResponseType>(INTEGRATIONS_API);
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  return (
    <div className="bg-gradient-to-b from-[#f5f8fb] to-[#ebf1f7] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/15 to-emerald-500/15 -skew-y-6"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-5 leading-tight">
              {data.heading}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              {data.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Third Party APIs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900">
            Our Technology Partners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.thirdPartyAPIs.thirdPartyAPICards.map((card) => (
              <Card
                key={card.id}
                className="group flex flex-col h-full hover:shadow-xl transition-all duration-300 border border-gray-200 rounded-2xl overflow-hidden bg-white/95 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-2xl text-gray-800">
                    <ShieldCheck className="text-teal-600 w-7 h-7" />
                    {card.heading}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base mt-2">
                    {card.tagline}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div
                    className={`flex flex-wrap justify-center gap-4 pt-4 ${card.companyLogo.length === 1
                      ? "flex"
                      : card.companyLogo.length === 2
                        ? "grid grid-cols-2"
                        : "grid grid-cols-2"
                      }`}>
                    {card.companyLogo.map((logo) => (
                      <div
                        key={logo.id}
                        className={`relative ${card.companyLogo.length === 1
                          ? "w-48 h-24"
                          : "w-full h-20"
                          } p-2 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 overflow-hidden group-hover:scale-105`}>
                        <Image
                          src={baseUrl + (logo?.clientLogo?.url ?? "")}
                          alt={logo.companyName ?? "Company Logo"}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Types */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900">
            {data.thirdPartyAPIs.collectionTypesGroup.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.thirdPartyAPIs.collectionTypesGroup.collectionTypeCard.map(
              (card) => (
                <Card
                  key={card.id}
                  className="group flex flex-col h-full hover:shadow-xl transition-all duration-300 border border-gray-200 rounded-2xl overflow-hidden bg-white/95 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-2xl text-gray-800">
                      {card.heading.includes("UPI") ? (
                        <QrCode className="text-emerald-600 w-7 h-7" />
                      ) : card.heading.includes("eNACH") ? (
                        <FileDigit className="text-teal-600 w-7 h-7" />
                      ) : (
                        <ScanLine className="text-blue-600 w-7 h-7" />
                      )}
                      {card.heading}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base mt-2">
                      {card.tagline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div
                      className={`flex flex-wrap justify-center gap-4 pt-4 ${card.companyLogo.length === 1
                        ? "flex"
                        : card.companyLogo.length === 2
                          ? "grid grid-cols-2"
                          : "grid grid-cols-2"
                        }`}>
                      {card.companyLogo.map((logo) => (
                        <div
                          key={logo.id}
                          className={`relative ${card.companyLogo.length === 1
                            ? "w-48 h-24"
                            : "w-full h-20"
                            } p-2 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 overflow-hidden group-hover:scale-105`}>
                          <Image
                            src={baseUrl + (logo.clientLogo?.url ?? "")}
                            alt={logo.companyName ?? "Company Logo"}
                            fill
                            className="object-contain p-2"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </section>

      {/* Verification Suite */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900">
            {data.verificationSuite.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.verificationSuite.suiteCards.map((card) => (
              <Card
                key={card.id}
                className="h-full hover:shadow-xl transition-all duration-300 border-0 rounded-2xl overflow-hidden bg-gradient-to-b from-gray-50 to-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-gray-800">
                    {featureIcons[card.heading as keyof typeof featureIcons]}
                    {card.heading}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {card.features.map((feature) => (
                      <li
                        key={feature.id}
                        className="flex items-start gap-2 text-gray-600 text-base">
                        <BadgeCheck className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span>{feature.listItem}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Collection Channels */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900">
            {data.paymentCollectionChannels.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.paymentCollectionChannels.cards.map((card) => (
              <Card
                key={card.id}
                className="h-full hover:shadow-xl transition-all duration-300 border-0 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-gray-800">
                    {featureIcons[card.heading as keyof typeof featureIcons]}
                    {card.heading}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {card.list.map((item) => (
                      <li
                        key={item.id}
                        className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-3">
                        <FileSearch2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900">
                            {item.level1}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {item.level2}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to integrate with our ecosystem?
            </h2>
            <p className="text-lg text-teal-100 mb-8">
              Connect your systems with our platform and unlock seamless
              financial operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                className="bg-white text-teal-700 hover:bg-gray-100 px-8 py-3 text-lg rounded-full shadow-md transform transition-transform duration-300 hover:scale-105">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-3 text-lg rounded-full transform transition-transform duration-300 hover:scale-105">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
