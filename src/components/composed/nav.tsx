"use client";

import Image from "next/image";
import MaxWidthWrapper from "./maxWidthWrapper";
import Link from "next/link";
import { Button } from "../ui/button";
import { XIcon, MenuIcon, ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Features",
    href: "/features",
    subLinks: [
      { label: "Loan Origination", href: "/features/origination" },
      { label: "Portfolio Management", href: "/features/portfolio" },
      { label: "Reporting", href: "/features/reports" },
    ]
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Our Team",
    href: "/team",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setActiveSubmenu(null);
  }, [pathname]);

  return (
    <MaxWidthWrapper className="fixed z-50 left-1/2 -translate-x-1/2 mt-4 px-4">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white/90 backdrop-blur-lg flex justify-between items-center px-6 py-3 rounded-2xl shadow-lg border border-teal-100/50"
      >
        {/* Logo */}
        <Link href="/" className="relative w-36 h-12">
          <Image 
            src="/logo-finnaux.png" 
            alt="Finnaux Logo" 
            fill 
            className="object-contain hover:scale-105 transition-transform duration-300"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-6">
            {links.map(({ label, href, subLinks }) => (
              <li key={label} className="relative">
                {subLinks ? (
                  <div 
                    className="flex items-center gap-1 cursor-pointer"
                    onMouseEnter={() => setActiveSubmenu(label)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <Link
                      href={href}
                      className="text-gray-800 hover:text-teal-600 transition-colors font-medium"
                    >
                      {label}
                    </Link>
                    <ChevronDown className={`w-4 h-4 text-teal-600 transition-transform ${activeSubmenu === label ? 'rotate-180' : ''}`} />
                    
                    <AnimatePresence>
                      {activeSubmenu === label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-teal-50 overflow-hidden"
                        >
                          {subLinks.map((subLink) => (
                            <Link
                              key={subLink.label}
                              href={subLink.href}
                              className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={href}
                    className="text-gray-800 hover:text-teal-600 transition-colors font-medium"
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Button 
            asChild 
            variant="default" 
            className="bg-teal-600 hover:bg-teal-700 transition-all hover:shadow-md active:scale-95"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-teal-600"
          aria-label="Toggle menu"
        >
          {open ? (
            <XIcon size={24} className="text-teal-700" />
          ) : (
            <MenuIcon size={24} className="text-teal-700" />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 lg:hidden z-40"
                onClick={() => setOpen(false)}
              />
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={cn(
                  "fixed top-24 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] bg-white rounded-xl shadow-xl lg:hidden z-50 overflow-hidden",
                )}
              >
                <ul className="flex flex-col p-4 gap-1">
                  {links.map(({ label, href, subLinks }) => (
                    <li key={label}>
                      {subLinks ? (
                        <div className="flex flex-col">
                          <button 
                            onClick={() => setActiveSubmenu(activeSubmenu === label ? null : label)}
                            className="flex items-center justify-between py-3 px-4 text-gray-800 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors"
                          >
                            <span>{label}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === label ? 'rotate-180' : ''}`} />
                          </button>
                          
                          <AnimatePresence>
                            {activeSubmenu === label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden pl-4"
                              >
                                {subLinks.map((subLink) => (
                                  <Link
                                    key={subLink.label}
                                    href={subLink.href}
                                    className="block py-2 px-4 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors"
                                    onClick={() => setOpen(false)}
                                  >
                                    {subLink.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={href}
                          className="block py-3 px-4 text-gray-800 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          {label}
                        </Link>
                      )}
                    </li>
                  ))}
                  <li className="mt-2">
                    <Button
                      asChild
                      variant="default"
                      className="w-full bg-teal-600 hover:bg-teal-700"
                      onClick={() => setOpen(false)}
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </li>
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </MaxWidthWrapper>
  );
}