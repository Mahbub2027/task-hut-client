import { MdWorkHistory } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { GiTimeTrap } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";

const CareerCard =  ({ job }) => {
  const axiosPublic = useAxiosPublic();

  const {_id,title,years_of_experience,location,
    salary,deadline,skills,responsibility,} = job;

  const handleDelete = _id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {

        if (result.isConfirmed) {
            axiosPublic.delete(`/careerjobs/${_id}`)
                .then(res => {
                    console.log(res.data)

                    if (res.data.deletedCount > 0) {
                        // refetch();
                        Swal.fire({
                            position: 'center',
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                })
        }
    });
}

  return (
    <>
      <div className="card w-96 bg-indigo-800 shadow-md text-white">
        <div className="card-body">
          <div className="text-center m-4">
            <div className="flex justify-between">
              
              <h4 className="font-bold text-center text-2xl">{title}</h4>
              <button onClick={()=>handleDelete(_id)} className="text-4xl text-white"><FaTrashAlt></FaTrashAlt></button>

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
