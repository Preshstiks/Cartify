import { IoIosArrowDown } from "react-icons/io";
import { BsPlusLg } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };
  return (
    <div className="font-montserrat flex justify-between items-center px-[10%] py-8">
      <div>
        <h2 className="font-bold text-2xl cursor-pointer">Cartify &trade;</h2>
      </div>
      <HiMenu onClick={handleShow} className="text-4xl md:hidden block" />
      <div className="gap-4 hidden md:flex">
        <span className="text-sm flex items-center gap-2 cursor-pointer">
          Product <IoIosArrowDown />
        </span>
        <span className="text-sm flex items-center gap-2 cursor-pointer">
          Solutions <IoIosArrowDown />
        </span>
        <span className="text-sm flex items-center gap-2 cursor-pointer">
          Resources <IoIosArrowDown />
        </span>
        <span className="text-sm flex items-center gap-2 cursor-pointer">
          Pricing <IoIosArrowDown />
        </span>
        <span className="text-sm py-4 px-6 hover:bg-transparent hover:border hover:text-black hover:border-black bg-black border font-bold border-black text-white rounded-lg flex items-center gap-2 cursor-pointer">
          Subscribe
        </span>
      </div>
      {show && (
        <div className="md:hidden block px-[15%] h-full bg-black text-white pt-[70px] absolute z-20 top-0 right-0">
          <BsPlusLg
            onClick={handleHide}
            className="text-4xl transform rotate-45 absolute top-7 left-7"
          />
          <div className="text-lg py-4 flex items-center gap-2 cursor-pointer">
            Product <IoIosArrowDown />
          </div>
          <div className="text-lg py-4 flex items-center gap-2 cursor-pointer">
            Solutions <IoIosArrowDown />
          </div>
          <div className="text-lg py-4 flex items-center gap-2 cursor-pointer">
            Resources <IoIosArrowDown />
          </div>
          <div className="text-lg py-4 flex items-center gap-2 cursor-pointer">
            Pricing <IoIosArrowDown />
          </div>
          <div className="text-lg my-4 py-4 px-6 bg-white border font-bold border-black text-black rounded-lg flex items-center gap-2 cursor-pointer">
            Subscribe
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
