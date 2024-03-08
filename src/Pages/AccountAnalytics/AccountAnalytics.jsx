import { FaBriefcase, FaStar, FaUserTie } from "react-icons/fa6";
import Analytics from "../../EmployeeFeatures/Analytics";
import GigViews from "../../EmployeeFeatures/GigViews";
import { IoBusiness } from "react-icons/io5";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
// TO DO: These Analytics Data are fetched from /public/file.json. We have to fetch from database 
const AccountAnalytics = () => {

  const axiosPublic = useAxiosPublic();
  const [company, setCompany] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    axiosPublic.get('/companies').then(res => {
        setCompany(res.data);
      });
    axiosPublic.get('/employees') .then(result => {
        setEmployees(result.data);
      });
    axiosPublic.get('/jobs').then(res => {
        setJobs(res.data);
      });
    axiosPublic.get('/reviews')
      .then(reviewInfo => setReviews(reviewInfo.data));
  }, [axiosPublic]);



  const allRatings = reviews.map(review => review.rating);

  let totalRatings = allRatings.slice(0, 6).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  

  return (
    <div className=" my-10 p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-8">
        <div className="w-[28dvw] lg:w-[32dvw] group p-10 flex items-center justify-around rounded-2xl shadow bg-gradient-to-br from-emerald-300 via-emerald-400 to-emerald-500">
          <div className="relative">
            <IoBusiness className="absolute -top-1 -left-1 w-20 h-20 text-emerald-800" />
            <IoBusiness className="rotate-6 group-hover:rotate-0 w-20 h-20 text-emerald-100" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-6xl font-extrabold text-emerald-100">{company.length}</p>
            <small className="text-emerald-200 text-lg font-medium">Companies</small>
          </div>
        </div>

        <div className="w-[28dvw] lg:w-[32dvw] group p-10 flex items-center justify-around rounded-2xl shadow bg-gradient-to-br from-indigo-300 via-indigo-400 to-indigo-500">
          <div className="relative">
            <FaUserTie className="absolute -top-1 -left-1 w-20 h-20 text-indigo-800" />
            <FaUserTie className="rotate-6 group-hover:rotate-0 w-20 h-20 text-indigo-100" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-6xl font-extrabold text-indigo-100">{employees.length}</p>
            <small className="text-indigo-200 text-lg font-medium">Employees</small>
          </div>
        </div>

        <div className="w-[28dvw] lg:w-[32dvw] group p-10 flex items-center justify-around rounded-2xl shadow bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500">
          <div className="relative">
            <FaBriefcase className="absolute -top-1 -left-1 w-20 h-20 text-purple-800" />
            <FaBriefcase className="rotate-6 group-hover:rotate-0 w-20 h-20 text-purple-100" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-6xl font-extrabold text-purple-100">{jobs.length}</p>
            <small className="text-purple-200 text-lg font-medium">Jobs</small>
          </div>
        </div>

        <div className="w-[28dvw] lg:w-[32dvw] group p-10 flex items-center justify-around rounded-2xl shadow bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500">
          <div className="relative">
            <FaStar className="absolute -top-1 -left-1 w-20 h-20 text-amber-800" />
            <FaStar className="rotate-6 group-hover:rotate-0 w-20 h-20 text-amber-100" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-6xl font-extrabold text-amber-100">{(totalRatings / allRatings.slice(0, 6).length).toFixed(1)}</p>
            <small className="text-amber-200 text-lg font-medium">Ratings</small>
          </div>
        </div>

      </div>
      {/* <div className="flex flex-col xl:flex-row gap-10">
        <div className="rounded-3xl shadow hover:shadow-md">
          <h3 className="text-slate-700 text-center text-xl font-semibold py-4">Company & Employee Engaged In 2023</h3>
          <Analytics />
        </div>
        <div className="rounded-3xl shadow hover:shadow-md ">
          <h3 className="text-slate-700 text-center text-xl font-semibold py-4">
            Gig Impression and Views
          </h3>
          <GigViews />
        </div>
      </div> */}
    </div>
  );
};

export default AccountAnalytics;
