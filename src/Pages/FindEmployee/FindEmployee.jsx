import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard/EmployeeCard';

const FindEmployee = () => {
    const [employees, setEmployees] = useState([]);

    fetch('employees.json')
        .then(res => res.json())
        .then(data => setEmployees(data))

    return (
        <div>
            Find Employee
            {
                employees.map(employee => <EmployeeCard key={employee.id} employee={employee}/>)
            }
        </div>
    );
};

export default FindEmployee;