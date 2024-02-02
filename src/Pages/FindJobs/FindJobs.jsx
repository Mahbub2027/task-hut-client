import React  from 'react';
import JobPostCard from './JobPostCard/JobPostCard';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const FindJobs = () => {
    const axiosPublic = useAxiosPublic();
    // const [jobPosts, setJobPosts] = useState([]);

    // useEffect(() => {
    //     fetch('jobPosts.json')
    //         .then(res => res.json())
    //         .then(data => setJobPosts(data))

    // }, [])
    const {data: jobs=[]} = useQuery({
        queryKey: ['job'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/jobs');
            return res.data;
        }
    })

    return (
        <div className='w-11/12 mx-auto flex flex-col md:flex-row gap-5 my-16'>
            
            <div className='w-full lg:w-72 h-96 rounded-xl my-5 p-4 bg-purple-200'>
            <p className='font-bold texl-lg mb-2'>Search Type</p>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                
                <p className='font-bold texl-lg mt-10 mb-2'>Select Category</p>
                <div className=' '>
                    <select className="select w-full max-w-xs">
                        <option disabled selected>Select category</option>
                        <option>FullTime</option>
                        <option>PartTime</option>
                        <option>Remote</option>
                        <option>Internship</option>
                    </select>
                </div>
            </div>

            <div className='flex-1 grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    jobs.map(job => <JobPostCard key={job._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default FindJobs;