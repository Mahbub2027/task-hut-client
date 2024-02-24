import React from 'react';
import { FaArrowRightLong, FaLocationDot } from 'react-icons/fa6';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import JobPostCard from '../../FindJobs/JobPostCard/JobPostCard';

const FindCareer = () => {

    const [findJobs, setFindJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setFindJobs(data)
            })
    }, [findJobs])

    return (
        <div className='w-10/12 mx-auto my-40'>
            <div className='text-center space-y-4 w-full md:w-2/3 mx-auto my-20'>
                <h2 className='text-slate-700 text-3xl md:text-5xl font-extrabold'>Career Opportunities</h2>
                <p className='text-slate-500 text-lg md:text-2xl font-medium leading-3'>Apply for new <span className='bg-yellow-300 p-1'>Career</span> by searching through <span className='bg-yellow-300 p-1'>110 Jobs</span></p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                {
                    findJobs.slice(0, 6).map(job => <JobPostCard key={job._id} job={job} />)
                }
            </div>
            <div className="my-10 flex justify-center">
                <Link to="/findJobs" className="group flex items-center gap-2 text-white uppercase bg-gradient-to-r from-indigo-400 via-indigo-700 to-indigo-600 bg-[length:200%] hover:bg-right focus:ring-4 focus:outline-none focus:ring-indigo-300 shadow-lg shadow-indigo-500/50 font-medium rounded-full px-5 py-2.5 text-center transition-all ease-in-out delay-150 duration-500">All Jobs<FaArrowRightLong className='hidden group-hover:block'/></Link>
            </div>
        </div>
    );
};

export default FindCareer;