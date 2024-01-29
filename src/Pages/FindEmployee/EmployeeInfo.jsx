import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Helmet } from "react-helmet";
import axios from "axios";
import { MdEmail } from "react-icons/md";
import {
  FaPhoneAlt,
  FaDownload,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";


const EmployeeInfo = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/public/employees.json");
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Helmet>
        <title>Employee Details || TaskHut</title>
      </Helmet>
      <header>
        <Link to="/findEmployee">
          <RiArrowGoBackFill className="font-bold text-2xl" />
        </Link>
      </header>

      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-3xl bg-white p-8 rounded shadow-md">
          <h1 className="text-2xl font-bold mb-4">Employee Details</h1>
          {employees.map((employee) => (
            <div key={employee.id} className="mb-8">
              <img
                src={employee.profileImage}
                className="rounded-full w-20 h-20 object-cover mb-4"
              />
              <h2 className="text-xl font-bold">
                {employee.firstName} {employee.lastName}
              </h2>
              <p className="text-gray-600 mb-2">{employee.profession}</p>
              <p className="text-gray-600 mb-4">
                <MdEmail className="inline" /> {employee.email}
              </p>
              <p className="text-gray-800 mb-4">
                <span className="font-bold text-black">About: </span>
                {employee.description}
              </p>

              <div className="flex">
                <div className="mr-4 flex justify-between ">
                  <strong className="mr-2">Skills: </strong>
                  <ul className="flex justify-evenly">
                    {employee.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex ">
                  <strong className="mr-2">Location:</strong>
                  <p>{`${employee.location.address}, ${employee.location.city}, ${employee.location.zip}, ${employee.location.country}`}</p>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="flex mr-10">
                  <strong className="mr-2">Work Preference:</strong>
                  <p>{`${employee.work_preference}`}</p>
                </div>
                <div className="flex mr-10">
                  <strong className="mr-2">Availability:</strong>
                  <p>{`${employee.availability}`}</p>
                </div>
                <div className="flex mr-10">
                  <strong className="mr-2">Experience:</strong>
                  <p>{`${employee.years_of_experience}`} Years</p>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="flex mr-10">
                  <strong className="mr-2">Languages:</strong>
                  <p>{`${employee.language}`}</p>
                </div>
                <div className="flex mr-10">
                  <strong className="mr-2">Links:</strong>
                  <div className="flex gap-3 items-center justify-center">
                    <Link to="https://www.facebook.com/" target="_blank">
                      <FaFacebook />
                    </Link>
                    <Link to="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin />
                    </Link>
                    <Link to="https://www.github.com/" target="_blank">
                      <FaGithub />
                    </Link>
                  </div>
                </div>
                <div className="flex mr-10">
                  <p>
                    <FaPhoneAlt className="inline" />
                    {`${employee.phone}`}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex justify-around">
                <div>
                  <button className="btn btn-primary"><FaDownload className="text-2xl"/>CV</button>
                </div>
                <div>
                  <button className=" btn btn-active btn-neutral"><RiFilePaper2Line className="text-2xl"/> Resume</button>
                </div>
                <div>
                  <button className=" btn btn-secondary"><TiMessages className="text-2xl"/> Contact</button>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EmployeeInfo;
