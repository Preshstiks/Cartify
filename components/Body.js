import { PiNotepadFill } from "react-icons/pi";
import { GoClockFill } from "react-icons/go";
import { AiFillSetting } from "react-icons/ai";
import { BiSolidBarChartSquare } from "react-icons/bi";
import { BsFillTriangleFill } from "react-icons/bs";
import Image from "next/image";
const Body = () => {
  return (
    <div className="px-[3%] font-montserrat pt-[60px]">
      <div>
        <div className="text-center">
          <h2 className="text-5xl font-semibold">The processs we follow</h2>
        </div>
        <div className="text-center px-[35%] pt-[25px]">
          <p className="text-gray-500 text-sm">
            As an academy of business, we are going through the development
            cycle.
          </p>
        </div>
        <div className="grid grid-cols-4 pt-[70px] text-center">
          <div className="px-[20%]">
            <div className="flex justify-center">
              <div className="py-5 px-5 rounded-full bg-green-200">
                <PiNotepadFill className="text-4xl" />
              </div>
            </div>
            <h2 className="font-bold text-lg py-2">Business idea</h2>
            <span className="text-sm text-gray-500">
              What you want your business to be.
            </span>
          </div>
          <div className="px-[20%] mt-20">
            <div className="flex justify-center">
              <div className="py-5 px-5 rounded-full bg-orange-200">
                <GoClockFill className="text-4xl" />
              </div>
            </div>
            <h2 className="font-bold text-lg py-2">Planning</h2>
            <span className="text-sm text-gray-500">
              A business plan helps formalize your idea.
            </span>
          </div>
          <div className="px-[20%]">
            <div className="flex justify-center">
              <div className="py-5 px-5 rounded-full bg-pink-200">
                <AiFillSetting className="text-4xl" />
              </div>
            </div>
            <h2 className="font-bold text-lg py-2">Develop</h2>
            <span className="text-sm text-gray-500">
              Ideation, prototyping, costing of your product.
            </span>
          </div>
          <div className="px-[23%] mt-20">
            <div className="flex justify-center">
              <div className="py-5 px-5 rounded-full bg-violet-200">
                <BiSolidBarChartSquare className="text-4xl" />
              </div>
            </div>
            <h2 className="font-bold text-lg py-2">Business structure</h2>
            <span className="text-sm text-gray-500">
              Key parts of your business.
            </span>
          </div>
        </div>
        <div className="mt-[170px]">
          {/* card story */}
          <div className="relative">
            <div className="bg-black px-10 py-20 rounded-2xl items-center flex mx-[6%]">
              <div className="w-[50%]"></div>
              <div>
                <div>
                  <h2 className="text-white text-3xl font-bold">Our Story</h2>
                  <p className="text-white text-sm font-light leading-9">
                    We specialise in organising professional courses and we have
                    been doing it in poland since 1994. As an academy of
                    business we are going through the development cycle.
                  </p>
                  <button className="font-bold py-4 border border-black px-6 hover:border-gray-200 hover:bg-transparent hover:text-gray-200 bg-[#aaaaaa] rounded-lg">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-[-50px] left-[130px]">
              <Image
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                width={250}
                height={250}
                className="rounded-2xl"
              />
            </div>
            <span className="absolute top-[-50px] right-[60px]">
              <BsFillTriangleFill className="transform rotate-[-30deg] text-yellow-400 text-[80px]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
