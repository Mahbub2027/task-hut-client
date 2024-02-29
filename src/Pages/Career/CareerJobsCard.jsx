import { MdWorkHistory } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { GiTimeTrap } from "react-icons/gi";

function CareerJobsCard(job) {
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
      <div className="card w-96 bg-purple-500 text-white">
        <div className="card-body">
          <div className="text-center m-4">
            <h2 className="card-title">{}</h2>
            <p>{title}</p>
            <MdWorkHistory></MdWorkHistory>
            <p>{years_of_experience}</p>
            <IoLocation></IoLocation>
            <p>{location}</p>
            <GiMoneyStack></GiMoneyStack>
            <p>{salary}</p>
            <GiTimeTrap></GiTimeTrap>
            <p>Apply before: {deadline}</p>
          </div>
          <div className="card-actions justify-end">
            <button
              className="btn"
              onClick={() => document.getElementById("modal").showModal()}
            >
              Learn More
            </button>
            <dialog
              id="modal"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">More About The Job</h3>
                <p>Job-ID: {_id}</p>
                <p className="py-4">
                  Skills: {skills}
                </p>
                <p className="py-4">
                  Responsibilities: {responsibility}
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
}
export default CareerJobsCard;
