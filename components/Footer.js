const Footer = () => {
  return (
    <div className="bg-black py-10 text-white px-[9.5%] mt-[60px]">
      <div className="sm:flex block justify-between flex-wrap">
        <div className="">
          <div>
            <h2 className="font-bold text-2xl">Cartify &trade;</h2>
          </div>
        </div>
        <div className="sm:pt-0 pt-4">
          <h2 className="font-semibold pb-3 text-lg">Menu</h2>
          <p className="text-sm py-2 font-light">Services</p>
          <p className="text-sm py-2 font-light">Works</p>
          <p className="text-sm py-2 font-light">About</p>
          <p className="text-sm py-2 font-light">Contact</p>
        </div>
        <div className="sm:pt-0 pt-4">
          <h2 className="font-semibold pb-3 text-lg">Connect</h2>
          <p className="text-sm py-2 font-light">LinkedIn</p>
          <p className="text-sm py-2 font-light">Facebook</p>
          <p className="text-sm py-2 font-light">Twitter</p>
          <p className="text-sm py-2 font-light">Instagram</p>
        </div>
        <div className="sm:pt-0 pt-4">
          <div className="pb-6">
            <h2>Subscribe to our Newsletter!</h2>
          </div>
          <div className="xxs:flex block items-center gap-4">
            <div className="">
              <input
                className="py-[12px] rounded-lg px-6 text-black !outline-none "
                placeholder="Your email"
                type="email"
              />
            </div>
            <button className="xxs:mt-0 mt-3 font-bold py-3 border border-black px-4 hover:border-gray-200 text-black hover:bg-transparent hover:text-gray-200 bg-[#aaaaaa] rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-xs flex mt-10 items-center flex-col sm:flex-row sm:justify-between">
        <div>
          <span>2023 Cartify, All rights reserved</span>
        </div>
        <div className="flex items-center gap-2 xxs:gap-4">
          <div>Privacy policy</div>
          <div>Terms & Conditions</div>
          <div>Code of Conduct</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
