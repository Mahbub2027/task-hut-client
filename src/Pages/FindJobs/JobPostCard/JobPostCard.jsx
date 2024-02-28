import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const JobPostCard = ({ job }) => {
    const axiosPublic = useAxiosPublic();
    const { _id, job_title, category, job_type, area, city, country, apply_role,
        company_email, company_name, company_logo, publish_date, deadline_date } = job;
    // console.log(job)    

    const { data: companies = [] } = useQuery({
        queryKey: ['company'],
        queryFn: async () => {
            const companyInfo = await axiosPublic.get("/companies");
            return companyInfo.data;
        }
    })

    const { data: users = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const userInfo = await axiosPublic.get("/users");
            return userInfo.data;
        }
    })
    return (
        <>
            <div className='relative border-2 text-slate-700 p-4 space-y-3 rounded-3xl hover:shadow-md hover:border-indigo-400 transition-all ease-out delay-0 duration-500'>
                {
                    apply_role === 'open' ? <p className='absolute top-4 right-4 text-xs font-light text-white bg-green-600 px-2 border-2 border-green-300 rounded-full'>{apply_role}</p>
                        : <p className='absolute top-4 right-4 text-xs font-light text-white bg-red-600 px-2 border-2 border-red-300 rounded-full'>{apply_role}</p>
                }
                <div className=''>
                    <div className='flex gap-2 mb-2'>
                        <p className='px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700 capitalize'>{job_type}</p>
                        <p className='px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700 capitalize'>{category}</p>
                    </div>
                    <Link to={`/jobDetails/${_id}`} className='tooltip tooltip-right text-left font-bold text-2xl hover:text-indigo-700 transition-all ease-out delay-0 duration-500' data-tip='View job details'>{job_title}</Link>
                    <div className='flex gap-1 items-start'>
                        <FaLocationDot className='mt-1' />
                        <p className='flex flex-wrap '>{area}, {city}, {country}</p>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='space-y-1'>
                        <h3 className='font-medium text-lg'>{company_name}</h3>
                        <p className='text-sm'>{publish_date} Posted</p>
                        <p className='text-sm'>{deadline_date} Deadline</p>
                    </div>
                    <div>
                        {
                            users.map(use => <div key={use._id}>
                                {
                                    use.email === company_email && <>
                                        {
                                            companies.map(company => <div key={company._id}>
                                                {
                                                    company.email === company_email && <>
                                                        <Link to={`/companyDetails/${company._id}`} className='tooltip tooltip-left rounded-2xl border-2 hover:border-2 hover:border-indigo-700 hover:shadow-md transition-all ease-out delay-0 duration-500' data-tip='View company details'>
                                                            <img className='w-16 h-16 rounded-2xl' src={use?.image} alt="" />
                                                        </Link>
                                                    </>
                                                }
                                            </div>)
                                        }
                                    </>
                                }
                            </div>)
                        }
                    </div>

                </div>
            </div>
        </>
    );
};

export default JobPostCard;