const SERVER_URL = process.env.SERVER_API_BASE_URL;
const PUBLIC_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function fetchAPI<T>(endpoint: string, isClientSide: boolean = false): Promise<T> {
  const BASE_URL = isClientSide ? PUBLIC_URL : SERVER_URL;
  // const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL_LOCAL;

  const url = BASE_URL + '/api' + endpoint;

  // console.log(`Fetching data from: ${url}`);
  const response = await fetch(url, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return (await response.json()).data;
}

// export const HOMEPAGE_API = `home-page?populate[heroSection][populate]=cta&populate[clientLogosMarquee][populate][clientLogo][fields][0]=url&populate[aboutUsSection][populate]=cta&populate[modulesSection][populate][moduleLinks][populate][module][fields][0]=documentId&populate[featuresSection][populate]=feature&populate[whyChooseUsSection][populate]=whyChooseUsCard&populate[testimonialsSection][populate][testimonial][populate][avatar][fields][0]=url&populate[faqsSection][populate]=qna`;

export const HOMEPAGE_API = `/home-page?populate[heroSection][populate]=cta&populate[clientLogosMarquee][populate][clientLogo][fields][0]=url&populate[aboutUsSection][populate][image][fields][0]=url&populate[modulesSection][populate][moduleLinks][populate][module][fields][0]=documentId&populate[featuresSection][populate]=feature&populate[whyChooseUsSection][populate]=whyChooseUsCard&populate[testimonialsSection][populate][testimonial][populate][avatar][fields][0]=url&populate[faqsSection][populate]=qna`;

export const ABOUT_US_API = `/about-us?populate[experienceCard][populate]=*&populate[missionAndVisionSection][populate]=ourMission&populate[missionAndVisionSection][populate]=ourVision&populate[ourStorySection][populate][ourStoryTimeline][populate]=timelineItem`;

export const OUR_TEAM_API = `/our-team?populate[membersByDept][populate][member][populate][image][fields][0]=url`;

export const CONTACT_DETAIL_API = `/contact-detail?populate[address][populate]=*&populate[socials][populate]=socialLink&populate[phoneNumber][populate]=*`;

export const MODULE_COLLECTION_API = `/service-page?populate[module][populate][module][fields][0]=documentId&populate[whyChooseUs][populate]=whyChooseUsCard`;

export const INTEGRATIONS_API = `/integration?populate[thirdPartyAPIs][populate][thirdPartyAPICards][populate][companyLogo][populate][clientLogo][fields]=url&populate[verificationSuite][populate][suiteCards][populate]=features&populate[paymentCollectionChannels][populate][cards][populate]=list&populate[thirdPartyAPIs][populate][collectionTypesGroup][populate][collectionTypeCard][populate][companyLogo][populate][clientLogo][fields]=url`;