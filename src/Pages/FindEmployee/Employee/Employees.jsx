import React from 'react';
import { Link } from 'react-router-dom';

const Employees = ({employee}) => {
    const {_id, name, email, image} = employee;

    console.log(employee)
    return (
        <div className='border-2 p-5'>
            <span><img className='w-24 h-24 rounded-full' src={image} alt="" /></span>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <Link to={`/employeeDetails/${_id}`}><button className='btn btn-info'>View Details</button></Link>
        </div>
    );
};

export default Employees;