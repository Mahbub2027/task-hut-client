import React, { useState } from 'react';
import JobPostCard from './JobPostCard/JobPostCard';

const FindJobs = () => {
    const [jobPosts, setJobPosts] = useState([]);

    fetch('jobPosts.json')
        .then(res => res.json())
        .then(data => setJobPosts(data))

    return (
        <div className='w-full'>
            Find jobs
            {
                jobPosts.map(job => <JobPostCard key={job.id} job={job}/>)
            }
        </div>
    );
};

export default FindJobs;