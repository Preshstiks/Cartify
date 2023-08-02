import { PiNotepadFill } from "react-icons/pi";
import { GoClockFill } from "react-icons/go";
import { AiFillSetting } from "react-icons/ai";
import { BiSolidBarChartSquare } from "react-icons/bi";
import { BsFillTriangleFill } from "react-icons/bs";
import Image from "next/image";
const Body = () => {
  return (
    <div className="px-[3%] font-montserrat pt-[60px] w-full">
      <div>
        <div className="text-center">
          <h2 className="sm:text-5xl text-3xl font-semibold">
            The processs we follow
          </h2>
        </div>
        <div className="text-center sm:px-[35%] px-[20%] pt-[25px]">
          <p className="text-gray-500 text-sm">
            As an academy of business, we are going through the development
            cycle.
          </p>
        </div>
        <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-0 gap-3 pt-[70px] text-center">
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
          <div className="px-[20%] sm:mt-20">
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
          <div className="px-[23%] sm:mt-20">
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
          <div className="relative xmd:block flex items-center flex-col-reverse">
            <div className="bg-black px-10 py-20 rounded-2xl items-center flex xmd:mx-[6%]">
              <div className="xmd:w-[50%]"></div>
              <div>
                <div className="1xl:px-0 11xl:px-[10%] lg:px-[20%] md:px-[30%] xmd:px-[30%] px-0">
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
            <div className="xmd:absolute z-0 xmd:mb-0 mb-4 static top-[-50px] left-[130px]">
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                  width={250}
                  height={250}
                  className="rounded-2xl xmd:h-[350px] xmd:w-[250px]"
                />
              </div>
            </div>
            <span className="absolute xmd:top-[-50px] top-[330px] right-0 xmd:right-[60px]">
              <BsFillTriangleFill className="transform rotate-[-30deg] text-yellow-400 text-[80px]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
