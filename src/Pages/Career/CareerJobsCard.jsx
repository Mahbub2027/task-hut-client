import { MdWorkHistory } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { GiTimeTrap } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";


function CareerJobsCard({job}) {
  const {
    _id,
    title,
    years_of_experience,
    location,
    salary,
    deadline,
    skills,
    responsibility,
  } = job;



  return (

    <>
      <div className="card w-96 bg-indigo-800 shadow-md text-white">
        <div className="card-body">
          <div className="text-center m-4">
            {/* <h2 className="card-title">{title}</h2> */}
            <h4 className="font-bold text-center text-2xl">{title}</h4>

            <div className="flex justify-center items-center gap-x-4 my-3">
            <span className="text-2xl"><MdWorkHistory></MdWorkHistory></span>
            <p className="text-left">{years_of_experience} years of experience</p>
            </div>


            <div className="flex justify-center items-center gap-x-4 my-3">
            <span className="text-2xl"><IoLocation></IoLocation></span>
            <p className="text-left">{location}</p>
            </div>


            <div className="flex justify-center items-center gap-x-4 my-3">
            <span className="text-2xl"><GiMoneyStack></GiMoneyStack></span>
            <p className="text-left"> <span className="text-2xl"> ৳ </span> {salary}</p>
            </div>

            

            <div className="flex justify-center items-center gap-x-4 my-3">
            <span className="text-2xl"><LuBrainCircuit></LuBrainCircuit></span>
            <p className="text-left"> Skills: {skills}</p>
            </div>
            
            <div className="flex justify-center items-center gap-x-4 my-3">
            <span className="text-2xl"><LuListTodo/></span>
            <p className="text-left"> Responsibilities: {responsibility}</p>
            </div>

            <div className="flex justify-center items-center gap-x-4 my-3">
            <span className="text-2xl"><GiTimeTrap></GiTimeTrap></span>
            <p className="text-left"> Apply before: {deadline}</p>
            </div>

          </div>


          {/* <div className="card-actions justify-end">
            <button
              className="btn"
              onClick={() => document.getElementById("modal").showModal()}
            >
              Learn More
            </button> */}

            {/* <dialog
              id="modal"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box text-black">
                <h3 className="font-bold text-lg text-center">More About The Job</h3>
                <div className="ml-4">
                <p className="mt-4">Job-ID: {_id}</p>
                <p className="pt-4">
                  Skills: {skills}
                </p>
                <p className="pt-4">
                  Responsibilities: {responsibility}
                </p>

                </div>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn bg-indigo-800 shadow-md text-white hover:bg-indigo-600">Close</button>
                  </form>
                </div>
              </div>
            </dialog> */}

          {/* </div> */}
        </div>
      </div>
    </>
  );
}
export default CareerJobsCard;
