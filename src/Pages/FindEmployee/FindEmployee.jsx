import React, { useState } from "react";
import EmployeeCard from "./EmployeeCard/EmployeeCard";

const FindEmployee = () => {
  const [employees, setEmployees] = useState([]);

  fetch("employees.json")
    .then((res) => res.json())
    .then((data) => setEmployees(data));

  return (
    <div className="p-5 m-5">
      <div className="grid grid-cols-3 gap-5">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default FindEmployee;
