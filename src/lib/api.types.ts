export type CTATypes = {
  id: number;
  label: string;
  href: string;
};

export type HeroSectionTypes = {
  id: number;
  heading: string;
  tagline: string;
  cta: CTATypes[];
};

export type ClientLogoTypes = {
  id: number;
  documentId: string;
  url: string;
};

export type ClientLogosMarqueeTypes = {
  id: number;
  companyName: string;
  clientLogo: ClientLogoTypes;
};

export type AboutUsSectionTypes = {
  id: number;
  badge: string;
  content: string;
  cta: CTATypes[];
};

export type ModuleLinkTypes = {
  id: number;
  label: string;
  tagline: string;
  module: {
    id: number;
    documentId: string;
  } | null;
};

export type ModulesSectionTypes = {
  id: number;
  badge: string;
  heading: string;
  modulesTagline: string;
  moduleLinks: ModuleLinkTypes[];
};

export type FeatureTypes = {
  id: number;
  feature: string;
};

export type FeaturesSectionTypes = {
  id: number;
  badge: string;
  heading: string;
  tagline: string;
  feature: FeatureTypes[];
};

export type WhyChooseUsCardTypes = {
  id: number;
  data: number;
  title: string;
  suffix: string;
  tagline: string;
};

export type WhyChooseUsSectionTypes = {
  id: number;
  badge: string;
  heading: string;
  tagline: string;
  footer: string;
  whyChooseUsCard: WhyChooseUsCardTypes[];
};

export type TestimonialTypes = {
  id: number;
  testimonialDate: string;
  testimonial: string;
  name: string;
  designation?: string; // Based on your message truncation
};

export type TestimonialsSectionTypes = {
  id: number;
  badge: string;
  heading: string;
  testimonial: TestimonialTypes[];
};

export type HomePageDataType = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  heroSection: HeroSectionTypes;
  clientLogosMarquee: ClientLogosMarqueeTypes[];
  aboutUsSection: AboutUsSectionTypes;
  modulesSection: ModulesSectionTypes;
  featuresSection: FeaturesSectionTypes;
  whyChooseUsSection: WhyChooseUsSectionTypes;
  testimonialsSection: TestimonialsSectionTypes;
};
