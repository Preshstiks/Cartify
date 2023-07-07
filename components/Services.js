import { BsArrowRight } from "react-icons/bs";
const Services = () => {
  return (
    <div className="px-[3%] font-montserrat py-[70px]">
      <div>
        <div className="text-center">
          <h2 className="text-5xl font-semibold">Services we provide</h2>
        </div>
        <div className="text-center pb-[70px] px-[37%] pt-[25px]">
          <p className="text-gray-500 text-sm">
            We specialise in organising professional training courses.
          </p>
        </div>
        <div className="grid px-[6%] grid-cols-3 gap-3">
          <div className="bg-orange-200 p-7 rounded-3xl">
            <div>
              <h2 className="font-bold text-lg pb-4">
                Accounting and Analysis
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-500 leading-6">
                We've designed and built ecommerce experiences that has driven
                sales.
              </p>
            </div>
            <div className="pt-8">
              <button className="flex items-center font-semibold bg-white py-3 rounded-lg px-3 w-full justify-center">
                Get Started
                <span>
                  <BsArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="bg-green-200 p-7 rounded-3xl">
            <div>
              <h2 className="font-bold text-lg pb-4">Finance and Banking</h2>
            </div>
            <div>
              <p className="text-sm text-gray-500 leading-6">
                The ability to independently value an enterprise is an essential
                tool for making business and strategic decisions.
              </p>
            </div>
            <div className="pt-8">
              <button className="flex items-center font-semibold bg-white py-3 rounded-lg px-3 w-full justify-center">
                Get Started
                <span>
                  <BsArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="bg-pink-200 p-7 rounded-3xl">
            <div>
              <h2 className="font-bold text-lg pb-4">
                Strategic Business Leader
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-500 leading-6">
                Strategic Business Leader is a training course from the
                strategic professional level.
              </p>
            </div>
            <div className="pt-8">
              <button className="flex items-center font-semibold bg-white py-3 rounded-lg px-3 w-full justify-center">
                Get Started
                <span>
                  <BsArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="bg-pink-200 p-7 rounded-3xl">
            <div>
              <h2 className="font-bold text-lg pb-4">Preparatory Course</h2>
            </div>
            <div>
              <p className="text-sm text-gray-500 leading-6">
                The ability to independently value an enterprise is an essential
                tool for making business and strategic decisions.
              </p>
            </div>
            <div className="pt-8">
              <button className="flex items-center font-semibold bg-white py-3 rounded-lg px-3 w-full justify-center">
                Get Started
                <span>
                  <BsArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="bg-orange-200 p-7 rounded-3xl">
            <div>
              <h2 className="font-bold text-lg pb-4">
                Business English Writing Skills
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-500 leading-6">
                An unique opportunity to gain guidance and feedback from our
                expert.
              </p>
            </div>
            <div className="pt-8">
              <button className="flex items-center font-semibold bg-white py-3 rounded-lg px-3 w-full justify-center">
                Get Started
                <span>
                  <BsArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="bg-green-200 p-7 rounded-3xl">
            <div>
              <h2 className="font-bold text-lg pb-4">
                Strategic Business Reporting
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-500 leading-6">
                Strategic Business Reporting is a Professional level training
                course. It covers topics related to advanced financial
                reporting, including leasing.
              </p>
            </div>
            <div className="pt-8">
              <button className="flex items-center font-semibold bg-white py-3 rounded-lg px-3 w-full justify-center">
                Get Started
                <span>
                  <BsArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
