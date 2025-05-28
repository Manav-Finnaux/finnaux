"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRightIcon,
  ChevronDown,
  MenuIcon,
  XIcon,
  Home,
  Boxes,
  Link2,
  Building2,
  Info,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import MaxWidthWrapper from "./max_width_wrapper";

// const links = [
//   {
//     label: "Home",
//     href: "/"
//   },
//   {
//     label: "Modules",
//     href: "/modules"
//   },
//   {
//     label: "Integrations",
//     href: "/integrations",
//   },
//   {
//     label: "Company",
//     subLinks: [
//       { label: "About Us", href: "/about" },
//       { label: "Our Team", href: "/team" },
//     ]
//   },
// ];

const links = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Modules",
    href: "/modules",
    icon: Boxes,
  },
  {
    label: "Integrations",
    href: "/integrations",
    icon: Link2,
  },
  {
    label: "Company",
    icon: Building2,
    subLinks: [
      {
        label: "About Us",
        href: "/about",
        icon: Info,
      },
      {
        label: "Our Team",
        href: "/team",
        icon: Users,
      },
    ],
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
        className="bg-white/90 backdrop-blur-lg flex justify-between items-center px-6 py-2 rounded-2xl shadow-lg border border-teal-100/50 relative"
      >

        {/* Right - Logo */}
        <Link href="/" className="relative w-32 h-11">
          <Image
            src="/logo-finnaux.png"
            alt="Finnaux Logo"
            fill
            className="object-contain hover:scale-105 transition-transform duration-300"
            priority
          />
        </Link>

        {/* Center - Navigation Links */}
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
                    <p className="text-gray-800 hover:text-teal-600 transition-colors font-medium">
                      {label}
                    </p>
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
        </div>

        {/* Left - Contact Button */}
        <div className="hidden lg:flex items-center">
          <Button
            asChild
            variant="default"
            className="bg-teal-600 hover:bg-teal-700 transition-all hover:shadow-md active:scale-95"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Menu for mobile view */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "500%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-full mt-4 left-0 w-full z-40 bg-white backdrop-blur-lg shadow-lg px-8 py-10 rounded-2xl overflow-y-auto border"
            >
              <ul className="flex flex-col gap-6 text-lg">
                {links.map(({ label, href, subLinks, icon }) => {
                  const Icon = icon;
                  if (href) {
                    return (
                      <li key={label}>
                        <Link
                          href={href}
                          className="flex items-center justify-between gap-4 hover:text-blue-600 transition"
                        >
                          <div className="flex gap-4 items-center">
                            <Icon className="w-5 h-5" />
                            {label}
                          </div>
                          <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                      </li>
                    );
                  } else if (subLinks) {
                    return (
                      <li key={label}>
                        <p className="mb-2 flex gap-4 items-center text-gray-700">
                          <Icon className="w-5 h-5" />
                          {label}
                        </p>
                        <ul className="min-[375px]:ml-6 space-y-3">
                          {subLinks.map(({ href, label, icon }) => {
                            const Icon = icon;
                            return (
                              <li key={label}>
                                <Link
                                  href={href}
                                  className="flex items-center justify-between gap-4 hover:text-blue-600 transition"
                                >
                                  <div className="flex gap-4 items-center">
                                    <Icon className="w-5 h-5" />
                                    {label}
                                  </div>
                                  <ArrowRightIcon className="w-4 h-4" />
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  }
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-3 hover:bg-gray-100 rounded-lg transition-colors text-teal-600 -mr-2"
          aria-label="Toggle menu"
        >
          {open ? (
            <XIcon size={28} className="text-teal-700" />
          ) : (
            <MenuIcon size={28} className="text-teal-700" />
          )}
        </button>
      </motion.nav>

    </MaxWidthWrapper>
  );
}