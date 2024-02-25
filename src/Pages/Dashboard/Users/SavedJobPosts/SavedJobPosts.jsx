import React from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { FaRegTrashCan } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../../hooks/useAuth';

const SavedJobPosts = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: saveJob = [], refetch } = useQuery({
        queryKey: ['job'],
        queryFn: async () => {
            const resJob = await axiosPublic.get('/saveJobs');
            return resJob.data;
        }
    })

    const handleSaveJobDelete = job => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                axiosPublic.delete(`/saveJobs/${job._id}`)
                    .then(res => {
                        console.log(res.data)

                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'center',
                                icon: "success",
                                text: "Successfully Deleted",
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
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            saveJob.map((job) => <tr key={job._id}>

                                {
                                    (user?.email === job?.email) && <>
                                        {/* <td>
                                            {index + 1}
                                        </td> */}
                                        <td>{job.job_title}</td>
                                        <td>{job.company_name}</td>
                                        <td className='flex'>{job.area}, {job.city}, {job.country}</td>
                                        <td>{job.job_type}</td>
                                        <td>{job.salary_range}</td>
                                        <td>
                                            <Link to={`/jobDetails/${job.jobId}`}><button className='btn btn-xs'>Details</button></Link>
                                        </td>
                                        <td>
                                            <button onClick={() => handleSaveJobDelete(job)} className='btn btn-sm bg-red-500 text-lg text-white'><FaRegTrashCan></FaRegTrashCan></button>
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

export default SavedJobPosts;