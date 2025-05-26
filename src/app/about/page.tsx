"use client";

import Image from "next/image";
import MissionImage from "@/lib/assets/features/mission.png";
import VisionImage from "@/lib/assets/features/leadership.png";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Timeline } from "@/components/ui/timeline";
import fetchAPI  from "@/lib/api";

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
    ourMission: {
      heading: string;
      para1: string;
      para2: string;
    };
    ourVision: {
      heading: string;
      para1: string;
      para2: string;
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

export default function AboutUs() {
  const [data, setData] = useState<AboutUsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 100,
    });

    const fetchData = async () => {
      try {
        const api = "/api/about-us?populate[experienceCard][populate]=*&populate[missionAndVisionSection][populate]=ourMission&populate[missionAndVisionSection][populate]=ourVision&populate[ourStorySection][populate][ourStoryTimeline][populate]=timelineItem";
        const response = await fetchAPI<{ data: AboutUsData }>(api);
        setData(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error: {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        No data available
      </div>
    );
  }

  // Transform timeline data for the Timeline component
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
    <>
      {/* Company Overview Section */}
      <div className="bg-gradient-to-r from-teal-100/70 via-green-100/70 to-cyan-100/70 min-h-screen w-full py-20 md:py-32 lg:py-40 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-center flex-col space-y-6 py-12">
            <h1
              className="font-medium text-4xl sm:text-5xl lg:text-6xl text-center sm:text-left"
              data-aos="fade-up"
              data-aos-delay="100">
              {data.heading}
            </h1>
            <h3
              className="font-medium text-lg sm:text-xl w-full md:w-3/4 lg:w-1/2 text-center sm:text-left mx-auto sm:mx-0"
              data-aos="fade-up"
              data-aos-delay="200">
              {data.tagline}
            </h3>
          </div>
        </div>
      </div>

      {/* Main Content Card & Experience Card Container */}
      <div className="relative my-12 md:my-24 lg:my-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Experience Card */}
        <div
          className="hidden md:flex bg-gradient-to-b from-teal-100/80 to-teal-50 border-teal-300/60 border rounded-xl h-72 lg:h-80 w-full max-w-[20rem] lg:max-w-[28rem] absolute shadow-xl shadow-teal-100/60 right-4 lg:right-20 -top-40 lg:-top-60 flex-col justify-evenly p-4 lg:p-6 z-10"
          data-aos="fade-left"
          data-aos-delay="300">
          <h1 className="bg-gradient-to-b from-cyan-400 to-teal-300 px-4 text-8xl lg:text-9xl text-transparent bg-clip-text text-left">
            {data.experienceCard.yearsOfExperience}
          </h1>
          <div className="flex flex-row justify-between items-start gap-2">
            <div className="rounded-full h-12 w-20 lg:h-14 lg:w-24 bg-white border-2 border-black mx-4 lg:mx-8"></div>
            <div className="text-left pr-2 text-sm lg:text-base flex-1">
              {data.experienceCard.followUpText}
            </div>
          </div>
        </div>

        {/* Main Card Content */}
        <div
          className="bg-gradient-to-r from-white/60 to-white/50 border-cyan-300 border rounded-2xl p-6 pt-40 md:pt-10 lg:pt-4"
          data-aos="fade-up"
          data-aos-delay="400">
          {/* Mission Statement */}
          <div
            className="ml-0 md:ml-24 mt-0 md:mt-20 mb-8 md:mb-16 w-full max-w-3xl"
            data-aos="fade-right"
            data-aos-delay="500">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug">
              {data.missionAndVisionSection.heading}
            </h1>
          </div>

          {/* Mission and Vision Sections */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-24 px-2 md:px-6 pb-6">
            <div
              className="flex-1 text-base sm:text-lg font-medium space-y-4 md:space-y-6 px-2 md:px-8 py-4 md:py-8"
              data-aos="fade-up"
              data-aos-delay="600">
              <p>{data.missionAndVisionSection.ourMission.para2}</p>
              <p className="font-light">
                {data.missionAndVisionSection.ourVision.para1}
              </p>
            </div>
            <div className="flex-1 px-2 md:px-6 py-4 md:py-8">
              <div className="space-y-6 md:space-y-10">
                <div data-aos="fade-up" data-aos-delay="700">
                  <div className="flex items-center gap-3 mb-2">
                    <Image
                      src={MissionImage}
                      alt="Mission Icon"
                      className="size-10 sm:size-11"
                    />
                    <h3 className="font-medium text-xl sm:text-2xl">
                      {data.missionAndVisionSection.ourMission.heading}
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg pl-12 sm:pl-14">
                    {data.missionAndVisionSection.ourMission.para1}
                  </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="800">
                  <div className="flex items-center gap-3 mb-2">
                    <Image
                      src={VisionImage}
                      alt="Vision Icon"
                      className="size-10 sm:size-11"
                    />
                    <h3 className="font-medium text-xl sm:text-2xl">
                      {data.missionAndVisionSection.ourVision.heading}
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg pl-12 sm:pl-14">
                    {data.missionAndVisionSection.ourVision.para1}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="w-full bg-[#f8f8f7] py-16 md:py-24 my-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-8 mb-10">
          {/* Heading & Tagline */}
          <div
            className="lg:w-1/2 w-full p-4 md:p-8 lg:pr-12 pb-0 flex flex-col justify-center"
            data-aos="fade-right"
            data-aos-delay="100">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              {data.ourStorySection.heading}
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              {data.ourStorySection.tagline}
            </p>
          </div>
          {/* Timeline */}
          <Timeline data={timelineData} />
        </div>
      </section>
    </>
  );
}