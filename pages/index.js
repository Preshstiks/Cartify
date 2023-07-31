import Background from "@/components/Backgound";
import Body from "@/components/Body";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

const Home = () => {
  return (
    <div className="bg-[#eeeeee] w-full">
      <Navbar />
      <Background />
      <Body />
      <Services />
    </div>
  );
};

export default Home;
