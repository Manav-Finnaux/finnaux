import Features from "@/components/composed/features";
import AboutUs from "@/components/composed/aboutUs";
import FAQs from "@/components/composed/faqs";
import HeroSection from "@/components/composed/Header";
import MarqueeSection from "@/components/composed/Marquee";
import FunctionalBlocks from "@/components/composed/modules";
import Testimonials from "@/components/composed/Testimonials";
import WhyChooseUs from "@/components/composed/whyChooseUs";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <MarqueeSection />

      {/* in teeno k (probably) animation k karan, horizontal overflow aa rha h */}
      <AboutUs />
      <FunctionalBlocks />
      <Features />

      <WhyChooseUs />
      <Testimonials />
      <FAQs />
    </div>
  );
}