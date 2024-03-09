import { MdWorkHistory } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { GiTimeTrap } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import axios from "axios";

function CareerCard({ job }) {
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

  const handleDelete = () => {
    axios.delete(`/careerjobs/${_id}`)
      .then(response => {
        console.log(response.data);
        alert("Job deleted successfully");
      })
      .catch(error => {
        console.error('Error deleting post:', error);
        alert("Error deleting the job");
      });
  };

  return (
    <>
      <div className="card w-96 bg-indigo-800 shadow-md text-white">
        <div className="card-body">
          <div className="text-center m-4">
            <div className="flex justify-between">
              
              <h4 className="font-bold text-center text-2xl">{title}</h4>
              <button onClick={handleDelete} className="text-2xl text-red-600"><MdDelete/></button>

            </div>
            <div className="flex justify-center items-center gap-x-4 my-3">
              <span className="text-2xl">
                <MdWorkHistory></MdWorkHistory>
              </span>
              <p className="text-left">
                {years_of_experience} years of experience
              </p>
            </div>

            <div className="flex justify-center items-center gap-x-4 my-3">
              <span className="text-2xl">
                <IoLocation></IoLocation>
              </span>
              <p className="text-left">{location}</p>
            </div>

            <div className="flex justify-center items-center gap-x-4 my-3">
              <span className="text-2xl">
                <GiMoneyStack></GiMoneyStack>
              </span>
              <p className="text-left">
                {" "}
                <span className="text-2xl"> ৳ </span> {salary}
              </p>
            </div>

            <div className="flex justify-center items-center gap-x-4 my-3">
              <span className="text-2xl">
                <LuBrainCircuit></LuBrainCircuit>
              </span>
              <p className="text-left"> Skills: {skills}</p>
            </div>

            <div className="flex justify-center items-center gap-x-4 my-3">
              <span className="text-2xl">
                <LuListTodo />
              </span>
              <p className="text-left"> Responsibilities: {responsibility}</p>
            </div>

            <div className="flex justify-center items-center gap-x-4 my-3">
              <span className="text-2xl">
                <GiTimeTrap></GiTimeTrap>
              </span>
              <p className="text-left"> Apply before: {deadline}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CareerCard;
