import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const JobPostCard = ({ job }) => {

    const {_id, job_title,category,job_type,location, apply_role,company_name ,company_logo ,date} = job;
    // console.log(job)    

    return (
        <div className='border rounded-lg p-5 hover:shadow-xl'>
            <div>
                <div className='flex justify-between mb-3'>
                    <p className='text-md font-normal border rounded-lg px-2 py-1 capitalize'>{category}</p>
                    {
                        apply_role ===  'open' ? <p className='badge bg-green-600 text-white rounded-2xl font-semibold'>{apply_role}</p> 
                        : <p className='badge bg-red-600 text-white rounded-2xl font-semibold'>{apply_role}</p>
                    }
                </div>
            </div>

            <div>
                <Link to={`/jobDetails/${_id}`}>
                    <h2 className='text-2xl font-bold text-purple-600 hover:text-3xl'>{job_title}</h2>
                </Link>
                <p className='capitalize'>{job_type}</p>
                <p className='flex items-center gap-3'><FaLocationDot/> {location}</p>
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
        </div>
    );
};

export default JobPostCard;