import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Faq = () => {
  const [Faq1, setFaq1] = useState(false);
  const [Faq2, setFaq2] = useState(false);
  const [Faq3, setFaq3] = useState(false);
  const [Faq4, setFaq4] = useState(false);
  const handleFaq1 = () => {
    setFaq1(!Faq1);
    setFaq2(false);
    setFaq3(false);
    setFaq4(false);
  };
  const handleFaq2 = () => {
    setFaq1(false);
    setFaq2(!Faq2);
    setFaq3(false);
    setFaq4(false);
  };
  const handleFaq3 = () => {
    setFaq1(false);
    setFaq2(false);
    setFaq3(!Faq3);
    setFaq4(false);
  };
  const handleFaq4 = () => {
    setFaq1(false);
    setFaq2(false);
    setFaq3(false);
    setFaq4(!Faq4);
  };
  const FaqStyle1 = `p-7 border ${
    Faq1 ? "border-purple-400" : "border-black"
  } rounded-lg`;
  const FaqStyle2 = `p-7 border ${
    Faq2 ? "border-purple-400" : "border-black"
  } rounded-lg`;
  const FaqStyle3 = `p-7 border ${
    Faq3 ? "border-purple-400" : "border-black"
  } rounded-lg`;
  const FaqStyle4 = `p-7 border ${
    Faq4 ? "border-purple-400" : "border-black"
  } rounded-lg`;
  return (
    <div className="px-[9.5%]">
      <div className="pb-7">
        <h2 className="sm:text-5xl text-3xl font-bold">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="pb-6">
        <p className="text-gray-500 text-sm">
          If you have an further questions, please contact us.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className={FaqStyle1}>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">Will i get lifetime Updates?</p>
            </div>
            <p onClick={handleFaq1} className="text-xl font-bold">
              {Faq1 ? (
                <AiOutlinePlus className=" transform rotate-[45deg]" />
              ) : (
                <AiOutlinePlus />
              )}
            </p>
          </div>
          {Faq1 && (
            <div>
              <p>Of Course, You will!</p>
            </div>
          )}
        </div>
        <div className={FaqStyle2}>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">Will i get lifetime updates?</p>
            </div>
            <p onClick={handleFaq2} className="text-xl font-bold">
              {Faq2 ? (
                <AiOutlinePlus className=" transform rotate-[45deg]" />
              ) : (
                <AiOutlinePlus />
              )}
            </p>
          </div>
          {Faq2 && (
            <div>
              <p>Of Course, You will!</p>
            </div>
          )}
        </div>
        <div className={FaqStyle3}>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">
                Does Cartify provide code kits as well?
              </p>
            </div>
            <p onClick={handleFaq3} className="text-xl font-bold">
              {Faq3 ? (
                <AiOutlinePlus className=" transform rotate-[45deg]" />
              ) : (
                <AiOutlinePlus />
              )}
            </p>
          </div>
          {Faq3 && (
            <div className="pt-3">
              <p className="text-sm text-gray-500">
                Cartify is a Landing page UI kit for Figma. The kits consists of
                170+ blocks from 15 catergories with ready-to-use sample pages.
                Also, it comes with blocks for desktop, tablet, and mobile
                layout.
              </p>
            </div>
          )}
        </div>
        <div className={FaqStyle4}>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">Will i get lifetime Updates?</p>
            </div>
            <p onClick={handleFaq4} className="text-xl font-bold">
              {Faq4 ? (
                <AiOutlinePlus className=" transform rotate-[45deg]" />
              ) : (
                <AiOutlinePlus />
              )}
            </p>
          </div>
          {Faq4 && (
            <div>
              <p>Of Course, You will!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
