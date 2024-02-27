import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import {FaFacebookF, FaGithub, FaLinkedin, FaLocationDot, FaPhone, FaShareNodes, FaWeibo } from 'react-icons/fa6';
import { FaVoicemail } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FacebookShareButton } from 'react-share';

const CompanyProfile = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const { data: companies = [] } = useQuery({
        queryKey: ['company'],
        queryFn: async () => {
            const companyRes = await axiosPublic.get("/companies")
            return companyRes.data;
        }
    })
    return (
        <div className='w-11/12 mx-auto my-5'>
            {/* <h2>Company Profile {companies.length}</h2> */}
            {
                companies.map(company => <div key={company._id}>
                    {
                        company.email === user?.email && <>
                            <div className='flex gap-5'>
                                <div className='w-60 border-2 space-y-2 p-2 rounded-xl'>
                                    <img className='w-full h-40 rounded-xl ' src={user?.photoURL} alt="" />
                                    <p className='flex items-center text-sm'><FaLocationDot></FaLocationDot> {company.location}, {company.city},{company.country}</p>
                                    <p><span className='font-bold'>Founded in:</span> {company.founded_in}</p>
                                </div>
                                <div className='flex-1 border-2 p-3 rounded-xl'>
                                    <div>
                                        <p className='text-3xl font-bold mb-5'>{company?.company_name}</p>
                                        <p className='text-justify'><span className='font-bold'>About:</span> {company?.about}</p>

                                    </div>
                                    <div className='flex gap-4 my-5 items-center justify-end'>
                                        <button className="inline-flex items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 group-hover:from-purple-500 group-hover:to-purple-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80">
                                            <FacebookShareButton url={window?.location?.href}>
                                                <span className="flex items-center gap-1 mx-1 my-1 ps-1.5 pe-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                    <FaShareNodes />Share <FaFacebookF></FaFacebookF></span>
                                            </FacebookShareButton>
                                        </button>
                                        <Link to='/dashboard/editProfile'><button type="button" className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Edit Profile</button></Link>
                                    </div>
                                </div>

                                <div className='w-60'>
                                    <div className='border-2 space-y-3 p-2 rounded-xl'>
                                        <h2 className='text-xl font-bold'>Developer Info</h2>
                                        <p className='flex items-center gap-3'><FaVoicemail></FaVoicemail>{company.email}</p>
                                        <p className='flex items-center gap-3'><FaPhone></FaPhone>{company.phone}</p>
                                        <p className='flex items-center gap-3'><FaLinkedin></FaLinkedin>{company.linkedin}</p>
                                        <p className='flex items-center gap-3'><FaGithub></FaGithub><a href={company.github}>{company.github}</a></p>
                                        <p className='flex items-center gap-3'><FaWeibo></FaWeibo>{company.website}</p>
                                    </div>

                                </div>
                            </div>
                        </>
                    }
                </div>)
            }
        </div>
    );
};

export default CompanyProfile;