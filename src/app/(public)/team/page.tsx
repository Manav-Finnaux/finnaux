"use client";


import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export default function TeamPage() {

  // Assuming `teamData` is the API response you're fetching, you can replace this with the actual fetched data
  const teamData = {
    data: {
      membersByDept: [
        {
          departmentName: "Developer Team",
          Member: [
            {
              Name: "Ravi",
              Designation: "Frontend Developer",
              complimentaryText: "Plays guitar!",
              Image: {
                url: "/uploads/logo_fc6e1daefd.png",
              },
            },
            {
              Name: "Jassi Paaji",
              Designation: "Backend Developer",
              complimentaryText: "Doesn't care about frontend at all!",
              Image: {
                url: "/uploads/logo_8_a3541397e0.png",
              },
            },
          ],
        },
        {
          departmentName: "Project Management",
          Member: [
            {
              Name: "Loan",
              Designation: "Product Manager",
              complimentaryText: "Awesome!",
              Image: {
                url: "/uploads/logo_2_534f9b3ede.png",
              },
            },
          ],
        },
      ],
    },
  };

  return (
    <div className="bg-gradient-to-r from-teal-100/70 via-green-100/70 to-cyan-100/70 min-h-screen w-full py-8 md:py-12">
      {/* Header Section */}
      <div
        className="flex flex-col space-y-4 items-center justify-center mb-12 mt-24"
        data-aos="fade-up">
        <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-center px-4">
          Meet Our Team
        </span>
        <span
          className="text-lg font-light text-center px-4 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="100">
          At Finnaux, our strength lies in our people.
        </span>
      </div>

      {/* Team Grid - Categories */}
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Loop through each department */}
        {teamData.data.membersByDept.map((dept, deptIndex) => (
          <div key={deptIndex} className="space-y-8" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center">{dept.departmentName}</h2>
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${dept.Member.length > 2 ? "3" : "2"} gap-8 max-w-6xl mx-auto justify-items-center`}>
              {/* Loop through each member in the department */}
              {dept.Member.map((member, index) => (
                <CardContainer
                  key={index}
                  className="w-72 md:w-80"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}>
                  <CardBody className="bg-white rounded-xl shadow-md overflow-hidden aspect-[4/5] group/card">
                    <CardItem
                      translateZ="20"
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
                      translateZ="10"
                      className="p-4 flex flex-col justify-center h-[30%] text-center">
                      <h3 className="text-xl font-bold text-purple-600">
                        {member.Name}
                      </h3>
                      <p className="text-blue-600 text-base">{member.Designation}</p>
                      <p className="text-gray-600 text-sm">{member.complimentaryText}</p>
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
