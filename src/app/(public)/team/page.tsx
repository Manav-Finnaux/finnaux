// import AOS from "aos";
// import "aos/dist/aos.css";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d_card";
import Image from "next/image";
import fetchAPI, { OUR_TEAM_API } from "@/lib/api";
import { OurTeamResponseType } from "@/lib/api.types";

export default async function TeamPage() {
  const data = await fetchAPI<OurTeamResponseType>(OUR_TEAM_API);
  const baseUrl = process.env.SERVER_API_BASE_URL!;

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
          {data.heading}
        </span>
        <span
          className="text-lg font-light text-center px-4 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="100">
          {data.tagline}
        </span>
      </div>

      {/* Team Grid - Categories */}
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {data.membersByDept.map((department) => (
          <div key={department.id} className="space-y-8" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center">
              {department.departmentName}
            </h2>
            <div className={getGridClass(department.member.length)}>
              {department.member.map((member, memberIndex) => (
                <CardContainer
                  key={member.id}
                  className="w-full md:w-80"
                  data-aos="fade-up"
                  data-aos-delay={memberIndex * 50}>
                  <CardBody className="bg-white rounded-xl shadow-md overflow-hidden aspect-[4/5] group/card">
                    <CardItem
                      className="w-full h-[70%] bg-gray-100 relative">
                      <Image
                        src={baseUrl + member.image.url}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </CardItem>
                    <CardItem
                      // translateZ="10"
                      className="p-4 flex flex-col justify-center h-[30%] text-center">
                      <h3 className="text-xl font-bold text-purple-600">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 text-base">
                        {member.designation}
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
