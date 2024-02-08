import React, { useEffect, useState } from "react";
// import EmployeeCard from "./EmployeeCard/EmployeeCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// import { useQuery } from "@tanstack/react-query";
import Employees from "./Employee/Employees";
// import axios from "axios";

const FindEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(()=>{
    axiosPublic.get('/users')
    .then(result=>{
      const userData = result.data.filter((item) => item.role === 'user');
      setEmployees(userData);
      
    })
    
  },[axiosPublic])



  return (
    <div className="p-5 m-5">
      <div className="grid grid-cols-3 gap-5">
        {
          employees.map(employee => <Employees 
            key={employee._id} 
            employee={employee}></Employees>)  
        }
      </div>
    </div>
  );
};

export default FindEmployee;
