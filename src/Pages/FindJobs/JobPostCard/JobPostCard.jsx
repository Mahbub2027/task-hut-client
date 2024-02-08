import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const JobPostCard = ({ job }) => {

    const { _id, job_title, category, job_type, location, apply_role, company_name, company_logo, date } = job;
    // console.log(job)    

    return (
        <>
            <div className='relative border-2 text-slate-700 p-4 space-y-3 rounded-3xl hover:shadow-md hover:border-indigo-400 transition-all ease-out delay-0 duration-500'>
                {
                    apply_role === 'open' ? <p className='absolute top-4 right-4 text-xs font-light text-white bg-green-600 px-2 border-2 border-green-300 rounded-full'>{apply_role}</p>
                        : <p className='absolute top-4 right-4 text-xs font-light text-white bg-red-600 px-2 border-2 border-red-300 rounded-full'>{apply_role}</p>
                }
                <div className=''>
                    <div className='flex gap-2 mb-2'>
                        <p className='px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700'>{job_type}</p>
                        <p className='px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700'>{category}</p>
                    </div>
                    <Link to={`/jobDetails/${_id}`} className='tooltip tooltip-right font-bold text-2xl hover:text-indigo-700 transition-all ease-out delay-0 duration-500' data-tip='View job details'>{job_title}</Link> 
                    <p className='flex flex-wrap gap-1 items-center'><FaLocationDot /> {location}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='space-y-1'>
                        <h3 className='font-medium text-lg'>{company_name}</h3>
                        <p className='text-sm'>{date} Posted</p>
                        <p className='text-sm'>{date} Deadline</p>
                    </div>
                    <Link to='/' className='tooltip tooltip-left rounded-2xl border-2 hover:border-2 hover:border-indigo-700 hover:shadow-md transition-all ease-out delay-0 duration-500' data-tip='View company details'>
                        <img className='w-16 h-16 rounded-2xl' src={company_logo} alt="" />
                    </Link>
                </div>
            </div>
            {/* <div className='border rounded-lg p-5 hover:shadow-xl'>
                <div>
                    <div className='flex justify-between mb-3'>
                        <p className='text-md font-normal border rounded-lg px-2 py-1 capitalize'>{category}</p>

                    </div>
                </div>

                <div>
                    <Link to={`/jobDetails/${_id}`}>
                        <h2 className='text-2xl font-bold text-purple-600 hover:text-3xl'>{job_title}</h2>
                    </Link>
                    <p className='capitalize'>{job_type}</p>
                    <p className='flex items-center gap-3'><FaLocationDot /> {location}</p>
                </div>

                <div className="flex items-center justify-between mt-5">
                    <div>
                        <p className="font-bold">{company_name}</p>
                        <p>Published: {date}</p>
                    </div>
                    <div>
                        <img className='w-24 h-20' src={company_logo} alt="" />
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default JobPostCard;