import Analytics from "../../EmployeeFeatures/Analytics";
import GigViews from "../../EmployeeFeatures/GigViews";
// TO DO: These Analytics Data are fetched from /public/file.json. We have to fetch from database 
const AccounAnalytics = () => {
  return (
    <div>
      <h2 className=" text-cyan-500 text-center text-5xl font-bold py-20">
        See Different Types of Analytics Here
      </h2>
      <div className="lg:grid grid-cols-2 gap-64">
        <div>
          <h3 className="text-cyan-500 text-center text-3xl font-bold py-10">
            Earning Last Year
          </h3>
          <Analytics></Analytics>
        </div>
        <div>
          <h3 className="text-cyan-500 text-center text-3xl font-bold py-10">
            Gig Impression and Views
          </h3>
          <GigViews/>
        </div>
      </div>
    </div>
  );
};

export default AccounAnalytics;
