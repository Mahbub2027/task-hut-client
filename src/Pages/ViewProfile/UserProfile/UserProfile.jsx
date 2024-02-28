import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaLinkedin, FaLocationDot, FaPhone, FaShareNodes, FaWeibo } from 'react-icons/fa6';
import { FaVoicemail } from 'react-icons/fa';
import { FacebookShareButton } from 'react-share';


const UserProfile = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const { data: employess = [] } = useQuery({
        queryKey: ['employee'],
        queryFn: async () => {
            const employeeRes = await axiosPublic.get("/employees");
            return employeeRes.data;
        }
    })
    return (
        <div>
            {/* <h2>User Profile</h2> */}
            {
                employess.map(employee => <div key={employee._id}>
                    {
                        employee.employee_email === user?.email && <>
                            <div className='flex gap-5'>
                                <div className='w-72 border-2 space-y-2 p-2 rounded-xl'>
                                    <img className='w-full h-40 rounded-xl ' src={user?.photoURL} alt="" />
                                    <p className='flex items-center text-sm'><FaLocationDot></FaLocationDot> {employee.location}, {employee.city},{employee.country}</p>
                                    <p><span className='font-bold'>Date of Birth:</span> {employee.date_birth}</p>
                                    <p><span className='font-bold'>Availablity:</span> {employee.workPreference}</p>
                                    <p><span className='font-bold'>Experience</span> {employee.experience} years</p>
                                    <p><span className='font-bold'>Resume</span> {employee.resume}</p>
                                </div>
                                <div className='flex-1 border-2 p-3 rounded-xl'>
                                    <div>
                                        <p className='text-4xl font-bold mb-2'>{employee?.name}</p>
                                        <p className='text-xl font-bold italic mb-5'>{employee?.profession}</p>
                                        <p className='text-justify'><span className='font-bold'>About:</span> {employee?.about}</p>

                                    </div>
                                    <div className='flex gap-4 my-5 items-center justify-end'>
                                        <button className="inline-flex items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 group-hover:from-purple-500 group-hover:to-purple-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80">
                                                <FacebookShareButton url={window?.location?.href}>
                                                <span className="flex items-center gap-1 mx-1 my-1 ps-1.5 pe-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                <FaShareNodes />Share <FaFacebookF></FaFacebookF></span>
                                                </FacebookShareButton>
                                            
                                        </button>
                                        <Link to={`/updateEmployee/${employee._id}`}><button type="button" className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                            Update Profile</button></Link>
                                    </div>
                                </div>

                                <div className='w-80'>
                                    <div className='border-2 space-y-3 p-2 rounded-xl'>
                                        <h2 className='text-xl font-bold'>Developer Info</h2>
                                        <p className='flex items-center gap-3'><FaVoicemail></FaVoicemail>{user.email}</p>
                                        <p className='flex items-center gap-3'><FaPhone></FaPhone>{employee.number}</p>
                                        <p className='flex items-center gap-3'><FaLinkedin></FaLinkedin><a href={employee.linkedin}>{employee.linkedin}</a></p>
                                        <p className='flex items-center gap-3'><FaGithub></FaGithub><a href={employee.github}>{employee.github}</a></p>
                                        <p className='flex items-center gap-3'><FaWeibo></FaWeibo><a href={employee.portfolio}>{employee.portfolio}</a></p>
                                    </div>
                                    <div className=' border-2 mt-5 rounded-xl p-3'>
                                        <h2 className='text-xl font-bold mb-5'>Skills</h2>
                                    <p className='flex flex-wrap gap-1'>
                                        {
                                            employee.skills.split(',').map((skill, index) => <span key={index} className='font-medium text-md px-3 py-1 text-sm rounded-full bg-slate-100'>{skill}</span>)
                                        }
                                    </p>
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

export default UserProfile;