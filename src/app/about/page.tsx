import MissionImage from "@/lib/assets/features/mission.png";
import vision from "@/lib/assets/features/eye-test.png";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      {/* comapny overview */}
      <div className="bg-gradient-to-r from-teal-100/70 via-green-100/70 to-cyan-100/70 h-full ">
        <div className="flex items-start justify-center h-[35rem] flex-col space-y-6 px-32 py-12 w-[70rem]">
          <h1 className="font-medium text-6xl ">
            Empowering Your Financial Future ❤️💸
          </h1>
          <h3 className="font-medium text-lg  w-[35rem]">
            At Finnaux, our journey is rooted in one purpose — your prosperity.
            With unwavering commitment and expert insight
          </h3>
        </div>
        {/* <div className="bg-red-400 h-[40rem] flex items-center justify-start"> */}
        <div className="bg-gradient-to-r from-white/60 to-white/50 border-cyan-300 border mx-6 my-8 rounded-2xl relative p-4 h-fit">
          <div className="bg-gradient-to-b from-teal-100/80 to-teal-50 border-teal-300/60 border rounded-xl h-80 w-[28rem] absolute shadow-xl shadow-teal-100/60 right-20 -top-60 flex flex-col justify-evenly">
            <h1 className="bg-gradient-to-b from-cyan-400 to-teal-300 px-6 text-9xl text-transparent  bg-clip-text">
              18
            </h1>
            <div className="flex justify-between">
              <div className="rounded-full h-14 mx-8 w-24 bg-slate-white border-2 bg-white border-black"></div>
              <div className="pr-2 ">
                Years experience with a deep understanding of the challenges and
                opportunities
              </div>
            </div>
          </div>
          {/* mission and vision */}
          <div className="flex flex-col mt-28 mb-24 ml-24 w-fit space-y-6">
            <h1 className="text-4xl text-black font-medium w-[50rem]">
              Our mission is to make a positive impact by transforming the way
              people interact with their finances.
            </h1>
          </div>
          {/* <div>
            <h1 className="text-lg text-black font-light w-[35rem]">
              Our mission is to make a positive impact by transforming the way
              people interact with their finances.
            </h1>
          </div> */}
          <div className="flex space-x-36 px-8">
            <div className="flex flex-col flex-1 text-lg font-medium space-y-10 px-10 py-10">
              <span>
                Your success is our mission. As business advisors, we offer
                expert guidance, unlocking your potential for growth and
                profitability.
              </span>
              <span className="font-light">
                Our vision is to create a financially secure future for all,
                offering innovative solutions & expert guidance to navigate
                prosperity.
              </span>
            </div>
            <div className=" flex-1 flex items-center gap-8 py-10 px-6">
              <div className="flex flex-col space-y-12">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Image
                      src={MissionImage}
                      alt="Mission Icon"
                      className="size-11"
                    />
                    <h3 className="font-medium text-2xl">Our Mission</h3>
                  </div>
                  <p className="text-lg px-12">
                    Our mission is to reshape lives by offering financial
                    expertise, faster growth, & securing futures through trusted
                    partnerships & innovation.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Image
                      src={vision}
                      alt="Mission Icon"
                      className="size-11"
                    />
                    <h3 className="font-medium text-2xl">Our Vision</h3>
                  </div>
                  <p className="text-lg px-12">
                    Our vision is to create a financially secure future for all,
                    offering innovative solutions & expert guidance to navigate
                    prosperity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* our story */}

        <section className="w-full flex flex-col md:flex-row items-stretch justify-center bg-[#f8f8f7] py-16 px-4 min-h-[70vh]">
          {/* Left: Text Content */}
          <div className="bg-[#f8f8f7] md:w-1/2 w-full p-8 md:pr-12 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 leading-tight">
              Our Story
            </h2>
            <p className="text-gray-700 text-lg mb-10">
              With our card, you gain access to a range of exclusive benefits,
              convenient features, and unparalleled rewards that will enhance
              your everyday life.
            </p>
            <div className="relative pl-8">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 h-full w-px bg-gray-300"></div>
              {/* Features */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-gray-400 font-mono text-lg">01.</span>
                    <span className="font-semibold text-xl text-gray-900">
                      Convenience
                    </span>
                  </div>
                  <p className="text-gray-600 ml-10 mt-1">
                    Our services offer unmatched convenience, allowing you to
                    effortlessly manage your finances from anywhere, at any
                    time.
                  </p>
                </div>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-gray-400 font-mono text-lg">02.</span>
                    <span className="font-semibold text-xl text-gray-900">
                      Time-Saving
                    </span>
                  </div>
                  <p className="text-gray-600 ml-10 mt-1">
                    Our revolutionary solution is here to liberate you from the
                    shackles of administrative burdens.
                  </p>
                </div>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-gray-400 font-mono text-lg">03.</span>
                    <span className="font-semibold text-xl text-gray-900">
                      Enhanced Security
                    </span>
                  </div>
                  <p className="text-gray-600 ml-10 mt-1">
                    We prioritize the security of your financial information.
                    Our robust security measures, including encryption.
                  </p>
                </div>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-gray-400 font-mono text-lg">04.</span>
                    <span className="font-semibold text-xl text-gray-900">
                      Access to Innovative Tools
                    </span>
                  </div>
                  <p className="text-gray-600 ml-10 mt-1">
                    Gain access to a wide range of innovative tools and features
                    designed to enhance your financial management.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Image */}
          <div className="md:w-1/2 w-full flex items-center justify-center mt-10 md:mt-0">
            <img
              src="https://framerusercontent.com/images/zUDHecteYnTB4LOHVycktRWCYY.jpg" // Replace with your actual image path
              alt="Card Payment"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </section>

        {/* </div> */}
      </div>
    </>
  );
}
