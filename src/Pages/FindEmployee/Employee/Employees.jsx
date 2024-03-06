import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaArrowRightLong, FaBriefcase, FaGithub, FaLink, FaLinkedinIn, FaLocationDot, FaStopwatch } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Employees = ({ employee }) => {
    
    const axiosPublic = useAxiosPublic();
    const { _id, name, employee_email, linkedin, location, city, country,
        profession, experience, workPreference, github, portfolio } = employee;

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users`)
            return res.data;
        }
    })
    return (
        <div className='group h-[450px] rounded-3xl'>
            <div className='h-1/2 rounded-3xl shadow-md flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 group-hover:bg-gradient-to-b group-hover:shadow-none'>
                {
                    users.map(use => <div key={use._id}>
                        {
                            use.email === employee_email && <>
                                <img className='w-24 h-24 rounded-full shadow-2xl' src={use?.image} alt="" />
                            </>
                        }
                    </div>)
                }
                {/* <span><img className='w-24 h-24 rounded-full' src={cover_img} alt="" /></span> */}
                <p className='text-lg lg:text-2xl font-bold'>{name}</p>
                <p className='text-sm lg:text-base'>{employee_email}</p>
            </div>
            <div className='h-1/2 rounded-b-3xl border-b group-hover:shadow-xl flex flex-col items-center justify-between p-6 transition-all ease-in-out delay-150 duration-500'>
                <div className='flex flex-col items-center gap-1'>
                    <p className='text-xl lg:text-2xl font-bold'>{profession}</p>
                    <p className='text-center text-slate-600'>{experience} yrs of experience</p>
                    <p className='text-center text-slate-600'>{workPreference}</p>
                    <p className='text-center text-slate-600'>{location}, {city}, {country}</p>
                </div>
                <div className='flex gap-8 items-center'>
                    <Link to={github} target="_blank" className='tooltip text-slate-600 hover:text-indigo-600' data-tip={github}>
                        <FaGithub className='w-6 h-6' />
                    </Link>
                    <Link to={linkedin} target="_blank" className='tooltip text-slate-600 hover:text-indigo-600' data-tip={linkedin}>
                        <FaLinkedinIn className='w-6 h-6' />
                    </Link>
                    <Link to={portfolio} target="_blank" className='tooltip text-slate-600 hover:text-indigo-600' data-tip={portfolio}>
                        <FaLink className='w-6 h-6' />
                    </Link>
                    <Link to={`/employeeDetails/${_id}`} className='tooltip secondary-btn' style={{textTransform: "lowercase"}} data-tip="view details"><FaArrowRightLong /></Link>
                </div>
            </div>

        </div>
    );
};

export default Employees;