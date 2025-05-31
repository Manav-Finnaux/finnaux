"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if the click is outside the mobile menu toggle button and the mobile menu itself
      if (
        isOpen &&
        !(event.target as HTMLElement).closest(".mobile-menu-container") &&
        !(event.target as HTMLElement).closest(".mobile-menu-button")
      ) {
        setIsOpen(false);
      }
      // Check if the click is outside the company dropdown button and the dropdown content
      if (
        companyDropdownOpen &&
        !(event.target as HTMLElement).closest(".company-dropdown-container")
      ) {
        setCompanyDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen, companyDropdownOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Integrations", href: "/integrations" },
    {
      name: "Company",
      href: "#",
      subItems: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
      ],
    },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-teal-900/95 backdrop-blur-sm" : "bg-teal-900" // Always have a background for better visibility
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center">
            <span className={`${bebas.className} text-3xl text-[#c4ec5a]`}>
              FINNAUX
            </span>
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {navItems.map((item) => {
              if (item.subItems) {
                return (
                  <div
                    key={item.name}
                    className="relative group company-dropdown-container" // Added class for click outside detection
                    onMouseEnter={() => setCompanyDropdownOpen(true)} // Open on hover
                    onMouseLeave={() => setCompanyDropdownOpen(false)} // Close on mouse leave
                  >
                    <button
                      onClick={() =>
                        setCompanyDropdownOpen(!companyDropdownOpen)
                      } // Still allow click toggle
                      className={`${bebas.className} flex items-center text-lg text-white hover:text-[#c4ec5a] transition-colors duration-200 tracking-wider`}>
                      {item.name}
                      <ChevronDown
                        className={`ml-1 h-5 w-5 transition-transform ${
                          companyDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-teal-800/95 backdrop-blur-sm ${
                        companyDropdownOpen ? "block" : "hidden"
                      }`}>
                      <div className="py-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-white hover:bg-teal-700 transition-colors duration-200"
                            onClick={() => setCompanyDropdownOpen(false)} // Close on item click
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${bebas.className} text-lg text-white hover:text-[#c4ec5a] transition-colors duration-200 tracking-wider`}>
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Contact - Right */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`${bebas.className} bg-[#c4ec5a] text-black px-6 py-2 rounded-full text-lg hover:bg-white transition-colors duration-200 tracking-wider`}>
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center mobile-menu-button">
            {" "}
            {/* Added class for click outside detection */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#c4ec5a] focus:outline-none"
              aria-label="Toggle menu">
              {isOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mobile-menu-container ${
          // Added class for click outside detection
          isOpen ? "block" : "hidden"
        } bg-teal-900/95 backdrop-blur-sm transition-all duration-300`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-4">
          {navItems.map((item) => {
            if (item.subItems) {
              return (
                <div key={item.name} className="border-b border-teal-800">
                  <button
                    onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                    className={`${bebas.className} flex items-center justify-between w-full px-3 py-4 text-2xl text-white hover:text-[#c4ec5a] tracking-wider`}>
                    {item.name}
                    <ChevronDown
                      className={`h-6 w-6 transition-transform ${
                        companyDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`${
                      companyDropdownOpen ? "block" : "hidden"
                    } pl-4`}>
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`${bebas.className} block px-3 py-3 text-xl text-white hover:text-[#c4ec5a] tracking-wider`}
                        onClick={() => {
                          setIsOpen(false);
                          setCompanyDropdownOpen(false); // Close both
                        }}>
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`${bebas.className} block px-3 py-4 text-2xl text-white hover:text-[#c4ec5a] border-b border-teal-800 tracking-wider`}
                onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            );
          })}
          {/* Mobile Contact Us Link - Now part of navItems map, but can be explicitly added if preferred */}
          <Link
            href="/contact"
            className={`${bebas.className} block px-3 py-4 text-2xl text-white hover:text-[#c4ec5a] border-b border-teal-800 tracking-wider`}
            onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
