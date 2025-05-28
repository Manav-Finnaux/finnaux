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

export type WhyChooseUsType = {
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
  whyChooseUsSection: WhyChooseUsType;
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

type CompanyLogoType = {
  id: number;
  companyName: string | null;
  clientLogo: ClientLogoType | null;
};

type ThirdPartyAPICardType = {
  id: number;
  heading: string;
  tagline: string;
  companyLogo: CompanyLogoType[];
};

type CollectionTypeCardType = {
  id: number;
  heading: string;
  tagline: string;
  companyLogo: CompanyLogoType[];
};

type CollectionTypesGroupType = {
  id: number;
  heading: string;
  collectionTypeCard: CollectionTypeCardType[];
};

type ThirdPartyAPIsType = {
  id: number;
  thirdPartyAPICards: ThirdPartyAPICardType[];
  collectionTypesGroup: CollectionTypesGroupType;
};

type IntegrationPageFeatureType = {
  id: number;
  listItem: string;
};

type SuiteCardType = {
  id: number;
  heading: string;
  features: IntegrationPageFeatureType[];
};

type VerificationSuiteType = {
  id: number;
  heading: string;
  suiteCards: SuiteCardType[];
};

type PaymentCollectionItemType = {
  id: number;
  level1: string;
  level2: string;
};

type PaymentCollectionCardType = {
  id: number;
  heading: string;
  list: PaymentCollectionItemType[];
};

type PaymentCollectionChannelsType = {
  id: number;
  heading: string;
  cards: PaymentCollectionCardType[];
};

export type IntegrationPageResponseType = {
  id: number;
  documentId: string;
  heading: string;
  tagline: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  thirdPartyAPIs: ThirdPartyAPIsType;
  verificationSuite: VerificationSuiteType;
  paymentCollectionChannels: PaymentCollectionChannelsType;
};

type ModuleReferenceType = {
  id: number;
  documentId: string;
};

type ServiceModuleType = {
  id: number;
  heading: string;
  excerpt: string;
  module: ModuleReferenceType;
};

export type OurServicesResponseType = {
  id: number;
  documentId: string;
  heading: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tagline: string;
  module: ServiceModuleType[];
  whyChooseUs: WhyChooseUsType;
};

type TeamMemberType = {
  id: number;
  name: string;
  designation: string;
  complimentaryText: string;
  image: ClientLogoType | null;
};

type DepartmentType = {
  id: number;
  departmentName: string;
  member: TeamMemberType[];
};

export type OurTeamResponseType = {
  id: number;
  documentId: string;
  heading: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tagline: string;
  membersByDept: DepartmentType[];
};
