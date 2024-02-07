import { Helmet } from "react-helmet";
import Banner from "../HomeComponents/Banner";
import WhyUs from "../HomeComponents/WhyUs";
import TopTalent from "../HomeComponents/TopTalent";
import Reviews from "../HomeComponents/Reviews";
import Statistics from "../../AboutUs/Statistics";
import Services from "../HomeComponents/Services";

const Home = () => {
  return (
    <div className="bg-white mx-auto">
      <Helmet>
        <title>Home || TaskHut</title>
      </Helmet>

      <Banner></Banner>
      <Statistics></Statistics>
      <WhyUs></WhyUs>
      <Services></Services>
      {/* <HowItWorks></HowItWorks> */}
      <TopTalent></TopTalent>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
