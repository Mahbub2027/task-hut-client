import React from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import { FaPencil, FaXmark } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CompanyPosts = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const { data: jobs = [], refetch } = useQuery({
        queryKey: ['company'],
        queryFn: async () => {
            const res = await axiosPublic.get('/jobs');
            return res.data;
        }
    })


    const handleRoleClose = job => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Closed the job",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I want"
        }).then((result) => {

            if (result.isConfirmed) {
                axiosPublic.patch(`/jobs/closed/${job._id}`)
                    .then(res => {
                        console.log(res.data)

                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'center',
                                icon: "success",
                                text: `Job Applied Closed Successfully`,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    })


            }
        });
    }

    const handleRoleOpen = job => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Open the job",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I want"
        }).then((result) => {

            if (result.isConfirmed) {
                axiosPublic.patch(`/jobs/open/${job._id}`)
                    .then(res => {
                        console.log(res.data)

                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'center',
                                icon: "success",
                                text: `Job Applied Open Successfully`,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    })


            }
        });
    }

    // delete
    const handleDeleteJobs = job => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete"
        }).then((result) => {

            if (result.isConfirmed) {
                axiosPublic.delete(`/jobs/${job._id}`)
                    .then(res => {
                        console.log(res.data)

                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'center',
                                icon: "success",
                                text: `Job Deleted Successfully`,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    })


            }
        });
    }

    



    return (
        <div className='w-11/12 mx-auto my-10'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th>Image</th> */}
                            <th>Job Title</th>
                            <th>Salary Range</th>
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
                                        {/* <td>
                                            <img className='w-12 h-12 ' src={job.company_logo} alt="" />
                                        </td> */}
                                        <td>
                                            <p className='text-lg text-slate-700'>{job.job_title}</p>
                                        </td>
                                        <td>
                                            <p className='text-lg text-slate-700'>{job.salary_range}</p>
                                        </td>
                                        <td>
                                            <p className='text-lg text-slate-700'>{job.apply_role}</p>
                                        </td>
                                        <td>
                                            {
                                                (job.apply_role === "open") ?
                                                    <button onClick={() => handleRoleClose(job)} className='btn btn-sm text-red-500 font-bold'>Close</button>
                                                    : <button onClick={() => handleRoleOpen(job)} className='btn btn-sm text-green-500 font-bold'>Open</button>
                                            }
                                        </td>
                                        <td className='flex items-center gap-4'>
                                            <Link to={`/updateJob/${job._id}`}><button><span data-tip="update" className='tooltip text-white rounded-2xl px-4 py-3 bg-gradient-to-br from-indigo-400 via-indigo-600 to-indigo-700 hover:bg-gradient-to-b flex items-center gap-2'><FaPencil /></span></button></Link>
                                            <button onClick={() => handleDeleteJobs(job)}><span data-tip="delete" className='tooltip text-white rounded-2xl px-4 py-3 bg-gradient-to-br from-red-400 via-red-600 to-red-700 hover:bg-gradient-to-b flex items-center gap-2'><FaXmark /></span></button>
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