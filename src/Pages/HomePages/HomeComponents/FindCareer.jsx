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
        <div className='w-9/12 mx-auto my-40'>
            <div className='text-center space-y-4 w-2/3 mx-auto my-20'>
                <h2 className='text-slate-700 text-5xl font-extrabold'>Career Opportunities</h2>
                <p className='text-slate-500 text-2xl font-medium'>Apply for new <span className='bg-yellow-300 p-1'>Career</span> by searching through <span className='bg-yellow-300 p-1'>110 Jobs</span></p>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    findJobs.slice(0, 6).map(job => <JobPostCard key={job._id} job={job} />)
                }
            </div>
            <div className="my-10 flex justify-center">
                <Link to="/findJobs" className="flex items-center gap-2 m-1 shadow-lg border-2 border-indigo-800 rounded-lg font-medium bg-white px-8 py-2 hover:bg-indigo-500 hover:border-indigo-500 text-indigo-500 hover:text-white transition-all ease-out delay-0 duration-500">All Jobs<FaArrowRightLong /></Link>
            </div>
        </div>
    );
};

export default FindCareer;