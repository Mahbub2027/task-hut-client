import React from 'react';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
const InterviewTask = () => {


    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const { data: appliedJobs = [] } = useQuery({
        queryKey: ['applyJobs'],
        queryFn: async () => {
            const applyJobs = await axiosPublic.get("/applyJobs");
            return applyJobs.data;
        }
    })

    const { data: employees = [] } = useQuery({
        queryKey: ['employee'],
        queryFn: async () => {
            const employeeInfo = await axiosPublic.get('/employees');
            return employeeInfo.data;
        }
    })

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
                        {/* <th>Action</th>
                        <th>Action</th> */}
                        <th>Details</th>
                        <th>Chat</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appliedJobs.map((job) => <tr key={job._id}>

                            {
                                ((user?.email === job?.company_email) && (job.role === 'got hired')) && <>

                                    <td>{job.email}</td>
                                    <td>{job.job_title}</td>
                                    <td className='capitalize text-lg font-bold text-green-500'>{job.role}</td>
                                       
                                   
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

export default InterviewTask;