// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import useAxiosPublic from '../../../hooks/useAxiosPublic';

import coverImg from '../../../assets/images/banner 5.jpg';
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const { _id, job_title, category, job_type, location, apply_role, company_name,
        company_logo, date, experience, salary_range, overview, requirements, skills, responsibilities } = useLoaderData();

    return (
        <div className='w-9/12 mx-auto mt-10 mb-20 text-slate-700 grid grid-cols-4 gap-5'>
            <div className='col-span-3 space-y-6'>
                <div className='w-full h-[30vh] relative group'>
                    <img className='w-full h-full object-cover rounded-3xl group-hover:shadow-md' src={coverImg} alt="" />
                    <div className='w-full h-full rounded-3xl absolute top-0 left-0 bg-gradient-to-tr from-transparent to-black/30 group-hover:from-transparent group-hover:to-transparent'></div>
                    {
                        apply_role === 'open' ? <p className='absolute top-4 right-4 text-xs font-light text-white bg-green-600 px-2 border-2 border-green-300 rounded-full'>{apply_role}</p>
                            : <p className='absolute top-4 right-4 text-xs font-light text-white bg-red-600 px-2 border-2 border-red-300 rounded-full'>{apply_role}</p>
                    }
                </div>
                <div className='w-full flex justify-between items-center p-5'>
                    <h2 className='font-bold text-4xl'>{job_title}</h2>
                    <div className='flex gap-2'>
                        <button className="m-1 shadow-lg border-2 border-indigo-800 rounded-lg font-medium bg-white px-8 py-2 text-indigo-800 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white transition-all ease-out delay-0 duration-500">Save</button>
                        <button className="m-1 shadow-lg border-2 border-indigo-800 rounded-lg font-medium bg-indigo-800 px-8 py-2 text-white hover:bg-indigo-500 hover:border-indigo-500 hover:text-white transition-all ease-out delay-0 duration-500">Apply</button>
                    </div>
                </div>
                <div className='space-y-4 text-slate-700 bg-slate-50 hover:shadow-md rounded-3xl p-5'>
                    <div className='p-4 bg-white rounded-2xl space-y-2'>
                        <h3 className='font-semibold text-2xl'>Overview</h3>
                        <p className='text-lg text-slate-500'>{overview}</p>
                    </div>
                    <div className='p-4 bg-white rounded-2xl space-y-2'>
                        <h3 className='font-semibold text-2xl'>Responsibilities</h3>
                        <p className='text-lg text-slate-500'>{responsibilities}</p>
                    </div>
                    <div className='p-4 bg-white rounded-2xl space-y-2'>
                        <h3 className='font-semibold text-2xl'>Requirements</h3>
                        <p className='text-lg text-slate-500'>{requirements}</p>
                    </div>
                    <div className='p-4 bg-white rounded-2xl space-y-2'>
                        <h3 className='font-semibold text-2xl'>Benefits</h3>
                        <p className='text-lg text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At consectetur fugiat quas asperiores optio. Laboriosam est magnam explicabo cum voluptate eos minus debitis ab soluta placeat, illo unde numquam ratione beatae nesciunt ad blanditiis rerum esse recusandae. Animi sapiente fuga, blanditiis at facere rem commodi eaque ut excepturi dolores eius?</p>
                    </div>
                    <div className='p-4 bg-white rounded-2xl space-y-2'>
                        <h3 className='font-semibold text-2xl'>Apply Instruction</h3>
                        <p className='text-lg text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At consectetur fugiat quas asperiores optio. Laboriosam est magnam explicabo cum voluptate eos minus debitis ab soluta placeat, illo unde numquam ratione beatae nesciunt ad blanditiis rerum esse recusandae. Animi sapiente fuga, blanditiis at facere rem commodi eaque ut excepturi dolores eius?</p>
                    </div>
                </div>
            </div>
            <div className='space-y-6'>
                <div className='space-y-3 bg-indigo-100 hover:shadow-md rounded-3xl p-5'>
                    <div className=''>
                        <small>Posted</small>
                        <p className='font-medium text-md'>{date}</p>
                    </div>
                    <div className=''>
                        <small>Deadline</small>
                        <p className='font-medium text-md'>{date}</p>
                    </div>
                    <div className=''>
                        <small>Experience</small>
                        <p className='font-medium text-md'>{experience == '' ? experience : 'Entry Level'}</p>
                    </div>
                    <div className=''>
                        <small>Job Type</small>
                        <p className='font-medium text-md'>{job_type}</p>
                    </div>
                    <div className=''>
                        <small>Job Category</small>
                        <p className='font-medium text-md'>{category}</p>
                    </div>
                    <div className=''>
                        <small>Skills</small>
                        <p className='flex flex-wrap gap-1'>
                            {
                                skills.map((skill, index) => <span key={index} className='font-medium text-md px-3 py-1 text-sm rounded-full bg-slate-100'>{skill}</span>)
                            }
                        </p>
                    </div>
                    <div className=''>
                        <small>Salary</small>
                        <p className='font-medium text-md'>{salary_range}</p>
                    </div>
                </div>
                <div className='space-y-3 bg-indigo-100 hover:shadow-md rounded-3xl p-5'>
                    <div className='flex flex-wrap gap-3 items-center'>
                        <Link to={`/companyDetails/${_id}`} className='tooltip tooltip-left rounded-2xl border-2 hover:border-2 hover:border-indigo-700 hover:shadow-md transition-all ease-out delay-0 duration-500' data-tip='View company details'>
                            <img className='w-16 h-16 rounded-2xl' src={company_logo} alt="" />
                        </Link>
                        <p className='font-medium text-xl'>{company_name}</p>
                    </div>
                    <div className=''>
                        <small>Location</small>
                        <p className='font-medium text-md'>{location}</p>
                    </div>
                    <div className=''>
                        <small>Founded</small>
                        <p className='font-medium text-md'>{date}</p>
                    </div>
                    <div className=''>
                        <small>Company Size</small>
                        <p className='font-medium text-md'>{'0-11'}</p>
                    </div>
                    <div className=''>
                        <small>Website</small>
                        <p className='font-medium text-md'>{'https://website.com'}</p>
                    </div>
                    <div className=''>
                        <small>Email</small>
                        <p className='font-medium text-md'>{'example@gmail.com'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;