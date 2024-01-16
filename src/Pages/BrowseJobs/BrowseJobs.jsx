import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import Swal from "sweetalert2";

function BrowseJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/public/alljobs.json");
        const data = await response.json();
        setJobs(data);
        Swal.fire({
          title: "These Jobs are Available at this moment. Check Back Later For More Jobs.",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 items-center justify-center lg:ml-20 py-10">
        {jobs.map((job, index) => (
          <JobCard key={index} gig={job} />
        ))}
      </div>
    </>
  );
}

export default BrowseJobs;
