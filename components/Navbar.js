import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="font-montserrat flex justify-between items-center px-[10%] py-4">
      <div>
        <h2 className="font-bold text-2xl cursor-pointer">Cranify &trade;</h2>
      </div>
      <div className="space-x-8 flex">
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
    </div>
  );
};

export default Navbar;
