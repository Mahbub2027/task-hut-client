import { Helmet } from "react-helmet";
import Banner from "../../../ComponentsUI/HomeComponents/Banner";
import HowItWorks from "../../../ComponentsUI/HomeComponents/HowItWorks";
import WhyUs from "../../../ComponentsUI/HomeComponents/WhyUs";
import TopTalent from "../../../ComponentsUI/HomeComponents/TopTalent";
import Reviews from "../../../ComponentsUI/HomeComponents/Reviews";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home || TaskHut</title>
      </Helmet>

      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <WhyUs></WhyUs>
      <TopTalent></TopTalent>
      <Reviews></Reviews>
      
    </>
  );
};

export default Home;
