import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const ApplicantList = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure= useAxiosSecure();

    const { data: applyJob = [] , refetch} = useQuery({
        queryKey: ['job'],
        queryFn: async () => {
            const resJob = await axiosPublic.get('/applyJobs');
            return resJob.data;
        }
    })

    const { data: employees = [] } = useQuery({
        queryKey: ['employee'],
        queryFn: async () => {
            const employeeInfo = await axiosPublic.get('/employees');
            return employeeInfo.data;
        }
    })

    const handleMakeShortlist = job =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Short-listed him",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I want!"
        }).then((result) => {

            if (result.isConfirmed) {
                axiosSecure.patch(`/applyJobs/shortlisted/${job._id}`)
                    .then(res => {
                        console.log(res.data)

                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'center',
                                icon: "success",
                                text: `${job.email} is shortlisted now`,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    })


            }
        });
    }

    const handleMakeRejected = job =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You want to rejected him",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I Reject!"
        }).then((result) => {

            if (result.isConfirmed) {
                axiosSecure.patch(`/applyJobs/rejected/${job._id}`)
                    .then(res => {
                        console.log(res.data)

                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'center',
                                icon: "success",
                                text: `${job.email} is rejected`,
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
                        
                        {/* <th></th> */}
                        <th>Email</th>
                        <th>Job Title</th>
                        <th>Role</th>
                        <th>Action</th>
                        <th>Action</th>
                        <th>Details</th>
                        <th>Chat</th>
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
                                            job.role === 'shortlisted' ? 
                                            <button disabled onClick={()=>handleMakeShortlist(job)} className='btn btn-xs'>Short List</button>
                                            :
                                            <button onClick={()=>handleMakeShortlist(job)} className='btn btn-xs'>Short List</button>
                                        }
                                    </td>
                                    <td className='capitalize font-semibold'>
                                        {
                                            <button onClick={()=>handleMakeRejected(job)} className='btn btn-xs text-red-500'>Reject</button>
                                        }
                                    </td>
                                    <td>
                                        {
                                            employees.map(employee => <div key={employee._id}>
                                                {
                                                    (employee.employee_email === job.email) && <>
                                                    <Link to={`/employeeDetails/${employee._id}`}><button className='btn btn-xs'>Details</button></Link>
                                                    </>
                                                }
                                            </div>)
                                        }
                                    </td>
                                    <td>
                                        <Link to={'/dashboard/companyChat'}><button className='btn btn-sm'>Message</button></Link>
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