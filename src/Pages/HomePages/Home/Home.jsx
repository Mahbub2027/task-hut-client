import { Helmet } from "react-helmet";
import Banner from "../HomeComponents/Banner";
import WhyUs from "../HomeComponents/WhyUs";
import TopTalent from "../HomeComponents/TopTalent";
import Reviews from "../HomeComponents/Reviews";
import Statistics from "../../AboutUs/Statistics";
import Services from "../HomeComponents/Services";
import FindCareer from "../HomeComponents/FindCareer";
import ReviewForm from "../HomeComponents/ReviewForm";

const Home = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Home || TaskHut</title>
      </Helmet>

      <Banner></Banner>
      <Statistics></Statistics>
      <Services></Services>
      <WhyUs></WhyUs>
      <TopTalent></TopTalent>
      <FindCareer></FindCareer>
      <ReviewForm></ReviewForm>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
