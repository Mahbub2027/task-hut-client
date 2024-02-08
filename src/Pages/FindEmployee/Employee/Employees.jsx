import React from 'react';

const Employees = ({employee}) => {
    const {_id, name, email, image} = employee;

    return (
        <div className='border-2 p-5'>
            <span><img className='w-24 h-24 rounded-full' src={image} alt="" /></span>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default Employees;