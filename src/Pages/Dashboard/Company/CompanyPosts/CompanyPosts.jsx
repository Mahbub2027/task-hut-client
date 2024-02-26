import React from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import { FaPencil, FaXmark } from 'react-icons/fa6';

const CompanyPosts = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { data: jobs = [] } = useQuery({
        queryKey: ['company'],
        queryFn: async () => {
            const res = await axiosPublic.get('/jobs');
            return res.data;
        }
    })

    const handleChangedRole = job =>{

    }

    return (
        <div className='w-11/12 mx-auto my-10'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Job Title</th>
                            <th>Name</th>
                            <th>Current role</th>
                            <th>Change role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map(job => <tr key={job._id}>

                                {
                                    (user?.email === job?.company_email) && <>
                                        <td>
                                            <img className='w-12 h-12 ' src={job.company_logo} alt="" />
                                        </td>
                                        <td>
                                            <p className='text-lg text-slate-700'>{job.job_title}</p>
                                        </td>
                                        <td>
                                            <p className='text-lg text-slate-700'>{job.company_name}</p>
                                        </td>
                                        <td>
                                            <p className='text-lg text-slate-700'>{job.apply_role}</p>
                                        </td>
                                        <td>
                                            <button onClick={()=>handleChangedRole(job)} className='btn btn-sm'>{job.apply_role}</button>
                                        </td>
                                        <td className='flex items-center gap-4'>
                                            <span data-tip="update" className='tooltip text-white rounded-2xl px-4 py-3 bg-gradient-to-br from-indigo-400 via-indigo-600 to-indigo-700 hover:bg-gradient-to-b flex items-center gap-2'><FaPencil /></span>
                                            <span data-tip="delete" className='tooltip text-white rounded-2xl px-4 py-3 bg-gradient-to-br from-red-400 via-red-600 to-red-700 hover:bg-gradient-to-b flex items-center gap-2'><FaXmark /></span>
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

export default CompanyPosts;