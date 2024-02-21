import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';

const EmployeeDetails = () => {
    const {_id, name,employee_email,date_birth ,cover_img,linkedin,location,city,country,
        profession,experience,workPreference,resume,portfolio,github ,skills ,about,} = useLoaderData();
    return (
        <div className='w-11/12 mx-auto my-10'>
            <span><img className='w-40 h-40 rounded-lg' src={cover_img} alt="" /></span>
            <h2 className='text-2xl font-bold'>{name}</h2>
            <p>{profession}</p>
            <div >
                <p className='flex items-center gap-1'><FaLocationDot></FaLocationDot> {location} {city}
                </p> 
                {country}
            </div>
            <p>Email: {employee_email}</p>
            <p>DOB: {date_birth}</p>
            <p>Experience: {experience}</p>
            <p>About: {about}</p>
            <p>Portfoli: {portfolio}</p>
            <p>Linkedin: {linkedin}</p>
            <p>Resume: {resume}</p>
            <p>Github: {github}</p>
            <p>Skills: {skills}</p>
        </div>
    );
};

export default EmployeeDetails;