import { Helmet } from "react-helmet";
import Banner from "../../../ComponentsUI/HomeComponents/Banner";
import HowItWorks from "../../../ComponentsUI/HomeComponents/HowItWorks";
import WhyUs from "../../../ComponentsUI/HomeComponents/WhyUs";
import TopTalent from "../../../ComponentsUI/HomeComponents/TopTalent";
// import Reviews from "../../../ComponentsUI/HomeComponents/Reviews";
import Reviews from "../../../ComponentsUI/HomeComponents/Reviews&Feedback";
import Statistics from "../../AboutUs/Statistics";
import Services from "../../../ComponentsUI/HomeComponents/Services";
// import BannerHome from "../Banner/BannerHome";

const Home = () => {
  return (
    <div className="bg-white mx-auto">
      <Helmet>
        <title>Home || TaskHut</title>
      </Helmet>

      {/* <BannerHome></BannerHome> */}
      <Banner></Banner>
      <Statistics></Statistics>
      <Services></Services>
      {/* <HowItWorks></HowItWorks> */}
      <WhyUs></WhyUs>
      <TopTalent></TopTalent>
      {/* <Reviews></Reviews> */}
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
