export type CTAType = {
  label: string;
  href: string;
};

export type HeroSectionType = {
  cta: CTAType[];
};

export type ImageType = {
  url: string;
};

export type ClientLogosMarqueeType = {
  companyName: string;
  clientLogo: ImageType;
};

export type AboutUsSectionType = {
  content: string;
  image: ImageType;
  cta: CTAType[];
};

export type ModuleLinkType = {
  label: string;
  tagline: string;
  module: {
    documentId: string;
  }
};

export type ModulesSectionType = {
  modulesTagline: string;
  moduleLinks: ModuleLinkType[];
};

export type FeatureType = {
  feature: string;
};

export type FeaturesSectionType = {
  tagline: string;
  feature: FeatureType[];
  cta: CTAType;
};

export type WhyChooseUsCardType = {
  data: number;
  title: string;
  suffix: string;
  tagline: string;
};

export type WhyChooseUsType = {
  tagline: string;
  footer: string;
  whyChooseUsCard: WhyChooseUsCardType[];
};

export type TestimonialType = {
  testimonialDate: string;
  testimonial: string;
  name: string;
  designation: string;
  avatar: ImageType;
};

export type TestimonialsSectionType = {
  heading: string;
  testimonial: TestimonialType[];
};

export type QnA = {
  question: string;
  answer: string;
}

export type FaqsSectionType = {
  heading: string;
  qna: QnA[];
}

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
  faqsSection: FaqsSectionType;
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
  clientLogo: ImageType | null;
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
  image: ImageType;
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

export type ModuleDetailsResponseType = {
  id: number;
  documentId: string;
  title: string;
  module: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  articleBody: string;
  heroImage: ImageType;
};

