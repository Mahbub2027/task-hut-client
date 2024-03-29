import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { FaBriefcase, FaBuildingUser, FaDownload, FaEnvelope, FaGithub, FaGlobe, FaLinkedin, FaLocationDot, FaPhoneVolume, FaStopwatch } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";

const EmployeeDetails = () => {
    const axiosPublic = useAxiosPublic();
    const { _id, name, employee_email, date_birth, cover_img, linkedin, location, city, country,
        profession, experience, workPreference, resume, portfolio, github, skills, about, number } = useLoaderData();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users`)
            return res.data;
        }
    })

    return (
        <div className='w-11/12 lg:w-9/12 mx-auto my-10'>
            <div className='w-full h-[50vh] relative group mb-10'>
                <img className='w-full h-full object-fit rounded-3xl group-hover:shadow-md' src={cover_img} alt="" />

                {
                    users.map(use => <div key={use._id}>
                        {
                            use.email === employee_email && <div className='flex items-center gap-2 absolute bottom-5 left-5 bg-white rounded-full'>
                                <img className='w-12 h-12 lg:w-24 lg:h-24 rounded-full' src={use?.image} alt="" />
                                <div className='lg:space-y-2 lg:pr-4 pr-4'>
                                    <h3 className='font-semibold text-lg md:text-xl lg:text-2xl'>{name}</h3>
                                    <p className='lg:text-lg text-slate-600'>{profession}</p>
                                </div>
                            </div>
                        }
                    </div>)
                }
            </div>
            {/* <span><img className='w-28 h-28 rounded-full' src={user?.photoURL} alt="" /></span> */}
            <div className="flex flex-wrap items-center gap-4 p-4">
                <p className="tooltip font-medium text-md border rounded-full hover:text-indigo-700 hover:border-indigo-700 flex items-center gap-2 px-4 py-2 transition-all ease-out delay-0 duration-500" data-tip={number}><FaPhoneVolume /> Phone</p>
                <p className="tooltip font-medium text-md border rounded-full hover:text-indigo-700 hover:border-indigo-700 flex items-center gap-2 px-4 py-2 transition-all ease-out delay-0 duration-500" data-tip={employee_email}><FaEnvelope /> Email</p>
                <Link to={linkedin} target='_blank' className="tooltip font-medium text-md border rounded-full hover:text-indigo-700 hover:border-indigo-700 flex items-center gap-2 px-4 py-2 transition-all ease-out delay-0 duration-500" data-tip={linkedin}><FaLinkedin /> Linkedin</Link>
                <Link to={github} target='_blank' className="tooltip font-medium text-md border rounded-full hover:text-indigo-700 hover:border-indigo-700 flex items-center gap-2 px-4 py-2 transition-all ease-out delay-0 duration-500" data-tip={github}><FaGithub />Github</Link>
                <Link to={portfolio} target='_blank' className="tooltip font-medium text-md border rounded-full hover:text-indigo-700 hover:border-indigo-700 flex items-center gap-2 px-4 py-2 transition-all ease-out delay-0 duration-500" data-tip={portfolio}><FaGlobe /> Portfolio</Link>
                <Link to={resume} target='_blank' className="tooltip font-medium text-md border rounded-full hover:text-indigo-700 hover:border-indigo-700 flex items-center gap-2 px-4 py-2 transition-all ease-out delay-0 duration-500" data-tip="View resume"><FaDownload /> Resume</Link>
            </div>

            <div className='flex flex-col md:flex-row items-start gap-5 p-4'>
                <div className='w-full lg:w-2/3 p-4 space-y-1 border bg-slate-50 rounded-3xl'>
                    <h3 className='font-semibold text-2xl text-slate-600'>Overview:</h3>
                    <p>{about}</p>
                </div>
                <div className='w-full lg:w-1/3 space-y-4 bg-slate-50 p-4 rounded-3xl border'>
                    <p className='px-2 flex flex-wrap items-center gap-2'>
                    <GiSkills className='w-5 h-5'/><span className='font-medium'>Skills:</span>
                        {
                            skills.split(",").map((skill, index) => <span key={index} className='font-medium text-md px-3 py-1 text-sm rounded-full bg-slate-100'>{skill}</span>)
                        }
                    </p>
                    <p className='px-2 flex items-center gap-2'><FaLocationDot className='w-5 h-5'/><span className='font-medium'>Location:</span> {location}, {city}, {country}</p>
                    <p className='px-2 flex items-center gap-2'><FaBriefcase className='w-5 h-5'/><span className='font-medium'>Date of Birth:</span> {date_birth}</p>
                    <p className='px-2 flex items-center gap-2'><FaStopwatch className='w-5 h-5'/><span className='font-medium'>Work Preference:</span> {workPreference}</p>
                    <p className='px-2 flex items-center gap-2'><FaBuildingUser className='w-5 h-5'/><span className='font-medium'>Experience:</span> {experience} yrs</p>
                </div>
            </div>
            

        </div>
    );
};

export default EmployeeDetails;