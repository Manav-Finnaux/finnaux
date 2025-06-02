"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Bebas_Neue } from "next/font/google";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Integrations", href: "/integrations" },
    {
      name: "Company",
      subItems: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
      ],
    },
    { name: "Contact", href: "/contact", align: "right" },
  ];

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    else document.body.style.overflow = 'auto';
  }, [isOpen]);

  return (
    <header className={`fixed w-full z-50 bg-teal-800`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center">
            <span className={`${bebas.className} text-3xl text-[#c4ec5a]`}>
              FINNAUX
            </span>
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className={cn(bebas.className, 'text-lg tracking-wider hidden md:flex items-center space-x-8 flex-1 justify-center')}>
            <NavigationMenu>
              <NavigationMenuList>
                {
                  navItems.map(({ href, name, subItems }, idx) => {
                    if (name === 'Contact') return;

                    if (subItems) {
                      return (
                        <NavigationMenuItem key={idx}>
                          <NavigationMenuTrigger>{name}</NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid gap-1 p-2 w-max">
                              {subItems.map((component, idx) => (
                                <li key={idx}>
                                  <NavigationMenuLink href={component.href} className={cn(
                                    "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:text-[#c4ec5a]",
                                  )}>
                                    {component.name}
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      )
                    }

                    return (
                      <NavigationMenuItem key={idx}>
                        <NavigationMenuLink href={href} className={navigationMenuTriggerStyle()}>
                          {name}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                  })
                }
              </NavigationMenuList>
            </NavigationMenu>
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
          <div className="md:hidden flex items-center">
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
        className={`md:hidden ${isOpen ? "block" : "hidden"
          } bg-teal-800 backdrop-blur-sm transition-all duration-300 h-screen`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-4">
          {navItems.map((item) => {
            if (item.subItems) {
              return (
                <div key={item.name} className="border-b border-teal-600">
                  <button
                    onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                    className={`${bebas.className} flex items-center justify-between w-full px-3 py-4 text-2xl text-white hover:text-[#c4ec5a] tracking-wider`}>
                    {item.name}
                    <ChevronDown
                      className={`h-6 w-6 transition-transform ${companyDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  <div
                    className={`${companyDropdownOpen ? "block" : "hidden"
                      } pl-4`}>
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`${bebas.className} block px-3 py-3 text-xl text-white hover:text-[#c4ec5a] tracking-wider`}
                        onClick={() => {
                          // setIsOpen(false);
                          setCompanyDropdownOpen(false);
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
                className={`${bebas.className} block px-3 py-4 text-2xl text-white hover:text-[#c4ec5a] border-b border-teal-600 last-of-type:border-none tracking-wider`}
              // onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}