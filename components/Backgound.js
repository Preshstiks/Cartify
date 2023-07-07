import Image from "next/image";
import { BsFillPlayCircleFill } from "react-icons/bs";
const Background = () => {
  return (
    <div className="font-montserrat">
      <div>
        <div className="bg-background h-screen w-full bg-no-repeat bg-cover">
          <div className="flex px-[9.5%] pt-[80px] justify-between">
            <div>
              <h2 className="text-[70px] font-bold">Academy</h2>
              <h2 className="text-[70px] mt-[-20px] font-bold">
                of Your Business
              </h2>
              <p className="w-[84%] pt-3 pb-8">
                Organizes work so teams know what to do, why it matters, and how
                to get it done.
              </p>
              <div className="flex gap-8">
                <button className="font-bold hover:bg-black hover:text-gray-200 py-4 px-6 bg-[#aaaaaa] rounded-lg">
                  Get Started
                </button>
                <div className="flex items-center gap-3">
                  <BsFillPlayCircleFill className="text-5xl" />
                  <span className="text-sm font-bold">View Demo</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/curly-arrow.png"
                className="absolute top-[10px] left-[-150px]"
                width={100}
                height={100}
              />

              <Image
                src="/side-arrow.png"
                className="absolute top-[-80px] right-[-116px]"
                width={100}
                height={100}
              />
              <div className="absolute rounded-xl py-[15px] bg-white top-[320px] left-[-50px] px-[10px] flex items-center gap-3">
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
              <div className="absolute rounded-xl py-[20px] bg-white top-[170px] right-[-45px] px-[30px] flex justify-center items-center flex-col">
                <h2 className="text-5xl font-extrabold">40%</h2>
                <span className="text-gray-500 text-center text-sm">
                  Market
                </span>
              </div>
              <div className="h-10 w-10 transform rotate-45 bg-gray-500 absolute top-[150px] border-b-2 border-black right-[-60px]"></div>
              <div className="absolute bg-black py-[20px] rounded-xl flex justify-center top-0 left-0 px-[20px]">
                <div className="text-white flex justify-center items-center flex-col">
                  <h2 className="text-4xl font-bold">6k</h2>
                  <span className="text-sm font-light">Clients</span>
                </div>
              </div>
              <div className="min-w-[450px]">
                <Image
                  className="h-[450px] w-[450px] rounded-full"
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
