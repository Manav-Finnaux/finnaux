import { Facebook, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-[#98a8a6] py-12 px-8 border-t border-[#eff3f3] flex">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-2  md:gap-20">
        <div className="text-center col-span-full md:col-span-1 lg:text-left mb-8 lg:mb-0 mr-2 ">
          <div className="flex items-center gap-2 mb-4  justify-center lg:justify-start w-full">
            <Image src="https://ext.same-assets.com/2035067714/3993095137.png" alt="Finnaux Logo" width={32} height={32} />
            <span className="text-xl font-bold text-[#146267]">Finnaux</span>
          </div>
          <p className="text-sm">Make your complicated finance system simpler & easier.</p>
          <div className="flex gap-4 mt-4 flex-1 justify-center lg:justify-start">
            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
              <Facebook /></a>
            <a href="https://github.com" target="_blank" rel="noopener" aria-label="Github">
              <Linkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
              <Mail /></a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener" aria-label="whatsapp">
              wp</a>
          </div>
        </div>
        {/* Footer navigation columns */}
        <div className="flex-1 flex-col mb-8 mx-auto lg:mb-0">
          <h4 className="text-[#146267] font-bold mb-3 text-base">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#146267]">About Us</a></li>
            <li><a href="#" className="hover:text-[#146267]">Careers</a></li>
            <li><a href="#" className="hover:text-[#146267]">Team</a></li>
            <li><a href="#" className="hover:text-[#146267]">Newsroom</a></li>
          </ul>
        </div>
        <div className="flex-1  mb-8 mx-auto lg:mb-0">
          <h4 className="text-[#146267] font-bold mb-3 text-base">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#146267]">Feature</a></li>
            <li><a href="#" className="hover:text-[#146267]">Integartions</a></li>
            <li><a href="#" className="hover:text-[#146267]">Pricing</a></li>
            <li><a href="#" className="hover:text-[#146267]">Demo</a></li>
          </ul>
        </div>
        <div className="flex-1  mb-8 mx-auto lg:mb-0">
          <h4 className="text-[#146267] font-bold mb-3 text-base">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#146267]">Blog</a></li>
            <li><a href="#" className="hover:text-[#146267]">Case studies</a></li>
            <li><a href="#" className="hover:text-[#146267]">Webinar</a></li>
            <li><a href="#" className="hover:text-[#146267]">Documentation</a></li>
            <li><a href="#" className="hover:text-[#146267]">FAQs</a></li>
          </ul>
        </div>
        <div className="flex-1 ">
          <h4 className="text-[#146267] font-bold mb-3 text-base">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#146267]">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#146267]">Help Center</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}