import Image from "next/image";
import { BsFillPlayCircleFill } from "react-icons/bs";
const Background = () => {
  return (
    <div className="font-montserrat w-full">
      <div>
        <div className="bg-background w-full bg-no-repeat bg-cover">
          <div className="md:flex px-[9.5%] block pt-[80px] md:justify-center lg:justify-between">
            <div>
              <h2 className="lg:text-[70px] md:text-[50px] sm:text-[40px] text-[40px] font-bold">
                Academy
              </h2>
              <h2 className="lg:text-[70px] md:text-[50px] sm:text-[40px] text-[40px] mt-[-20px] font-bold">
                of Your Business
              </h2>
              <p className="w-[84%] pt-3 pb-8">
                Organizes work so teams know what to do, why it matters, and how
                to get it done.
              </p>
              <div className="flex gap-8">
                <button className="font-bold hover:bg-black text-sm sm:text-base hover:text-gray-200 py-3 px-4 sm:py-4 sm:px-6 bg-[#aaaaaa] rounded-lg">
                  Get Started
                </button>
                <div className="flex items-center gap-3">
                  <BsFillPlayCircleFill className="sm:text-5xl text-3xl" />
                  <span className="sm:text-sm text-xs font-bold">
                    View Demo
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/curly-arrow.png"
                className="absolute hidden md:block top-[10px] left-[-150px]"
                width={100}
                height={100}
              />
              <Image
                src="/side-arrow.png"
                className="absolute lg:top-[-80px] hidden lg:block lg:right-[-116px]"
                width={100}
                height={100}
              />
              <div className="sm:absolute static rounded-xl xs:flex hidden py-[15px] sm:ml-0 ml-[4%] bg-white top-[320px] left-[-50px] px-[10px] items-center gap-3">
                <div>
                  <Image
                    src="/hand.jpg"
                    className="rounded-full h-[50px] w-[50px]"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="text-sm font-extrabold">
                  Bringing your ideas to life.
                </div>
              </div>
              <div className="absolute sm:rounded-xl rounded-md lg:py-[20px] lg:h-[100px] bg-white lg:top-[170px] lg:right-[-45px] md:right-[100px] md:top-[110px] bottom-0 right-0 py-[10px] px-[15px] md:py-[10px] md:px-[15px] lg:px-[30px] flex justify-center items-center flex-col">
                <h2 className="lg:text-5xl md:text-3xl font-extrabold">40%</h2>
                <span className="text-gray-500 text-center text-sm">
                  Market
                </span>
              </div>
              <div className="h-10 w-10 transform rotate-45 bg-gray-500 hidden lg:block absolute top-[150px] border-b-2 border-black right-[-60px]"></div>
              <div className="absolute bg-black py-[20px] rounded-xl flex justify-center top-0 left-0 px-[20px]">
                <div className="text-white flex justify-center items-center flex-col">
                  <h2 className="text-4xl font-bold">6k</h2>
                  <span className="text-sm font-light">Clients</span>
                </div>
              </div>
              <div className="mt-3 md:mt-0 w-full md:min-w-[450px]">
                <Image
                  className="lg:h-[450px] lg:w-[450px] md:h-[300px] md:w-[300px] rounded-md md:rounded-full"
                  src="https://burst.shopifycdn.com/photos/local-store-owner-stands-proud.jpg?width=925&format=pjpg&exif=1&iptc=1"
                  width={600}
                  height={600}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
