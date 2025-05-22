import MissionImage from "@/lib/assets/features/mission.png";
import vision from "@/lib/assets/features/leadership.png";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      {/* Company Overview */}
      <div className="bg-gradient-to-r from-teal-100/70 via-green-100/70 to-cyan-100/70 min-h-screen w-full py-20 md:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-center flex-col space-y-6 py-12">
            <h1 className="font-medium text-4xl sm:text-5xl lg:text-6xl">
              Empowering Your Financial Future
            </h1>
            <h3 className="font-medium text-lg w-full md:w-1/2 lg:w-[50%]">
              At Finnaux, our journey is rooted in one purpose — your
              prosperity. With unwavering commitment and expert insight
            </h3>
          </div>

          {/* Main Content Card */}
          <div className="relative my-12 md:my-48">
            {/* Experience Card - Positioned exactly as in original */}
            <div className="hidden md:flex bg-gradient-to-b from-teal-100/80 to-teal-50 border-teal-300/60 border rounded-xl h-80 w-full max-w-[28rem] absolute shadow-xl shadow-teal-100/60 right-4 sm:right-8 lg:right-20 -top-60 flex-col justify-evenly p-6">
              <h1 className="bg-gradient-to-b from-cyan-400 to-teal-300 px-6 text-9xl text-transparent bg-clip-text text-left">
                18
              </h1>
              <div className="flex flex-row justify-between items-start gap-0">
                <div className="rounded-full h-14 w-24 bg-white border-2 border-black mx-8"></div>
                <div className="text-left pr-2 text-base">
                  Years experience with a deep understanding of the challenges
                  and opportunities
                </div>
              </div>
            </div>

            {/* Main Card Content */}
            <div className="bg-gradient-to-r from-white/60 to-white/50 border-cyan-300 border rounded-2xl p-4 pt-40 md:pt-4">
              {/* Mission Statement */}
              <div className="ml-0 md:ml-24 mt-0 md:mt-28 mb-12 md:mb-24 w-full">
                <h1 className="text-3xl md:text-4xl font-medium">
                  Our mission is to make a positive impact by transforming the
                  way people interact with their finances.
                </h1>
              </div>

              {/* Mission and Vision Sections */}
              <div className="flex flex-col lg:flex-row gap-8 xl:gap-36 px-4 md:px-8">
                <div className="flex-1 text-lg font-medium space-y-6 md:space-y-10 px-2 md:px-10 py-4 md:py-10">
                  <p>
                    Your success is our mission. As business advisors, we offer
                    expert guidance, unlocking your potential for growth and
                    profitability.
                  </p>
                  <p className="font-light">
                    Our vision is to create a financially secure future for all,
                    offering innovative solutions & expert guidance to navigate
                    prosperity.
                  </p>
                </div>
                <div className="flex-1 px-2 md:px-6 py-4 md:py-10">
                  <div className="space-y-8 md:space-y-12">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Image
                          src={MissionImage}
                          alt="Mission Icon"
                          className="size-11"
                        />
                        <h3 className="font-medium text-2xl">Our Mission</h3>
                      </div>
                      <p className="text-lg pl-14">
                        Our mission is to reshape lives by offering financial
                        expertise, faster growth, & securing futures through
                        trusted partnerships & innovation.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Image
                          src={vision}
                          alt="Vision Icon"
                          className="size-11"
                        />
                        <h3 className="font-medium text-2xl">Our Vision</h3>
                      </div>
                      <p className="text-lg pl-14">
                        Our vision is to create a financially secure future for
                        all, offering innovative solutions & expert guidance to
                        navigate prosperity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Story Section */}
          <section className="w-full flex flex-col lg:flex-row bg-[#f8f8f7] py-16 min-h-[70vh] my-0">
            {/* Left: Text Content */}
            <div className="lg:w-1/2 w-full p-8 lg:pr-12 flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Our Story
              </h2>
              <p className="text-gray-700 text-lg mb-10">
                With our card, you gain access to a range of exclusive benefits,
                convenient features, and unparalleled rewards that will enhance
                your everyday life.
              </p>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 h-full w-px bg-gray-300"></div>
                <div className="space-y-8">
                  {[
                    {
                      num: "01.",
                      title: "Convenience",
                      desc: "Our services offer unmatched convenience, allowing you to effortlessly manage your finances from anywhere, at any time.",
                    },
                    {
                      num: "02.",
                      title: "Time-Saving",
                      desc: "Our revolutionary solution is here to liberate you from the shackles of administrative burdens.",
                    },
                    {
                      num: "03.",
                      title: "Enhanced Security",
                      desc: "We prioritize the security of your financial information. Our robust security measures, including encryption.",
                    },
                    {
                      num: "04.",
                      title: "Access to Innovative Tools",
                      desc: "Gain access to a wide range of innovative tools and features designed to enhance your financial management.",
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex items-baseline gap-3">
                        <span className="text-gray-400 font-mono text-lg">
                          {item.num}
                        </span>
                        <span className="font-semibold text-xl text-gray-900">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-gray-600 ml-10 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Right: Image */}
            <div className="lg:w-1/2 w-full flex items-center justify-center mt-10 lg:mt-0">
              <img
                src="https://framerusercontent.com/images/zUDHecteYnTB4LOHVycktRWCYY.jpg"
                alt="Card Payment"
                className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
