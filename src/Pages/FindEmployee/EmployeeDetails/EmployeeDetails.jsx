import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EmployeeDetails = () => {
    const {name, image, email} = useLoaderData();
    return (
        <div className='w-11/12 mx-auto my-10'>
            <span><img className='w-40 h-40 rounded-lg' src={image} alt="" /></span>
            <h2 className='text-2xl font-bold'>{name}</h2>
        </div>
    );
};

export default EmployeeDetails;