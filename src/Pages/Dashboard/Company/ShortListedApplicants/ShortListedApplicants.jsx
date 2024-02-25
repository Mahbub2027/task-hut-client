import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import useAuth from '../../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const ShortListedApplicants = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { data: appliedJobs = [] } = useQuery({
        queryKey: ['applyJobs'],
        queryFn: async () => {
            const applyJobs = await axiosPublic.get("/applyJobs");
            return applyJobs.data;
        }
    })

    const { data: employees = [] , refetch} = useQuery({
        queryKey: ['employee'],
        queryFn: async () => {
            const employeeInfo = await axiosPublic.get('/employees');
            return employeeInfo.data;
        }
    })

    const handleAssignTask = job => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Assign Task him",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I Assign"
        }).then((result) => {

            if (result.isConfirmed) {
                axiosSecure.patch(`/applyJobs/assignedTask/${job._id}`)
                    .then(res => {
                        console.log(res.data)

                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'center',
                                icon: "success",
                                text: `Task Assigned successfully`,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    })


            }
        });
    }

    const handleMakeconfirm = job => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Confirm him",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I want"
        }).then((result) => {

            if (result.isConfirmed) {
                axiosSecure.patch(`/applyJobs/confirm/${job._id}`)
                    .then(res => {
                        console.log(res.data)

                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'center',
                                icon: "success",
                                text: `Successfully Confirmed`,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    })


            }
        });
    }


    return (
        <div>
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
                            appliedJobs.map((job) => <tr key={job._id}>

                                {
                                    ((user?.email === job?.company_email) && (job.role === 'shortlisted') || (job.role === 'check email') || (job.role === 'completed')) && <>

                                        <td>{job.email}</td>
                                        <td>{job.job_title}</td>
                                        <td className='capitalize font-semibold'>{job.role}</td>
                                        <td className='capitalize font-semibold'>
                                            {
                                                <button onClick={() => handleAssignTask(job)} className='btn btn-xs text-red-500'>Assign Task</button>
                                            }
                                        </td>
                                        <td className='capitalize font-semibold'>
                                            {
                                                <button onClick={() => handleMakeconfirm(job)} className='btn btn-xs font-bold text-green-500'>Confirm</button>
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

export default ShortListedApplicants;