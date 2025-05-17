import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, TechCorp",
      image: "/testimonial1.jpg",
      text: "The loan management system has transformed how we handle our financial operations. Highly recommended!",
    },
    {
      name: "Sarah Smith",
      role: "CFO, StartupX",
      image: "/testimonial2.jpg",
      text: "Incredible platform that has streamlined our entire loan process. The efficiency gains are remarkable.",
    },
    {
      name: "Mike Johnson",
      role: "Director, FinanceHub",
      image: "/testimonial3.jpg",
      text: "Outstanding service and support. The platform has exceeded our expectations in every way.",
    },
    {
      name: "Mike Johnson",
      role: "Director, FinanceHub",
      image: "/testimonial3.jpg",
      text: "Outstanding service and support. The platform has exceeded our expectations in every way.",
    },
    {
      name: "Mike Johnson",
      role: "Director, FinanceHub",
      image: "/testimonial3.jpg",
      text: "Outstanding service and support. The platform has exceeded our expectations in every way.",
    },
  ];

  return (
    <section className="py-20  overflow-hidden">
      <div className="container mx-auto px-0">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          What Our Clients Say
        </h2>

        <div className="relative">
          <div className="overflow-hidden w-full py-10">
            <Marquee speed={30} gradient={false} className="flex items-center">
              <div className="flex  py-5">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl h-72 shadow-lg w-80 mx-4 flex flex-col hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center mb-6 py-3 px-5">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          layout="fill"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 px-3 leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>

          <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-black/10 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-black/10 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
