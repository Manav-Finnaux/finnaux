"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export default function TeamPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-teal-100/70 via-green-100/70 to-cyan-100/70 min-h-screen w-full py-8 md:py-12">
      {/* Header Section */}
      <div className="flex flex-col space-y-4 items-center justify-center mb-12 mt-24" data-aos="fade-up">
        <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-center px-4">
          Meet Our Team
        </span>
        <span className="text-lg font-light text-center px-4 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
          At Finnaux, our strength lies in our people.
        </span>
      </div>

      {/* Team Grid - Categories */}
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Leadership Section */}
        <div className="space-y-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center">Leadership</h2>
          <div className="flex justify-center">
            <CardContainer className="w-72 md:w-80">
              <CardBody className="bg-white rounded-xl shadow-md overflow-hidden aspect-[4/5] group/card">
                <CardItem translateZ="20" className="w-full h-[70%] relative">
                  <Image 
                    src="/team/ceo.jpg" 
                    alt="Jack Robinson" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </CardItem>
                <CardItem translateZ="10" className="p-4 flex flex-col justify-center h-[30%] bg-gray-100 text-center">
                  <h3 className="text-xl font-bold text-purple-600">Jack Robinson</h3>
                  <p className="text-blue-600 text-base">CEO</p>
                  <p className="text-gray-600 text-sm">Visionary leader</p>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>

        {/* Management Team Section */}
        <div className="space-y-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center">Management Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center">
            {Array(2).fill(null).map((_, i) => (
              <CardContainer key={i} className="w-72 md:w-80" data-aos="fade-up" data-aos-delay={i * 100}>
                <CardBody className="bg-white rounded-xl shadow-md overflow-hidden aspect-[4/5] group/card">
                  <CardItem translateZ="20" className="w-full h-[70%] bg-gray-100 relative">
                    <Image 
                      src={`/team/manager-${i+1}.jpg`} 
                      alt={`Management Member ${i + 1}`} 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </CardItem>
                  <CardItem translateZ="10" className="p-4 flex flex-col justify-center h-[30%] text-center">
                    <h3 className="text-xl font-bold text-purple-600">Management Member {i + 1}</h3>
                    <p className="text-blue-600 text-base">Senior Manager</p>
                    <p className="text-gray-600 text-sm">Team leadership</p>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>

        {/* Development Team Section */}
        <div className="space-y-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center">Development Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
            {Array(6).fill(null).map((_, i) => (
              <CardContainer key={i} className="w-72 md:w-80" data-aos="fade-up" data-aos-delay={i * 50}>
                <CardBody className="bg-white rounded-xl shadow-md overflow-hidden aspect-[4/5] group/card">
                  <CardItem translateZ="20" className="w-full h-[70%] bg-gray-100 relative">
                    <Image 
                      src={`/team/dev-${i+1}.jpg`} 
                      alt={`Developer ${i + 1}`} 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </CardItem>
                  <CardItem translateZ="10" className="p-4 flex flex-col justify-center h-[30%] text-center">
                    <h3 className="text-xl font-bold text-purple-600">Developer {i + 1}</h3>
                    <p className="text-blue-600 text-base">Software Engineer</p>
                    <p className="text-gray-600 text-sm">Full-stack expert</p>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>

        {/* Database Management Section */}
        <div className="space-y-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center">Database Management</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {Array(3).fill(null).map((_, i) => (
              <CardContainer 
                key={i} 
                className={`w-72 md:w-80 ${i === 1 ? "order-first sm:order-none" : ""}`}
                data-aos="fade-up" 
                data-aos-delay={i * 100}
              >
                <CardBody className="bg-white rounded-xl shadow-md overflow-hidden aspect-[4/5] group/card">
                  <CardItem translateZ="20" className="w-full h-[70%] bg-gray-100 relative">
                    <Image 
                      src={`/team/db-${i+1}.jpg`} 
                      alt={`DB Manager ${i + 1}`} 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </CardItem>
                  <CardItem translateZ="10" className="p-4 flex flex-col justify-center h-[30%] text-center">
                    <h3 className="text-xl font-bold text-purple-600">DB Manager {i + 1}</h3>
                    <p className="text-blue-600 text-base">Database Admin</p>
                    <p className="text-gray-600 text-sm">Data specialist</p>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>

        {/* Customer Support Team Section */}
        <div className="space-y-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center">Customer Support Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center">
            {Array(2).fill(null).map((_, i) => (
              <CardContainer key={i} className="w-72 md:w-80" data-aos="fade-up" data-aos-delay={i * 150}>
                <CardBody className="bg-white rounded-xl shadow-md overflow-hidden aspect-[4/5] group/card">
                  <CardItem translateZ="20" className="w-full h-[70%] bg-gray-100 relative">
                    <Image 
                      src={`/team/support-${i+1}.jpg`} 
                      alt={`Support Specialist ${i + 1}`} 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </CardItem>
                  <CardItem translateZ="10" className="p-4 flex flex-col justify-center h-[30%] text-center">
                    <h3 className="text-xl font-bold text-purple-600">Support Specialist {i + 1}</h3>
                    <p className="text-blue-600 text-base">Customer Success</p>
                    <p className="text-gray-600 text-sm">Client expert</p>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}