import React from "react";
import { FaCode, FaRegBookmark, FaShieldAlt } from "react-icons/fa";
import {
  MdOutlineDateRange,
  MdWork,
  MdLocationPin,
  MdWorkHistory,
} from "react-icons/md";
import { Link } from "react-router-dom";

const EmployeeCard = ({ employee }) => {
  const {
    id,
    profileImage,
    profession,
    skills,
    firstName,
    lastName,
    availability,
    location,
    years_of_experience,
    work_preference,
  } = employee;

  return (
    <>
      <div className="max-w-sm mx-auto bg-gray-200 rounded-xl overflow-hidden shadow-lg p-6 mb-4">
        <div className="flex justify-end top-2 right-2 text-blue-500 cursor-pointer">
          <FaRegBookmark className="text-blue-500 mr-2" />
        </div>
        <div className="flex items-center m-4">
          <div>
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={profileImage}
              alt="Profile"
            />
            <FaShieldAlt className="ml-10 -mt-4 text-blue-600" />
          </div>

          <div>
            <p className="text-lg font-semibold">
              {firstName} {lastName}
            </p>
            <p className="text-gray-500">{profession}</p>
          </div>
        </div>

        <div className="items-center justify-center m-4">
          <strong className="text-gray-600">
            <FaCode className="inline" /> Skills:</strong>{" "}
            {skills.map((skill, index) => (
              <button key={index} className=" bg-gray-300 h-10 w-24 rounded-full  mr-2 mb-2">
                {skill.trim()} {/* Use trim to remove extra spaces */}
              </button>
            ))}
          

          <p className="text-gray-600">
            <MdOutlineDateRange className="inline" /> Availability:{" "}
            {availability}
          </p>
          <p>
            <MdWorkHistory className="inline mr-1" />
            Experience: {years_of_experience} yrs
          </p>
          <p>
            <MdWork className="inline" /> Work Preference: {work_preference}
          </p>
          <p className="text-gray-600">
            <MdLocationPin className="inline" /> Location: {location.address}
          </p>
        </div>

        <div className="flex items-center justify-evenly m-4">
          <Link to={`/findEmployee/${id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
              View More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmployeeCard;
