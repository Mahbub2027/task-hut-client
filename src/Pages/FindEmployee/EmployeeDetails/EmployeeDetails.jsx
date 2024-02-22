import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const EmployeeDetails = () => {
    const {user} =  useAuth();
    const axiosPublic  = useAxiosPublic();
    const {_id, name,employee_email,date_birth ,cover_img,linkedin,location,city,country,
        profession,experience,workPreference,resume,portfolio,github ,skills ,about,} = useLoaderData();
    
        const { data: users = [] } = useQuery({
            queryKey: ['users'],
            queryFn: async () => {
                const res = await axiosPublic.get(`/users`)
                return res.data;
            }
        })
    
    return (
        <div className='w-11/12 mx-auto my-10'>
            <span><img className='w-full h-60 rounded-lg' src={cover_img} alt="" /></span>
            
            {
                users.map(use=> <div key={use._id}>
                    {
                        use.email === employee_email && <>
                        <span><img className='w-24 h-24 rounded-full' src={use?.image} alt="" /></span>
                        </>
                    }
                </div>)
            }
            {/* <span><img className='w-28 h-28 rounded-full' src={user?.photoURL} alt="" /></span> */}
            
            <h2 className='text-2xl font-bold'>{name}</h2>
            <p>{profession}</p>
            <div >
                <p className='flex items-center gap-1'><FaLocationDot></FaLocationDot> {location} {city}
                </p> 
                {country}
            </div>
            <p>Email: {employee_email}</p>
            <p>DOB: {date_birth}</p>
            <p>Work Preference: {workPreference}</p>
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