import React, { useEffect, useRef, useState } from 'react';
import JobPostCard from './JobPostCard/JobPostCard';
import useAxiosPublic from '../../hooks/useAxiosPublic';
// import { useQuery } from '@tanstack/react-query';

const FindJobs = () => {
    const axiosPublic = useAxiosPublic();
    const searchRef = useRef();
    const [findJobs, setFindJobs] = useState([]);
    const [allJobs, setAllJobs] = useState([])

    useEffect(() => {
        axiosPublic.get('/jobs')
            .then(res => {
                setAllJobs(res.data)
                setFindJobs(res.data);
            })

    }, [axiosPublic])

    // const {data: jobs=[]} = useQuery({
    //     queryKey: ['job'],
    //     queryFn: async()=>{
    //         const res = await axiosPublic.get('/jobs');
    //         // return res.data;
    //         setFindJobs(res.data);
    //     }
    // })

    const handleSearch = () => {
        const search = searchRef?.current?.value.toLowerCase();
        console.log(search);

        const jobFilter = allJobs.filter((item) => item.job_title.toLowerCase().includes(search));
        // console.log(jobFilter);
        setFindJobs(jobFilter);
    }

    const handleFilter = (value) => {

        const search = value.toLowerCase();
        const jobFilter = allJobs.filter((jobs) =>
            jobs.category.toLowerCase().includes(search)
        );
        setFindJobs(jobFilter);
    };

    // 
    return (
        <div className=''>
            <div className='bg-gradient-to-br from-purple-100 via-purple-200 to-purple-200 p-4 flex flex-col items-center'>
                <div className="w-full md:w-2/3 mx-auto lg:mb-10">
                    <h2 className="text-purple-800 text-3xl md:text-5xl font-extrabold text-center">
                        Jobs
                    </h2>
                    <p className="text-purple-700 text-lg md:text-2xl font-medium leading-6 mt-4 flex items-center flex-wrap justify-center">
                        Find a new{" "}
                        <span className="bg-purple-800 text-white p-1">Job</span> for your
                        future{" "}
                        <span className="bg-purple-800 text-white p-1">Career</span>
                    </p>
                </div>
                <div className='w-full lg:w-1/3 rounded-2xl md:rounded-full my-5 p-4 md:py-8  text-start flex flex-col md:flex-row md:items-center justify-center gap-4'>

                    <div className='w-full md:w-1/3'>
                        {/* <p className='font-bold text-sm md:text-lg mb-2 text-emerald-800'>Select Category</p> */}
                        <select onChange={(e) => { handleFilter(e.target.value) }} className="select w-full max-w-xs rounded-full">
                            <option disabled selected>Select category</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Part time">Part Time</option>
                            <option value="Remote">Remote</option>
                            <option value="Internship">Internship</option>
                        </select>
                    </div>
                    {/* search */}
                    <div className='w-full md:w-1/3'>
                        {/* <p className='font-bold text-sm md:text-lg mb-2 text-emerald-800'>Search Type</p> */}
                        <input ref={searchRef} defaultValue={''}
                            type="text" placeholder="Type job title"
                            className="input input-bordered w-full max-w-xs rounded-full" />
                    </div>
                    <div className=''>
                        <button onClick={handleSearch} className="tracking-widest text-white uppercase text-xs lg:text-sm bg-gradient-to-r from-purple-500 via-purple-700 to-purple-600 bg-[length:200%] hover:bg-right focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-full px-5 py-2.5 text-center transition-all ease-in-out delay-150 duration-500 w-full">Find Job</button>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-11/12 mx-auto mb-10 flex-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 p-4'>
                {
                    findJobs.sort((a, b) => new Date(b.date) - new Date(a.date)).map(job => <JobPostCard key={job._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default FindJobs;