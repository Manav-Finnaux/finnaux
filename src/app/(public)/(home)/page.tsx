import Features from "@/components/composed/features";
import AboutUs from "@/components/composed/aboutUs";
import FAQs from "@/components/composed/faqs";
import HeroSection from "@/components/composed/Header";
import MarqueeSection from "@/components/composed/Marquee";
import FunctionalBlocks from "@/components/composed/modules";
import Testimonials from "@/components/composed/Testimonials";
import WhyChooseUs from "@/components/composed/whyChooseUs";
import fetchAPI, { HOMEPAGE_API } from "@/lib/api";
import { HomePageDataType } from "@/lib/api.types";


export default async function Home() {
  const data: HomePageDataType = await fetchAPI(HOMEPAGE_API);

  return (
    // AboutUs, FunctionalBlocks & Features overflow
    <div className="overflow-x-hidden">
      <HeroSection data={data.heroSection} />
      <MarqueeSection data={data.clientLogosMarquee} />

      <AboutUs data={data.aboutUsSection} />
      <FunctionalBlocks />
      <Features />

      <WhyChooseUs />
      <Testimonials />
      <FAQs />
    </div>
  );
}

