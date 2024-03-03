import React, { useEffect, useRef, useState }  from 'react';
import JobPostCard from './JobPostCard/JobPostCard';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const FindJobs = () => {
    const axiosPublic = useAxiosPublic();
    const searchRef = useRef();
    const [findJobs, setFindJobs] = useState([]);
    const[allJobs,setAllJobs]=useState([])

    useEffect(()=>{
        axiosPublic.get('/jobs')
        .then(res=>{
            setAllJobs(res.data)
            setFindJobs(res.data);
        })
        
    },[axiosPublic])

    const handleSearch = () =>{
        const search = searchRef?.current?.value.toLowerCase();
        console.log(search);

        const jobFilter = allJobs.filter((item)=> item.job_title.toLowerCase().includes(search));
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
    

    return (
        <div className='w-full md:w-11/12 mx-auto flex flex-col md:flex-row gap-5 my-16'>
            
            <div className='w-full md:w-72 h-96 rounded-xl my-5 p-4 bg-slate-100'>
                
                <p className='font-bold text-lg mb-2'>Select Category</p>
                <div className=''>
                    <select onChange={(e)=>{handleFilter(e.target.value)}} className="select w-full max-w-xs rounded-full">
                        <option disabled selected>Select category</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Part time">Part Time</option>
                        <option value="Remote">Remote</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>
                {/* search */}
                <p className='font-bold text-lg mt-8 mb-2'>Search Type</p>
                <input ref={searchRef} defaultValue={''}
                type="text" placeholder="Type job title" 
                className="input input-bordered w-full max-w-xs rounded-full" />

                <div className='mt-5 w-full'>
                    <button onClick={handleSearch} className="primary-btn w-full">Find Job</button>
                </div>
            </div>

            <div className='flex-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                {
                    findJobs.sort((a, b) => new Date(b.date) - new Date(a.date)).map(job => <JobPostCard key={job._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default FindJobs;