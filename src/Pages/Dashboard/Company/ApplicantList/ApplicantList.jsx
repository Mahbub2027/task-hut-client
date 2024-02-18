import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const ApplicantList = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: applyJob = [] } = useQuery({
        queryKey: ['job'],
        queryFn: async () => {
            const resJob = await axiosPublic.get('/applyJobs');
            return resJob.data;
        }
    })

    
    return (
        <div className='my-10'>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        {/* <th>#</th> */}
                        
                        {/* <th></th> */}
                        <th>Email</th>
                        <th>Job Title</th>
                        <th>Role</th>
                        <th>Action</th>
                        <th>Action</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        applyJob.map((job) => <tr key={job._id}>

                            {
                                (user?.email === job?.company_email) && <>
                                    {/* <td>
                                        {index + 1}
                                    </td> */}
                                    {/* <td></td> */}
                                    {/* <td className='font-bold'>{job.applicant_name}</td> */}
                                    <td>{job.email}</td>
                                    <td>{job.job_title}</td>
                                    <td className='capitalize font-semibold'>{job.role}</td>
                                    <td className='capitalize font-semibold'>
                                        {
                                            <button className='btn btn-xs'>Short List</button>
                                        }
                                    </td>
                                    <td className='capitalize font-semibold'>
                                        {
                                            <button className='btn btn-xs text-red-500'>Reject</button>
                                        }
                                    </td>
                                    <td>
                                        <Link to={`/employeeDetails/${job.jobId}`}><button className='btn btn-xs'>Details</button></Link>
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

export default ApplicantList;