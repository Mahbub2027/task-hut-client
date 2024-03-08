import { TiTick } from "react-icons/ti";
import logo from "../../../public/TaskhutClear.png";
import CareerJobsCard from "./CareerJobsCard";
// import {  useState } from "react";
// import { useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Career = () => {
  const axiosPublic = useAxiosPublic();
  AOS.init();

  const {data: careerJobs = [] } = useQuery({
    queryKey: ['career'],
    queryFn: async () => {
        const res = await axiosPublic.get('/careerjobs');
        return res.data;
    }
})


  
  const people = [
    {
      name: "John Smith",
      role: "Lead Developer",
      imageUrl:
        "https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Emily Jones",
      role: "Marketing Manager",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Muhammad A. Rahim",
      role: "HR Coordinator",
      imageUrl:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Michael Lee",
      role: "Product Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sarah Mariam",
      role: "Customer Success Specialist",
      imageUrl:
        "https://images.unsplash.com/photo-1574297500578-afae55026ff3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "David Wang",
      role: "Senior Data Analyst",
      imageUrl:
        "https://images.pexels.com/photos/8872506/pexels-photo-8872506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  // const loadedjobs = useLoaderData();
  // const [jobs,setJobs] = useState(loadedjobs);
 

  return (
    <>
      <section>
        <div className="flex justify-between">
          <div>
            <h3 className="text-black text-2xl font-bold px-12 py-6">
              Task<span className="text-purple-500">Hut</span> Careers
            </h3>
            <h1 className="text-black lg:text-5xl sm:text-2xl lg:font-extrabold sm:font-semibold lg:px-12 ">
              Find Your Best Opportunity!
            </h1>
            <p className="font-semibold lg:px-12 py-6 text-balance">
              At TaskHut, we believe in the power of passionate individuals
              coming together to create something extraordinary. <br /> Welcome
              to our Career Hub, where we invite you to explore opportunities
              that align with your aspirations, skills, and ambitions.
            </p>
            <p className="font-semibold lg:px-12 text-balance">
              Are you ready to join us on this exciting journey? <br /> Explore
              our current openings, learn more about our culture, and envision
              yourself as part of the TaskHut family. Your next career milestone
              awaits!
            </p>
            <button className="btn btn-primary rounded-3xl mx-12 my-6">
              View Open Positions
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="w-1/2 h-1/2 p-12"
          >
            <img
              className="rounded-2xl"
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-center drop-shadow-2xl text-purple-600 font-extrabold text-4xl py-5">
          Company Culture
        </h1>
        <div className="lg:flex justify-evenly">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            className="py-6"
          >
            <img
              className="lg:w-96 sm:w-64 rounded-3xl"
              src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            className="py-6"
          >
            <h3 className="flex font-bold text-2xl py-1 items-center">
              <TiTick></TiTick> Collaboration and Teamwork
            </h3>
            <h3 className="flex font-bold text-2xl py-1 items-center">
              <TiTick></TiTick> Innovation and Creativity
            </h3>
            <h3 className="flex font-bold text-2xl py-1 items-center">
              <TiTick></TiTick> Continuous Learning and Growth
            </h3>
            <h3 className="flex font-bold text-2xl py-1 items-center">
              <TiTick></TiTick> Work-Life Balance
            </h3>
            <h3 className="flex font-bold text-2xl py-1 items-center">
              <TiTick></TiTick> Diversity and Inclusion
            </h3>
            <h3 className="flex font-bold text-2xl py-1 items-center">
              <TiTick></TiTick> Community Impact
            </h3>
            <h3 className="flex font-bold text-2xl py-1 items-center">
              <TiTick></TiTick> Fun and Celebration
            </h3>
          </div>
        </div>
      </section>

      <section>
        <div className="hidden lg:block">
          <h1 className="text-center drop-shadow-2xl text-purple-600 font-extrabold text-4xl py-5">
            Selection Process
          </h1>
          <div className="flex justify-center">
            <ul className="timeline">
              <li>
                <div className="timeline-start timeline-box">
                  Application Submission
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">
                  Initial Screening
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-start timeline-box">
                  Assessment and Interviews
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">
                  Decision and Offer
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start timeline-box">
                  Onboarding and Integration
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-purple-100 py-12">
        <h1 className="text-center drop-shadow-2xl text-purple-600 font-extrabold text-4xl py-5">
          Ready to Start Your Journey?
        </h1>
        <h3 className="text-center  font-bold text-2xl py-5 text-balance">
          Explore our current openings and take the first step toward a
          rewarding career at TaskHut. If you have any questions about our
          recruitment process or available opportunities, don`t hesitate to
          reach out to our recruitment team. We`re here to help!
        </h3>
        <div className='grid md:grid-cols-2 gap-6 lg:m-6'>

      {
        careerJobs.map(job => <CareerJobsCard
          key={job._id}
          job={job}
          // jobs={jobs}
          // setJobs={setJobs}
        ></CareerJobsCard>)
      }
      </div>
        
      </section>

      <h1 className="text-center drop-shadow-2xl text-purple-600 font-extrabold text-4xl my-12">
        Message From the CEO
      </h1>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img className="mx-auto h-12" src={logo} alt="" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Team TaskHut, Your dedication fuels our success. Thank you for
                all you do. Together, we`ll continue to thrive and innovate.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Judith Black</div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600 font-bold">
                  CEO of Task<span className="text-purple-500">Hut</span>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Meet our Team
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our Team: The Heart of TaskHut Get to know the talented
                individuals who drive innovation and excellence at TaskHut. Meet
                the faces behind our success.
              </p>
            </div>
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Career;
