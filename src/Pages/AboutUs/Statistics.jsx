import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

function Statistics() {
  const axiosPublic = useAxiosPublic();
  const [company, setCompany] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [reviews, setReviews] = useState([]);
  

  useEffect(() => {
    axiosPublic.get("/companies").then((res) => {
      setCompany(res.data);
    });
    axiosPublic.get("/employees").then((res) => {
      setEmployee(res.data);
    });
    axiosPublic.get("/jobs").then((res) => {
      setJobs(res.data);
    });
    axiosPublic.get("/reviews").then((res) => {
      setReviews(res.data);
    });

    // const countRatings = () => {

    //   console.log("review data length: "+reviews.length)
    //   console.log("rating count");

    //   reviews.map((review) => {
    //     console.log("rating: " + review.rating);
    //     const x=review.rating;
    //     parseInt(x,10)
    //     console.log(typeof x);
    //     if(typeof x!=Number){ setRating(rating + x)}else{console.log("rating data type is undefined")}
       
    //   });
    //   console.log("total rating:"+rating)
    // };
    // countRatings();
  }, [axiosPublic]);

  const allRatings = reviews.map(review => review.rating);

  let totalRatings = allRatings.slice(0, 6).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <div className="w-full text-center">
      <div className="shadow-xl bg-indigo-900 flex flex-col md:flex-row w-full">
        <div className="hover:bg-indigo-500 w-full p-4 md:p-8">
          <div className="text-3xl md:text-5xl font-bold pb-1 text-white">
            {employee.length}
          </div>
          <div className="text-xs md:text-sm text-indigo-200">Employees</div>
        </div>

        <div className="bg-indigo-500 w-full p-4 md:p-8">
          <div className="text-3xl md:text-5xl font-bold pb-1 text-white">
            {jobs.length}
          </div>
          <div className="text-xs md:text-sm text-indigo-200">Job Posted</div>
        </div>

        <div className="hover:bg-indigo-500 w-full p-4 md:p-8">
          <div className="text-3xl md:text-5xl font-bold pb-1 text-white">
            {company.length}
          </div>
          <div className="text-xs md:text-sm text-indigo-200">Companies</div>
        </div>

        <div className="hover:bg-indigo-500 w-full p-4 md:p-8">
          <div className="text-3xl md:text-5xl font-bold pb-1 text-white">
            {(totalRatings/allRatings.slice(0,6).length).toFixed(1)}
          </div>
          <div className="text-xs md:text-sm text-indigo-200">Ratings</div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
