import { Clock, Target, Eye, BookOpen } from "lucide-react";
import fetchAPI, { ABOUT_US_API } from "@/lib/api";
import { Timeline } from "@/components/ui/timeline";

interface TimelineItem {
  id: number;
  title: string;
  contentHeading: string;
  contentBody: string;
}

interface AboutUsData {
  id: number;
  heading: string;
  tagline: string;
  experienceCard: {
    yearsOfExperience: number;
    followUpText: string;
  };
  missionAndVisionSection: {
    heading: string;
    para1: string;
    para2: string;
    ourMission: {
      heading: string;
      para1: string;
    };
    ourVision: {
      heading: string;
      para1: string;
    };
  };
  ourStorySection: {
    heading: string;
    tagline: string;
    ourStoryTimeline: {
      timelineItem: TimelineItem[];
    };
  };
}

export default async function AboutPage() {
  const data = await fetchAPI<AboutUsData>(ABOUT_US_API);

  const timelineData = data.ourStorySection.ourStoryTimeline.timelineItem.map(
    (item) => ({
      title: item.title,
      content: (
        <div className="text-base text-muted-foreground leading-relaxed">
          <h3 className="text-lg font-semibold mb-1">{item.contentHeading}</h3>
          <p>{item.contentBody}</p>
        </div>
      ),
    })
  );

  return (
    <div className="bg-gradient-to-b from-[#f5f8fb] to-[#ebf1f7] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/15 to-emerald-500/15 -skew-y-6"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div data-aos="fade-up" className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-5 leading-tight">
              {data.heading}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              {data.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Card */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div
            data-aos="fade-up"
            className="max-w-2xl mx-auto text-center bg-gradient-to-r from-teal-50 to-emerald-50 p-8 rounded-2xl shadow-sm">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Clock className="w-10 h-10 text-teal-600" />
              <h2 className="text-5xl font-bold text-gray-900">
                {data.experienceCard.yearsOfExperience}+
              </h2>
            </div>
            <p className="text-lg text-gray-700">
              {data.experienceCard.followUpText}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div
            data-aos="fade-up"
            className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {data.missionAndVisionSection.heading}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {data.missionAndVisionSection.para1}
            </p>
            <p className="text-lg text-gray-700">
              {data.missionAndVisionSection.para2}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div
              data-aos="fade-right"
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-8 h-8 text-teal-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  {data.missionAndVisionSection.ourMission.heading}
                </h3>
              </div>
              <p className="text-gray-700">
                {data.missionAndVisionSection.ourMission.para1}
              </p>
            </div>

            {/* Vision Card */}
            <div
              data-aos="fade-left"
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-6">
                <Eye className="w-8 h-8 text-emerald-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  {data.missionAndVisionSection.ourVision.heading}
                </h3>
              </div>
              <p className="text-gray-700">
                {data.missionAndVisionSection.ourVision.para1}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <Timeline data={timelineData} />
    </div>
  );
}
