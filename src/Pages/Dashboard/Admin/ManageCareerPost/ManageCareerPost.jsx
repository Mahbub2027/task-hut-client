import AOS from "aos";
import "aos/dist/aos.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import CareerCard from "./CareerCard";

const Career = () => {
  const axiosPublic = useAxiosPublic();
  AOS.init();

  const { data: careerJobs = [] } = useQuery({
    queryKey: ["career"],
    queryFn: async () => {
      const res = await axiosPublic.get("/careerjobs");
      return res.data;
    },
  });



  return (
    <>
      

      <section className="bg-indigo-100 py-12 my-12">
        <h1 className="text-center drop-shadow-2xl text-indigo-600 font-extrabold text-4xl py-5">
          Manage Current Openings
        </h1>
        
        <hr className="border-1 my-12 w-4/6 mx-auto border-indigo-900" />

        <div className="flex items-center justify-center">
          <div
            id="targetSection"
            className="grid md:grid-cols-2 lg:gap-x-20 gap-y-20 lg:m-6 "
          >
            {careerJobs.map((job) => (
              <CareerCard
                key={job._id}
                job={job}
              ></CareerCard>
            ))}
          </div>
        </div>

        
      </section>

      

      
    </>
  );
};

export default Career;
