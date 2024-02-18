import React from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';

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
                            <th>Apply</th>
                            <th>Update</th>
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
                                            <h2>{job.job_title}</h2>
                                        </td>
                                        <td>
                                            <h2>{job.company_name}</h2>
                                        </td>
                                        <td>
                                            <p>{job.apply_role}</p>
                                        </td>
                                        <td>
                                            <button className='btn'>Update</button>
                                        </td>
                                        <td>
                                            <button className='btn'>Delate</button>
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