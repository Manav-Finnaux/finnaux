"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d_card";
import Image from "next/image";
import fetchAPI from "@/lib/api";

interface TeamMember {
  id: number;
  Name: string;
  Designation: string;
  complimentaryText: string;
  Image: {
    id: number;
    url: string;
  };
}

interface Department {
  id: number;
  departmentName: string;
  Member: TeamMember[];
}

interface TeamData {
  Heading: string;
  Tagline: string;
  membersByDept: Department[];
}

export default function TeamPage() {
  const [teamData, setTeamData] = useState<TeamData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });

    const fetchTeamData = async () => {
      try {
        const api =
          "/our-team?populate[membersByDept][populate][Member][populate][Image][fields][0]=url";
        const response = await fetchAPI<{ data: TeamData }>(api);
        setTeamData(response.data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-teal-100/70 via-green-100/70 to-cyan-100/70 min-h-screen w-full py-8 md:py-12 flex justify-center items-center">
        Loading team data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-r from-teal-100/70 via-green-100/70 to-cyan-100/70 min-h-screen w-full py-8 md:py-12 flex justify-center items-center text-red-500">
        Error: {error}
      </div>
    );
  }

  if (!teamData) {
    return (
      <div className="bg-gradient-to-r from-teal-100/70 via-green-100/70 to-cyan-100/70 min-h-screen w-full py-8 md:py-12 flex justify-center items-center">
        No team data available
      </div>
    );
  }

  // Determine grid layout based on number of members
  const getGridClass = (memberCount: number) => {
    if (memberCount === 1) return "flex justify-center";
    if (memberCount === 2)
      return "grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center";
    if (memberCount === 3)
      return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center";
    return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center";
  };

  return (
    <div className="bg-gradient-to-r from-teal-100/70 via-green-100/70 to-cyan-100/70 min-h-screen w-full py-8 md:py-12">
      {/* Header Section */}
      <div
        className="flex flex-col space-y-4 items-center justify-center mb-12 mt-24"
        data-aos="fade-up">
        <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-center px-4">
          {teamData.Heading}
        </span>
        <span
          className="text-lg font-light text-center px-4 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="100">
          {teamData.Tagline}
        </span>
      </div>

      {/* Team Grid - Categories */}
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {teamData.membersByDept.map((department) => (
          <div key={department.id} className="space-y-8" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center">
              {department.departmentName}
            </h2>
            <div className={getGridClass(department.Member.length)}>
              {department.Member.map((member, memberIndex) => (
                <CardContainer
                  key={member.id}
                  className="w-72 md:w-80"
                  data-aos="fade-up"
                  data-aos-delay={memberIndex * 50}>
                  <CardBody className="bg-white rounded-xl shadow-md overflow-hidden aspect-[4/5] group/card">
                    <CardItem
                      // translateZ="20"
                      className="w-full h-[70%] bg-gray-100 relative">
                      <Image
                        src={member.Image.url}
                        alt={member.Name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </CardItem>
                    <CardItem
                      // translateZ="10"
                      className="p-4 flex flex-col justify-center h-[30%] text-center">
                      <h3 className="text-xl font-bold text-purple-600">
                        {member.Name}
                      </h3>
                      <p className="text-blue-600 text-base">
                        {member.Designation}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {member.complimentaryText}
                      </p>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
