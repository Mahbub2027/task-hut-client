import React, { useEffect, useRef, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Employees from "./Employee/Employees";

const FindEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [allEmployee,setAllEmployee]=useState([])
  const [filterdEmployee, setFilterdEmployee] = useState("");
  const axiosPublic = useAxiosPublic();
  const searchRef = useRef();

  useEffect(() => {
    axiosPublic.get("/employees").then((result) => {
      // const userData = result.data.filter((item) => item.role === 'user');
      setAllEmployee(result.data);
      setEmployees(result.data)
    });
  }, [setAllEmployee]);

  const handleSearch = () => {
    const search = searchRef?.current?.value.toLowerCase();
    console.log(search);

    const employeeFilter = allEmployee.filter((employee) =>
      employee.name.toLowerCase().includes(search)
    );
    // console.log(jobFilter);
    setEmployees(employeeFilter);
  };

  const handleFilter = () => {
    console.log("filter data" + filterdEmployee);
    const search = filterdEmployee;
    const employeeFilter = allEmployee.filter((employee) =>
      employee.workPreference.toLowerCase().includes(search)
    );
    setEmployees(employeeFilter);
  };

  return (
    <div className="w-10/12 mx-auto mb-20">
      <div className="text-center space-y-4 w-full md:w-2/3 mx-auto my-10">
        <h2 className="text-slate-700 text-3xl md:text-5xl font-extrabold">
          Find Top Talents
        </h2>
        <p className="text-slate-500 text-lg md:text-2xl font-medium leading-3">
          Search talented{" "}
          <span className="bg-emerald-100 p-1">professionals</span> for your
          company by our top{" "}
          <span className="bg-emerald-100 p-1">Categories</span>
        </p>
      </div>
      <div className="w-full lg:w-1/2 bg-slate-300 p-4 rounded-full mx-auto my-20 ">
        <div className="flex items-center gap-4">
          <label className="grow input input-bordered rounded-full flex items-center gap-2">
            <input
              ref={searchRef}
              type="text"
              className="grow"
              placeholder="Search employee by name"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <button onClick={handleSearch} className="secondary-btn">
            Search
          </button>
        </div>
        <div className="flex gap-4 items-center px-4 pt-2">
          <p>Filter: </p>
          <div className="flex gap-2 items-center">
          <label
              className="bg-slate-200 rounded-full px-2 hover:cursor-pointer"
              htmlFor="all"
            >
              All
              <input
                onClick={(e) => {
                  setEmployees(allEmployee)
                }}
                className="hidden"
                name="job-type"
                id="all"
                type="radio"

              />
            </label>
            <label
              className="bg-slate-200 rounded-full px-2 hover:cursor-pointer"
              htmlFor="full-time"
            >
              Full-time
              <input
                onClick={(e) => {
                  setFilterdEmployee(e.target.value), handleFilter();
                }}
                className="hidden"
                name="job-type"
                id="full-time"
                type="radio"
                value="full time"
              />
            </label>
            <label
              className="bg-slate-200 rounded-full px-2 hover:cursor-pointer"
              htmlFor="part-time"
            >
              Part-time
              <input
                onClick={(e) => {
                  setFilterdEmployee(e.target.value), handleFilter();
                }}
                className="hidden"
                name="job-type"
                id="part-time"
                type="radio"
                value="part time"
              />
            </label>
            <label
              className="bg-slate-200 rounded-full px-2 hover:cursor-pointer"
              htmlFor="intern"
            >
              Intern
              <input
                onClick={(e) => {
                  setFilterdEmployee(e.target.value), handleFilter();
                }}
                className="hidden"
                name="job-type"
                id="intern"
                type="radio"
                value="intern"
              />
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <label
              className="bg-slate-200 rounded-full px-2 hover:cursor-pointer"
              htmlFor="remote"
            >
              Remote
              <input
                onClick={(e) => {
                  setFilterdEmployee(e.target.value), handleFilter();
                }}
                className="hidden"
                name="work-preference"
                id="remote"
                type="radio"
                value="remote"
              />
            </label>
            <label
              className="bg-slate-200 rounded-full px-2 hover:cursor-pointer"
              htmlFor="on-site"
            >
              On-site
              <input
                onClick={(e) => {
                  setFilterdEmployee(e.target.value), handleFilter();
                }}
                className="hidden"
                name="work-preference"
                id="on-site"
                type="radio"
                value="On-site"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {employees.map((employee) => (
          <Employees key={employee._id} employee={employee}></Employees>
        ))}
      </div>
    </div>
  );
};

export default FindEmployee;
