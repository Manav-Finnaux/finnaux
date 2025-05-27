import Image from "next/image";
import Section from "./section";

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
}

function TeamMember({ name, position, bio, imageUrl }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="w-full h-64 relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-blue-500 font-semibold text-sm mb-3">{position}</p>
        <p className="text-gray-600 text-sm">{bio}</p>
      </div>
    </div>
  );
}

export default function MeetOurTeam() {
  const teamSections = [
    {
      title: "Leadership",
      members: [
        {
          name: "John Doe",
          position: "CEO & Founder",
          bio: "Visionary leader with 20+ years of experience in the industry, driving our company's strategic direction.",
          imageUrl:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        },
      ],
      className: "max-w-md mx-auto",
    },
    {
      title: "Management Team",
      members: [
        {
          name: "Sarah Johnson",
          position: "Chief Technology Officer",
          bio: "Leads our technical strategy and ensures our products remain innovative and cutting-edge.",
          imageUrl:
            "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Michael Chen",
          position: "Chief Marketing Officer",
          bio: "Drives brand awareness and customer engagement through strategic marketing initiatives.",
          imageUrl:
            "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        },
      ],
      className: "grid md:grid-cols-2 gap-8",
    },
    {
      title: "Development Team",
      members: [
        {
          name: "Alex Rodriguez",
          position: "Senior Developer",
          bio: "Full-stack developer specializing in React and Node.js with a passion for clean code.",
          imageUrl:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Emily Wilson",
          position: "Frontend Developer",
          bio: "Creates beautiful, responsive user interfaces with a focus on accessibility.",
          imageUrl:
            "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "David Kim",
          position: "Backend Developer",
          bio: "Builds robust server-side systems with expertise in database architecture.",
          imageUrl:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        },
      ],
      className: "grid md:grid-cols-3 gap-8",
    },
    {
      title: "Database Team",
      members: [
        {
          name: "Lisa Thompson",
          position: "Database Manager",
          bio: "Ensures data integrity and performance across all our database systems.",
          imageUrl:
            "https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Robert Garcia",
          position: "Database Administrator",
          bio: "Specializes in database optimization and security protocols.",
          imageUrl:
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        },
      ],
      className: "grid md:grid-cols-2 gap-8",
    },
    {
      title: "Sales Team",
      members: [
        {
          name: "Olivia Martinez",
          position: "Sales Director",
          bio: "Leads our sales strategy and builds long-term client relationships.",
          imageUrl:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "James Wilson",
          position: "Account Manager",
          bio: "Dedicated to understanding client needs and delivering tailored solutions.",
          imageUrl:
            "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Sophia Lee",
          position: "Sales Representative",
          bio: "Helps clients find the perfect solutions for their business needs.",
          imageUrl:
            "https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        },
      ],
      className: "grid md:grid-cols-3 gap-8",
    },
  ];

  return (
    <Section variant="top" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            MEET OUR TEAM
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500"></span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals who make our company successful
            through their dedication and expertise.
          </p>
        </div>

        {teamSections.map((section, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8 relative inline-block">
              {section.title}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-blue-500"></span>
            </h2>
            <div className={section.className}>
              {section.members.map((member, memberIndex) => (
                <TeamMember
                  key={memberIndex}
                  name={member.name}
                  position={member.position}
                  bio={member.bio}
                  imageUrl={member.imageUrl}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
