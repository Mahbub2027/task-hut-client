import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Employees from "./Employee/Employees";


const FindEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(()=>{
    axiosPublic.get('/employees')
    .then(result=>{
      // const userData = result.data.filter((item) => item.role === 'user');
      setEmployees(result.data);
      
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
