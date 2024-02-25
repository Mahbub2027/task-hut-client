import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import useAuth from '../../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const ShortListedApplicants = () => {
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();

    const {data: appliedJobs=[]} = useQuery({
        queryKey: ['applyJobs'],
        queryFn: async ()=>{
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

    const handleMakeShortlist = ()=>{

    }
    const handleMakeRejected = ()=>{

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
                                ((user?.email === job?.company_email) && (job.role === 'shortlisted')) && <>
                                    
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

export default ShortListedApplicants;