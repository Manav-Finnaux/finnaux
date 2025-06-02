import Features from "@/components/composed/features";
import AboutUs from "@/components/composed/about_us";
import FAQs from "@/components/composed/faqs";
import HeroSection from "@/components/composed/header";
import MarqueeSection from "@/components/composed/marquee";
import FunctionalBlocks from "@/components/composed/products_section";
import Testimonials from "@/components/composed/testimonials";
import WhyChooseUs from "@/components/composed/why_choose_us";
import fetchAPI, { HOMEPAGE_API } from "@/lib/api";
import { HomePageDataType } from "@/lib/api.types";

export default async function Home() {
  const data: HomePageDataType = await fetchAPI(HOMEPAGE_API);

  return (
    // AboutUs, FunctionalBlocks & Features overflow
    <div className="">
      <HeroSection data={data.heroSection} />
      <WhyChooseUs data={data.whyChooseUsSection} />
      <MarqueeSection data={data.clientLogosMarquee} />

      <AboutUs data={data.aboutUsSection} />
      <FunctionalBlocks data={data.modulesSection} />
      <Features data={data.featuresSection} />

      <Testimonials data={data.testimonialsSection} />
      <FAQs data={data.faqsSection} />
    </div>
  );
}
