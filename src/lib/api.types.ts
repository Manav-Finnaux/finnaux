export type CTAType = {
  id: number;
  label: string;
  href: string;
};

export type HeroSectionType = {
  id: number;
  heading: string;
  tagline: string;
  cta: CTAType[];
};

export type ClientLogoType = {
  id: number;
  documentId: string;
  url: string;
};

export type ClientLogosMarqueeType = {
  id: number;
  companyName: string;
  clientLogo: ClientLogoType;
};

export type AboutUsSectionType = {
  id: number;
  badge: string;
  content: string;
  cta: CTAType[];
};

export type ModuleLinkType = {
  id: number;
  label: string;
  tagline: string;
  module: {
    id: number;
    documentId: string;
  } | null;
};

export type ModulesSectionType = {
  id: number;
  badge: string;
  heading: string;
  modulesTagline: string;
  moduleLinks: ModuleLinkType[];
};

export type FeatureType = {
  id: number;
  feature: string;
};

export type FeaturesSectionType = {
  id: number;
  badge: string;
  heading: string;
  tagline: string;
  feature: FeatureType[];
};

export type WhyChooseUsCardType = {
  id: number;
  data: number;
  title: string;
  suffix: string;
  tagline: string;
};

export type WhyChooseUsSectionType = {
  id: number;
  badge: string;
  heading: string;
  tagline: string;
  footer: string;
  whyChooseUsCard: WhyChooseUsCardType[];
};

export type TestimonialType = {
  id: number;
  testimonialDate: string;
  testimonial: string;
  name: string;
  designation?: string; // Based on your message truncation
};

export type TestimonialsSectionType = {
  id: number;
  badge: string;
  heading: string;
  testimonial: TestimonialType[];
};

export type HomePageDataType = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  heroSection: HeroSectionType;
  clientLogosMarquee: ClientLogosMarqueeType[];
  aboutUsSection: AboutUsSectionType;
  modulesSection: ModulesSectionType;
  featuresSection: FeaturesSectionType;
  whyChooseUsSection: WhyChooseUsSectionType;
  testimonialsSection: TestimonialsSectionType;
};

export type AddressType = {
  id: number;
  listItem: string;
}

export type SocialLinkType = {
  id: number;
  label: string;
  href: string;
};

export type SocialType = {
  id: number;
  socialLink: SocialLinkType[];
};

export type PhoneNumberType = {
  id: number;
  phoneNumber: string;
  type: 'Whatsapp' | 'Call' | string;
}

export type ContactInfoType = {
  id: number;
  documentId: string;
  email: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  publishedAt: string; // ISO date string
  address: AddressType[];
  socials: SocialType;
  phoneNumber: PhoneNumberType[];
};
