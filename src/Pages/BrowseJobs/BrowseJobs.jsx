import { useEffect, useState } from "react";
import JobCard from "./JobCard";

function BrowseJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/public/alljobs.json");
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-7xl text-red-600 font-bold">
        These Jobs are Available at this moment. Check Back Later For More Jobs.
      </h1>

      <div className="grid grid-cols-3 items-center justify-center lg:ml-20 py-10">
        {jobs.map((job, index) => (
          <JobCard key={index} gig={job} />
        ))}
      </div>
    </>
  );
}

export default BrowseJobs;
