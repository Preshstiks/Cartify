import Background from "@/components/Backgound";
import Body from "@/components/Body";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

const Home = () => {
  return (
    <div className="bg-[#eeeeee] w-full">
      <Navbar />
      <Background />
      <Body />
      <Services />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
