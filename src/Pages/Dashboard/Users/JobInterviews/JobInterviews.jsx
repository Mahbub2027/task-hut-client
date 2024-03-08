import React from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useAuth from '../../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';


const JobInterviews = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const { data: applyJob = [] , refetch} = useQuery({
        queryKey: ['job'],
        queryFn: async () => {
            const resJob = await axiosPublic.get('/applyJobs');
            return resJob.data;
        }
    })

    const handleTaskComplete = job => {
        Swal.fire({
            title: "Are you sure?",
            text: "You Complete your task",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I complete"
        }).then((result) => {

            if (result.isConfirmed) {
                axiosPublic.patch(`/applyJobs/complete/${job._id}`)
                    .then(res => {
                        console.log(res.data)

                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'center',
                                icon: "success",
                                text: `Task successfully Complete`,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    })


            }
        });
    }

    return (
        <div className='my-10'>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        {/* <th>#</th> */}
                        <th>Title</th>
                        <th>Company Name</th>
                        <th>Company Location</th>
                        <th>Job Type</th>
                        <th>Salary</th>
                        <th>Role</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        applyJob.map((job) => <tr key={job._id}>

                            {
                                ((user?.email === job?.email) && (job.role === "check email") || (job.role === "got hired") ) && <>
                                    {/* <td>
                                        {index + 1}
                                    </td> */}
                                    <td>{job.job_title}</td>
                                    <td>{job.company_name}</td>
                                    <td className='flex'>{job.area}, {job.city}, {job.country}</td>
                                    <td className='capitalize'>{job.job_type}</td>
                                    <td>{job.salary_range}</td>
                                    <td className='capitalize font-semibold'>{job.role}</td>
                                    <td>
                                        {
                                            job.role === 'check email' ? 
                                            <button onClick={()=> handleTaskComplete(job)} className='btn btn-sm bg-green-600 text-white'>Complete</button> 
                                            : <button disabled className='btn btn-sm'>Complete</button>
                                        }
                                    </td>
                                    <td>
                                        <Link to={`/jobDetails/${job.jobId}`}><button className='btn btn-xs text-blue-800 font-bold'>Details</button></Link>
                                    </td>
                                    
                                </>
                            }

                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default JobInterviews;