"use client";

import { Banknote, Cpu, Fingerprint, ScanLine, ShieldCheck, Verified } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TechnologyPartners() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  const integrationCategories = [
    {
      title: "Banking Partners",
      icon: <Banknote className="w-8 h-8 text-teal-600" />,
      partners: [
        { name: "ICICI Bank", logo: "/partners/icici.png" },
        { name: "AU Bank", logo: "/partners/au.png" },
        { name: "HDFC Bank", logo: "/partners/hdfc.png" },
        { name: "Axis Bank", logo: "/partners/axis.png" }
      ],
      description: "Seamless banking integrations for faster disbursals and settlements"
    },
    {
      title: "Credit Bureaus",
      icon: <Verified className="w-8 h-8 text-blue-600" />,
      partners: [
        { name: "Transunion CIBIL", logo: "/partners/cibil.png" },
        { name: "CRIF Highmark", logo: "/partners/crif.png" },
        { name: "Equifax", logo: "/partners/equifax.png" }
      ],
      description: "Real-time credit scoring and financial health assessment"
    },
    {
      title: "KYC Solutions",
      icon: <Fingerprint className="w-8 h-8 text-purple-600" />,
      partners: [
        { name: "DigiLocker API", logo: "/partners/digilocker.png" },
        { name: "Surepass", logo: "/partners/surepass.png" },
        { name: "Digio", logo: "/partners/digio.png" },
        { name: "Parken (SMS)", logo: "/partners/parken.png" }
      ],
      description: "Instant identity verification with 99.9% accuracy"
    },
    {
      title: "Payment Infrastructure",
      icon: <ScanLine className="w-8 h-8 text-green-600" />,
      partners: [
        { name: "NU-Pay", logo: "/partners/nu.png" },
        { name: "BBPS (AU Bank)", logo: "/partners/bbps.png" },
        { name: "E-NACH Network", logo: "/partners/enach.png" }
      ],
      description: "Omnichannel payment collection and disbursement"
    },
    {
      title: "Digital Signatures",
      icon: <ShieldCheck className="w-8 h-8 text-amber-600" />,
      partners: [
        { name: "DSC Services", logo: "/partners/dsc.png" },
        { name: "E-Sign Framework", logo: "/partners/esign.png" }
      ],
      description: "Legally binding digital documentation"
    },
    {
      title: "Credit Analysis",
      icon: <Cpu className="w-8 h-8 text-cyan-600" />,
      partners: [
        { name: "Video KYC", logo: "/partners/vkyc.png" },
        { name: "Account Aggregator", logo: "/partners/aa.png" },
        { name: "Bank Statement Analysis", logo: "/partners/analysis.png" }
      ],
      description: "AI-powered financial health assessment tools"
    }
  ];

  const verificationServices = [
    {
      title: "Document Verification",
      items: ["Aadhar", "PAN", "Driving License", "Passport", "Electricity Bills"]
    },
    {
      title: "Financial Verification",
      items: ["Bank Account", "GST", "Income Tax Returns", "Udyam Registration"]
    },
    {
      title: "Asset Verification",
      items: [" Vehicle Registration Certificate", "Real Estate Verification"]
    },
    {
      title: "Business Verification",
      items: ["Company Incorporation", "MSME Registration", "Trade License", "MCA Records"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-teal-50/70 via-green-50/70 to-cyan-50/70 w-full min-h-screen py-12 md:py-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
          Technology Ecosystem
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Powering seamless financial operations through strategic integrations
        </p>
      </div>

      {/* Integration Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {integrationCategories.map((category, index) => (
          <CardContainer key={index} className="w-full" data-aos="fade-up" data-aos-delay={index * 100}>
            <CardBody className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex items-center gap-4 mb-5">
                  {category.icon}
                  <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.partners.map((partner, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-3 flex items-center justify-center h-16">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-h-10 max-w-[120px] object-contain" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* Verification Services */}
      <div className="max-w-7xl mx-auto px-6 mb-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Comprehensive Verification Suite
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verificationServices.map((service, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Payment & Collection */}
      <div className="max-w-7xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Payment & Collection Channels
        </h2>
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Banknote className="w-6 h-6 text-green-500" />
                Payment Solutions
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">AU Bank Payment Gateway</h4>
                    <p className="text-gray-600 text-sm">Instant payment processing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">NU-Pay Integration</h4>
                    <p className="text-gray-600 text-sm">UPI-based collections</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <ScanLine className="w-6 h-6 text-blue-500" />
                Collection Methods
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Virtual/Dynamic QR</h4>
                    <p className="text-gray-600 text-sm">ICICI Bank powered QR solutions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">BBPS Payments</h4>
                    <p className="text-gray-600 text-sm">Bill payments via AU Bank</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">E-NACH Mandates</h4>
                    <p className="text-gray-600 text-sm">Multiple bank integrations</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}