import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AppliedJobs = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    

    const { data: applyJob = [] , refetch} = useQuery({
        queryKey: ['job'],
        queryFn: async () => {
            const resJob = await axiosPublic.get('/applyJobs');
            return resJob.data;
        }
    })
    
    // const handleTaskComplete = job => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You Complete your task",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, I complete"
    //     }).then((result) => {

    //         if (result.isConfirmed) {
    //             axiosPublic.patch(`/applyJobs/complete/${job._id}`)
    //                 .then(res => {
    //                     console.log(res.data)

    //                     if (res.data.modifiedCount > 0) {
    //                         refetch();
    //                         Swal.fire({
    //                             position: 'center',
    //                             icon: "success",
    //                             text: `Task successfully Complete`,
    //                             showConfirmButton: false,
    //                             timer: 1500,
    //                         });
    //                     }
    //                 })


    //         }
    //     });
    // }

    const handleCancelApply = job =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Cancel this",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
        }).then((result) => {

            if (result.isConfirmed) {
                axiosPublic.delete(`/applyJobs/${job._id}`)
                .then(res => {
                    console.log(res.data)

                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            position: 'center',
                            icon: "success",
                            text: "Successfully Canceled",
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
                        <th>Location</th>
                        <th>Type</th>
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
                                ((user?.email === job?.email) && (job.role === "pending") || (job.role === "shortlisted") || (job.role === "rejected")) && <>
                                    {/* <td>
                                        {index + 1}
                                    </td> */}
                                    <td className='font-bold'>{job.job_title}</td>
                                    <td>{job.company_name}</td>
                                    <td className='flex'>{job.area}, {job.city}, {job.country}</td>
                                    <td className='capitalize'>{job.job_type}</td>
                                    <td>{job.salary_range}</td>
                                    <td className='capitalize font-semibold'>{job.role}</td>
                                    <td>
                                        <Link to={`/jobDetails/${job.jobId}`}><button className='btn btn-xs'>Details</button></Link>
                                    </td>
                                    <td>
                                        {
                                            (job?.role === 'pending') ? 
                                            <button  onClick={() => handleCancelApply(job)} className='btn btn-sm bg-red-500 text-base text-white'>Cancel</button>
                                            : <button disabled onClick={() => handleCancelApply(job)} className='btn btn-sm bg-red-500 text-base text-white'>Cancel</button>
                                        }
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

export default AppliedJobs;