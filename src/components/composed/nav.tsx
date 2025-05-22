"use client";
import Image from "next/image";
import MaxWidthWrapper from "./maxWidthWrapper";
import Link from "next/link";
import { Button } from "../ui/button";
import { XIcon, MenuIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const links = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Services",
    href: "/modules",
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
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <MaxWidthWrapper className="fixed z-50 left-1/2 -translate-x-1/2 mt-4">
      <nav className="bg-white/90 backdrop-blur-md flex justify-between items-center px-6 py-3 rounded-2xl relative shadow-sm border border-gray-100">
        {/* Logo */}
        <Link href="/" className="relative w-36 h-12">
          <Image 
            src="/logo-finnaux.png" 
            alt="Finnaux Logo" 
            fill 
            className="object-contain"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="min-[840px]:hidden p-2 text-teal-600"
          aria-label="Toggle menu"
        >
          {open ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden min-[840px]:flex items-center gap-8">
          <ul className="flex gap-6">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Button asChild variant="default" className="bg-teal-600 hover:bg-teal-700">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="fixed inset-0 bg-black/50 min-[840px]:hidden" onClick={() => setOpen(false)} />
        )}
        <div
          className={cn(
            "fixed top-24 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] bg-white rounded-xl shadow-xl min-[840px]:hidden transition-all duration-300",
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          <ul className="flex flex-col p-6 gap-4">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="block py-3 px-4 text-gray-800 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
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
        </div>
      </nav>
    </MaxWidthWrapper>
  );
}