import React, { useEffect, useRef, useState }  from 'react';
import JobPostCard from './JobPostCard/JobPostCard';
// import useAxiosPublic from '../../hooks/useAxiosPublic';
// import { useQuery } from '@tanstack/react-query';

const FindJobs = () => {
    // const axiosPublic = useAxiosPublic();
    const searchRef = useRef();
    const [findJobs, setFindJobs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=>{
            setFindJobs(data)
        })
    },[])

    // const {data: jobs=[]} = useQuery({
    //     queryKey: ['job'],
    //     queryFn: async()=>{
    //         const res = await axiosPublic.get('/jobs');
    //         // return res.data;
    //         setFindJobs(res.data);
    //     }
    // })

    const handleSearch = () =>{
        const search = searchRef?.current?.value.toLowerCase();
        console.log(search);

        const jobFilter = findJobs.filter((item)=> item.job_title.toLowerCase().includes(search));
        // console.log(jobFilter);
        setFindJobs(jobFilter);
    }

    return (
        <div className='w-11/12 mx-auto flex flex-col md:flex-row gap-5 my-16'>
            
            <div className='w-full lg:w-72 h-96 rounded-xl my-5 p-4 bg-slate-100'>
                
                <p className='font-bold texl-lg mb-2'>Select Category</p>
                <div className=' '>
                    <select className="select w-full max-w-xs">
                        <option disabled selected>Select category</option>
                        <option>FullTime</option>
                        <option>PartTime</option>
                        <option>Remote</option>
                        <option>Internship</option>
                    </select>
                </div>
                {/* search */}
                <p className='font-bold texl-lg mt-8 mb-2'>Search Type</p>
                <input ref={searchRef} defaultValue={''}
                type="text" placeholder="Type job title" 
                className="input input-bordered w-full max-w-xs" />

                <div className='mt-5 w-full'>
                    <button onClick={handleSearch} className="m-1 w-full shadow-lg border-2 border-indigo-800 rounded-lg font-medium bg-indigo-800 px-8 py-2 text-white hover:bg-indigo-500 hover:border-indigo-500 hover:text-white transition-all ease-out delay-0 duration-500">Find Job</button>
                </div>
            </div>

            <div className='flex-1 grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    findJobs.map(job => <JobPostCard key={job._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default FindJobs;