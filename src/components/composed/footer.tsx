import Link from "next/link";
import { Button } from "../ui/button";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import MaxWidthWrapper from "./max_width_wrapper";
import Image from "next/image";

// Define footer links
const footerLinks = {
  products: {
    heading: "Products",
    links: [
      { name: "Loan Origination", href: "/loan-origination" },
      { name: "Collections", href: "/collections" },
      { name: "Risk Analytics", href: "/analytics" },
      { name: "API Integrations", href: "/integrations" },
    ],
  },
  company: {
    heading: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Leadership", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
    ],
  },
  resources: {
    heading: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Help Center", href: "/support" },
      { name: "Webinars", href: "/webinars" },
    ],
  },
};

// Social media icons mapping
const SOCIAL_ICONS = {
  Twitter: Twitter,
  LinkedIn: Linkedin,
  GitHub: Github,
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800/50 relative overflow-hidden pt-20">
      <MaxWidthWrapper>
        {/* CTA Section */}
        <div
          data-aos="fade-up" // AOS animation
          data-aos-delay="100" // Delay for AOS
          className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700/50 rounded-2xl p-8 md:p-10 mb-16 shadow-2xl">
          <div className="w-fit -mt-12 md:-mt-14 text-center bg-[#c4ec5a] text-gray-900 px-4 py-1.5 rounded-full font-medium text-sm">
            Get Started Today
          </div>
          <div className="text-center max-w-2xl mx-auto pt-6">
            <h2
              data-aos="zoom-in" // AOS animation
              data-aos-delay="200" // Delay for AOS
              className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white via-teal-200 to-emerald-300 bg-clip-text text-transparent">
              Power Your Lending Operations
            </h2>
            <p
              data-aos="fade-up" // AOS animation
              data-aos-delay="300" // Delay for AOS
              className="text-gray-400 mb-6 text-base">
              Join 200+ financial institutions transforming their lending with
              our cutting-edge platform.
            </p>
            <div
              data-aos="fade-up" // AOS animation
              data-aos-delay="400" // Delay for AOS
              className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={'/contact'}>
                <Button
                  size="lg"
                  className="bg-[#c4ec5a] hover:bg-[#d0f06a] text-gray-900 group font-semibold text-base">
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href={'/products'}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-slate-800 hover:bg-gray-300 hover:border-gray-500 font-semibold text-base">
                  Our Products
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 mb-16">
          {/* Logo and description */}
          <div
            data-aos="fade-right" // AOS animation
            data-aos-delay="500" // Delay for AOS
            className="col-span-2 md:col-span-2 lg:col-span-1 space-y-6">
            <Link href="/" className="inline-block">
              <div className="h-10 w-24 relative">
                <Image src="/logo-finnaux.png" alt="Finnaux" fill />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Modern financial infrastructure for next-generation lending
              institutions.
            </p>
            <div className="flex space-x-5 mt-4">
              {["Twitter", "LinkedIn", "GitHub"].map((socialName, index) => {
                const Icon =
                  SOCIAL_ICONS[socialName as keyof typeof SOCIAL_ICONS];
                return (
                  <Link
                    key={socialName}
                    href="#" // Replace with actual social links
                    data-aos="fade-up" // AOS animation for individual icons
                    data-aos-delay={600 + index * 100} // Staggered delay
                    className="text-gray-500 hover:text-[#c4ec5a] transition-colors"
                    aria-label={socialName}>
                    <Icon className="w-6 h-6" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact Information - New Section */}
          <div
            data-aos="fade-up" // AOS animation
            data-aos-delay="600" // Delay for AOS
            className="col-span-2 md:col-span-2 lg:col-span-1 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                <a
                  href="mailto:info@finnaux.com"
                  className="text-sm text-gray-500 hover:text-white transition-colors break-all">
                  info@finnaux.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-gray-500 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-500">
                  123 Financial St, Suite 400
                  <br />
                  Fintech City, FC 98765
                  <br />
                  Country
                </p>
              </li>
            </ul>
          </div>

          {/* Footer links */}
          {Object.values(footerLinks).map((category, idx) => (
            <div
              key={category.heading}
              data-aos="fade-up" // AOS animation
              data-aos-delay={700 + idx * 100} // Staggered delay
              className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                {category.heading}
              </h3>
              <ul className="space-y-3">
                {category.links.map((link, linkIdx) => (
                  <li
                    key={link.name}
                    data-aos="fade-up" // AOS animation for individual links
                    data-aos-delay={800 + idx * 100 + linkIdx * 50} // More staggered delay
                  >
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-white transition-colors flex items-start group">
                      <span className="w-1 h-1 bg-gray-600 rounded-full mt-2 mr-2 group-hover:bg-[#c4ec5a] transition-colors"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-3 pb-4 flex flex-col md:flex-row justify-center items-center">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Finnaux Technologies. All rights
            reserved.
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
