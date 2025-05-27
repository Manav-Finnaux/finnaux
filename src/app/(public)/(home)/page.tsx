import Features from "@/components/composed/features";
import AboutUs from "@/components/composed/aboutUs";
import FAQs from "@/components/composed/faqs";
import HeroSection from "@/components/composed/Header";
import MarqueeSection from "@/components/composed/Marquee";
import FunctionalBlocks from "@/components/composed/modules";
import Testimonials from "@/components/composed/Testimonials";
import WhyChooseUs from "@/components/composed/whyChooseUs";


export default async function Home() {

  return (
    // AboutUs, FunctionalBlocks & Features overflow
    <div className="overflow-x-hidden">
      <HeroSection />
      <MarqueeSection />

      <AboutUs />
      <FunctionalBlocks />
      <Features />

      <WhyChooseUs />
      <Testimonials />
      <FAQs />
    </div>
  );
}