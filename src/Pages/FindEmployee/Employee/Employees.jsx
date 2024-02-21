import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Employees = ({employee}) => {
    const axiosPublic = useAxiosPublic();
    const {_id, name,employee_email,date_birth ,cover_img,linkedin,location,city,country,
        profession,experience,workPreference,resume,portfolio,github ,skills ,about,} = employee;

        // console.log(employee)
        const { data: users = [] } = useQuery({
            queryKey: ['users'],
            queryFn: async () => {
                const res = await axiosPublic.get(`/users`)
                return res.data;
            }
        })
    return (
        <div className='border-2 p-5'>
            {
                users.map(use=> <div key={use._id}>
                    {
                        use.email === employee_email && <>
                        <span><img className='w-24 h-24 rounded-full' src={use?.image} alt="" /></span>
                        </>
                    }
                </div>)
            }
            {/* <span><img className='w-24 h-24 rounded-full' src={cover_img} alt="" /></span> */}
            <p className='text-2xl font-bold'>{name}</p>
            <p>{profession}</p>
            <div >
                <p className='flex items-center gap-1'><FaLocationDot></FaLocationDot> {location} {city}
                </p> 
                {country}
            </div>
            <Link to={`/employeeDetails/${_id}`}><button className='btn btn-info'>View Details</button></Link>
        </div>
    );
};

export default Employees;