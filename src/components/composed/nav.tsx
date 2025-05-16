'use client';
import Image from "next/image";
import MaxWidthWrapper from "./maxWidthWrapper";
import Link from "next/link";
import { Button } from "../ui/button";
import { XIcon, MenuIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const links = [
  {
    label: 'Features',
    href: ''
  },
  {
    label: 'Services',
    href: ''
  },
  {
    label: 'Pricing',
    href: ''
  },
  {
    label: 'About',
    href: ''
  },
  {
    label: 'Works',
    href: ''
  },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  return (
    <MaxWidthWrapper className="fixed z-10 left-1/2 -translate-x-1/2 mt-4">
      <nav className="bg-white flex justify-between items-center px-6 py-6 rounded-2xl relative">
        {/* logo */}
        <div className="relative w-36 h-10">
          <Image src={'/logo-finnaux.png'} alt="" fill />
        </div>

        {/* links */}
        <ul style={{ height: 'calc(100vh - 150px)' }} className={cn('absolute bg-white w-full left-0 top-full mt-4 space-y-4 p-6 md:px-16 md:py-10 rounded-lg', open ? 'block' : 'hidden')}>
          {
            links.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="hover:text-teal-600 active:text-teal-600 text-md">{label}</Link>
              </li>
            ))
          }
        </ul>

        {/* cta */}
        <div>
          <button onClick={() => setOpen(!open)} className="min-[840px]:hidden p-2 pr-4">
            {
              open ?
                <XIcon /> :
                <MenuIcon size={24} />
            }
          </button>
          <Button className="hidden min-[840px]:flex">
            <Link href={''}>
              Contact Us
            </Link>
          </Button>
        </div>
      </nav>
    </MaxWidthWrapper>
  )
}

//     <nav className={clsx("flex flex-col min-[1050px]:flex-row items-start justify-between gap-6 h-full p-4 min-[1050px]:items-center min-[1050px]:pt-0", open ? 'pb-4' : 'pb-0')}>
//       <div className="flex justify-between items-center w-full min-[1050px]:w-fit">
//         <div className="relative w-[124px] h-[36px]">
//           <Image src={'/logo-nav.svg'} alt="Logis" fill />
//         </div>
//         <div className={clsx("relative w-[24px] min-[1050px]:hidden", open ? 'h-[20px]' : 'h-[16px]')} onClick={() => setOpen(!open)}>
//           <Image src={open ? '/x.svg' : '/hamburger.svg'} alt="Nav closed" fill />
//         </div>
//       </div>

//       <ul className={clsx(open ? 'block opacity-100' : 'hidden opacity-0 min-[1050px]:flex min-[1050px]:gap-4 min-[1050px]:opacity-100', 'transition-all duration-[2s] ease-in-out')} style={{ transitionBehavior: 'allow-discrete' }}>

//         <li className="relative">
//           <p className="hidden min-[1050px]:flex items-center font-semibold" onMouseEnter={() => setShowHoverCard(true)} onMouseLeave={() => setShowHoverCard(false)}>
//             <span>All Pages</span>
//           </p>
//           <ul className={clsx("space-y-2 font-semibold min-[1050px]:bg-white min-[1050px]:rounded-xl min-[1050px]:absolute min-[1050px]:top-12 min-[1050px]:-left-8  min-[1050px]:grid-cols-3 min-[1050px]:grid-rows-5 min-[1050px]:w-[max-content] min-[1050px]:items-center min-[1050px]:gap-x-14 min-[1050px]:gap-y-2 min-[1050px]:p-8 duration-1000 ease-out", showHoverCard ? 'min-[1050px]:grid' : 'min-[1050px]:hidden')}>
//             <li>
//               <Link href="">Home</Link>
//             </li>
//             <li>
//               <Link href="">About</Link>
//             </li>
//             <li>
//               <Link href="">Our Mission</Link>
//             </li>
//             <li>
//               <Link href="">Why Choose Us</Link>
//             </li>
//             <li>
//               <Link href="">Leadership</Link>
//             </li>
//             <li>
//               <Link href="">Pricing</Link>
//             </li>
//             <li>
//               <Link href="">Our Clients</Link>
//             </li>
//             <li>
//               <Link href="">Services</Link>
//             </li>
//             <li className="hidden min-[1050px]:block">
//               <Link href="">Services Details</Link>
//             </li>
//             <li>
//               <Link href="">FAQ</Link>
//             </li>
//             <li>
//               <Link href="">Career</Link>
//             </li>
//             <li className="hidden min-[1050px]:block">
//               <Link href="">Career Details</Link>
//             </li>
//             <li>
//               <Link href="">Blog</Link>
//             </li>
//             <li className="hidden min-[1050px]:block">
//               <Link href="">Blog Details</Link>
//             </li>
//             <li className="hidden min-[1050px]:block">
//               <Link href="">Contact Us</Link>
//             </li>
//           </ul>
//         </li>
//       </ul>

//       <div className="flex gap-4 items-center">
//         <Link href="" className="hidden min-[1050px]:block">Interested?</Link>
//         <Link href="" className={clsx("bg-yellow-200 text-black font-medium rounded-[50px] w-fit px-6 py-4 group/animation transition-all duration-[2s] ease-in-out", open ? 'block opacity-100' : 'hidden opacity-0 min-[1050px]:block min-[1050px]:opacity-100',)} style={{ transitionBehavior: 'allow-discrete' }}>
//           Let's work together
//         </Link>
//       </div>
//     </nav>
//   </MaxWidthWrapper >
// );
