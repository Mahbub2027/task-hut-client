import React from "react";
import { FaCode, FaRegBookmark } from "react-icons/fa";
import { MdOutlineDateRange, MdWork, MdLocationPin } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
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
    <div className="max-w-sm mx-auto bg-gray-200 rounded-xl overflow-hidden shadow-lg p-6 mb-4">
      <div className="flex items-center m-4">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src={profileImage} // Replace with your actual profile image URL
          alt="Profile"
        />
        <div>
          <p className="text-lg font-semibold">
            {firstName} {lastName}
          </p>
          <p className="text-gray-500">{profession}</p>
        </div>
      </div>

      <div className="items-center justify-center m-4">
        <p className="text-gray-600">
          <FaCode className="inline" /> Skills: {skills}
        </p>
        <p className="text-gray-600">
          <MdOutlineDateRange className="inline" /> Availability: {availability}
        </p>
        <p>
          <MdWork className="inline" /> Work Preference: {work_preference}
        </p>
        <p className="text-gray-600">
          <MdLocationPin className="inline" /> Location: {location.address}
        </p>
      </div>

      <div className="flex items-center justify-evenly m-4">
        <p>
          <VscWorkspaceTrusted className="inline" /> Experience:{" "}
          {years_of_experience} yrs
        </p>
        <FaRegBookmark className="text-blue-500 mr-2" />

        <Link to={`/findEmployee/${id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeCard;
