import React, { useState } from 'react';
import coverImg from '../../../assets/images/banner 5.jpg';
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAuth from '../../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';


const JobDetails = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [isApplied, setAppliedJobs] = useState(false);
    const [isSaveJob, setSaveJobs] = useState(false);
    const navigate = useNavigate();

    const { data: users = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const userInfo = await axiosPublic.get("/users");
            return userInfo.data;
        }
    })

    const { data: companies = [] } = useQuery({
        queryKey: ['company'],
        queryFn: async () => {
            const companyRes = await axiosPublic.get("/companies")
            return companyRes.data;
        }
    })

    const { _id, job_title, category, job_type, company_email, area, city, country, apply_role, company_name,
        publish_date, deadline_date, benefits, experience, salary_range, overview, requirements, skills, responsibilities } = useLoaderData();

    const handleJobApply = _id => {
        if (user?.emailVerified) {


            const jobApply = {
                jobId: _id,
                email: user?.email,
                applicant_name: user?.displayName,

                role: "pending",
                job_title, category, job_type, company_email, area, city, country, apply_role, company_name,
                experience, salary_range, skills
            }

            Swal.fire({
                title: "Are you sure?",
                text: "You want to apply this",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, apply it!"
            }).then((result) => {

                if (result.isConfirmed) {

                    axiosPublic.post('/applyJobs', jobApply)
                        .then(res => {
                            if (res?.data?.insertedId) {
                                setAppliedJobs(true);
                                toast.success("Successfully applied")
                            }
                        })
                }
            })
        }
        else {
            navigate("/login")
        }
    }


    const handleSaveJobs = id => {
        if (user?.emailVerified) {
            const saveJobs = {
                email: user?.email,
                jobId: id, job_title, category, job_type, area, city, country, apply_role, company_name,
                experience, salary_range, skills
            }

            Swal.fire({
                title: "Are you sure?",
                text: "You want to save this",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, save it!"
            }).then((result) => {

                if (result.isConfirmed) {
                    axiosPublic.post("/saveJobs", saveJobs)
                        .then(res => {
                            console.log(res);

                            if (res?.data?.insertedId) {
                                setSaveJobs(true);
                                toast.success("Job save successfully")
                            }
                        })
                }
            })
        }
        else {
            navigate('/login')
        }
    }


    return (
        <>
            {
                (
                    <div className='w-9/12 mx-auto mt-10 mb-20 text-slate-700 grid grid-cols-4 gap-5'>
                        <div className='col-span-3 space-y-6'>
                            <div className='w-full h-[30vh] relative group'>
                                {
                                    companies.map(company => <div key={company._id} className=''>
                                        {
                                            (company.email === company_email) && <>
                                                {
                                                    <img className='w-full h-full object-contain rounded-3xl group-hover:shadow-md' src={company.cover_img} alt="" />
                                                }
                                            </>
                                        }
                                    </div>)
                                }
                                {/* <img className='w-full h-full object-cover rounded-3xl group-hover:shadow-md' src={coverImg} alt="" /> */}
                                <div className='w-full h-full rounded-3xl absolute top-0 left-0 bg-gradient-to-tr from-transparent to-black/30 group-hover:from-transparent group-hover:to-transparent'></div>
                                {
                                    apply_role === 'open' ? <p className='absolute top-4 right-4 text-xs font-light text-white bg-green-600 px-2 border-2 border-green-300 rounded-full'>{apply_role}</p>
                                        : <p className='absolute top-4 right-4 text-xs font-light text-white bg-red-600 px-2 border-2 border-red-300 rounded-full'>{apply_role}</p>
                                }
                            </div>
                            <div className='w-full flex justify-between items-center p-5'>
                                <h2 className='font-bold text-4xl'>{job_title}</h2>
                                <div className='flex gap-2'>

                                    <button onClick={() => handleSaveJobs(_id)} disabled={isSaveJob}
                                        className="secondary-btn">
                                        {
                                            isSaveJob ? "Saved" : "Save"
                                        }
                                    </button>

                                    {(apply_role === "open") &&
                                        <button onClick={() => handleJobApply(_id)} disabled={isApplied}
                                            className="primary-btn">
                                            {
                                                isApplied ? "Applied" : "Apply Now"
                                            }</button>}
                                </div>
                            </div>
                            <div className='space-y-4 text-slate-700 bg-slate-50 hover:shadow-md rounded-3xl p-5'>
                                <div className='p-4 bg-white rounded-2xl space-y-2'>
                                    <h3 className='font-semibold text-2xl'>Overview</h3>
                                    <p className='text-lg text-slate-500 text-justify'>{overview}</p>
                                </div>
                                <div className='p-4 bg-white rounded-2xl space-y-2'>
                                    <h3 className='font-semibold text-2xl'>Responsibilities</h3>
                                    <p className='text-lg text-slate-500 text-justify'>{responsibilities}</p>
                                </div>
                                <div className='p-4 bg-white rounded-2xl space-y-2'>
                                    <h3 className='font-semibold text-2xl '>Requirements</h3>
                                    <p className='text-lg text-slate-500 text-justify'>{requirements}</p>
                                </div>
                                <div className='p-4 bg-white rounded-2xl space-y-2'>
                                    <h3 className='font-semibold text-2xl '>Benefits</h3>
                                    <p className='text-lg text-slate-500 text-justify'>{benefits}</p>
                                </div>

                            </div>
                        </div>
                        <div className='space-y-6'>
                            <div className='space-y-3 bg-slate-100 hover:shadow-md rounded-3xl p-5'>
                                <div className=''>
                                    <small>Posted</small>
                                    <p className='font-medium text-md'>{publish_date}</p>
                                </div>
                                <div className=''>
                                    <small>Deadline</small>
                                    <p className='font-medium text-md'>{deadline_date}</p>
                                </div>
                                <div className=''>
                                    <small>Experience</small>
                                    <p className='font-medium text-md'>{experience ? experience : "N/A"}</p>
                                </div>
                                <div className=''>
                                    <small>Job Type</small>
                                    <p className='font-medium text-md capitalize'>{job_type}</p>
                                </div>
                                <div className=''>
                                    <small>Job Category</small>
                                    <p className='font-medium text-md capitalize'>{category}</p>
                                </div>
                                <div className=''>
                                    <small>Skills</small>
                                    <p className='flex flex-wrap gap-1'>
                                        {
                                            skills.split(',').map((skill, index) => <span key={index} className='font-medium text-md px-3 py-1 text-sm rounded-full bg-slate-200'>{skill}</span>)
                                        }
                                    </p>
                                </div>
                                <div className=''>
                                    <small>Salary</small>
                                    <p className='font-medium text-md'>{salary_range}</p>
                                </div>
                            </div>
                            <div className='space-y-3 bg-slate-100 hover:shadow-md rounded-3xl p-5'>
                                <div className='flex flex-wrap gap-3 items-center'>
                                    <div>
                                        {
                                            users.map(use => <div key={use._id}>
                                                {
                                                    use?.email === company_email && <>
                                                        <Link to={`/companyDetails/${_id}`} className='tooltip tooltip-left rounded-2xl border-2 hover:border-2 hover:border-indigo-700 hover:shadow-md transition-all ease-out delay-0 duration-500' data-tip='View company details'>
                                                            <img className='w-16 h-16 rounded-2xl' src={use?.image} alt="" />
                                                        </Link>
                                                    </>
                                                }
                                            </div>)
                                        }
                                    </div>

                                    <p className='font-medium text-xl'>{company_name}</p>
                                </div>
                                {
                                    companies.map(company => <div key={company._id}>
                                        {
                                            company.email === company_email && <>
                                                <div className=''>
                                                    <small>Location</small>
                                                    <p className='flex font-medium text-md'>{area},{city},{country}</p>
                                                </div>
                                                <div className=''>
                                                    <small>Founded</small>
                                                    <p className='font-medium text-md'>{company.founded_in}</p>
                                                </div>
                                                <div className=''>
                                                    <small>Company Size</small>
                                                    <p className='font-medium text-md'>{company.company_size}</p>
                                                </div>
                                                <div className=''>
                                                    <small>Website</small>
                                                    <p className='font-medium text-md'>{company.website}</p>
                                                </div>
                                                <div className=''>
                                                    <small>Email</small>
                                                    <p className='font-medium text-md'>{company_email}</p>
                                                </div>
                                            </>
                                        }
                                    </div>)
                                }

                            </div>
                        </div>
                        <ToastContainer />
                    </div>
                )
            }
        </>
    );
};

export default JobDetails;