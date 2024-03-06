import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Portfolio from '../UserProfile/components/Portfolio';
import Verification from './components/Verification';
import Skills from '../UserProfile/components/Skills';
import DeveloperInfo from '../UserProfile/components/DeveloperInfo';
import { FacebookShareButton } from 'react-share';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: employees = [] } = useQuery({
        queryKey: ['employee'],
        queryFn: async () => {
            const employeeRes = await axiosPublic.get("/employees");
            return employeeRes.data;
        }
    })
    return (
        <div className='w-11/12 lg:9/12 mx-auto mt-4 mb-10'>
            {/* <h2>User Profile</h2> */}
            {
                employees.map(employee => <div key={employee._id}>
                    {
                        employee.employee_email === user?.email && <>
                            <div className='flex flex-col gap-8'>
                                <div className='flex flex-col lg:flex-row gap-4 border-2 rounded-3xl '>
                                    {/* profile info left */}
                                    <div className='border-b-2 lg:border-r-2'>
                                        <div className='flex flex-col gap-8 p-4 w-[300px] h-full'>
                                            <img className='w-full h-[180px] rounded-xl object-cover' src={user?.photoURL} alt="" />
                                            <div className='p-4'>
                                                <p>
                                                    <span className='font-bold'>Location: </span>
                                                    {employee.location}, {employee.city}, {employee.country}
                                                </p>
                                                <p><span className='font-bold'>Date of Birth:</span> {employee.date_birth}</p>
                                                <p><span className='font-bold'>Availablity:</span> {employee.workPreference}</p>
                                                <p><span className='font-bold'>Experience</span> {employee.experience} years</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* profile info right */}
                                    <div className='grow'>
                                        <div className='flex-1 p-4'>
                                            <div>
                                                <p className='text-4xl font-bold mb-2'>{employee?.name}</p>
                                                <p className='text-xl font-bold italic mb-5'>{employee?.profession}</p>
                                                <hr className="my-3 dark:opacity-50" />
                                                <div className='bg-slate-200 p-4 rounded-xl '>
                                                    <span className='font-bold uppercase'>Summary:</span>
                                                    <p className='text-justify'>{employee?.about}</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col lg:flex-row gap-4 my-5 items-center justify-end'>
                                                <button className="inline-flex items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 group-hover:from-indigo-500 group-hover:to-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-200 shadow-lg shadow-indigo-500/50">
                                                    <FacebookShareButton url={window?.location?.href}>
                                                        <span className="flex items-center gap-1 mx-1 my-1 px-4 py-1.5 transition-all ease-in duration-75 bg-white text-indigo-600 group-hover:text-white rounded-full group-hover:bg-opacity-0 uppercase">
                                                            Share <FaFacebookF></FaFacebookF></span>
                                                    </FacebookShareButton>
                                                </button>
                                                <Link to={`/updateEmployee/${employee._id}`}><button type="button" className="primary-btn">
                                                    Update Profile</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col lg:flex-row gap-8 w-full'>
                                    <div className='lg:w-1/2'>
                                        <Verification number={employee.number} email={user.email} linkedin={employee.linkedin} github={employee.github} />
                                    </div>
                                    <div className=''>
                                        <DeveloperInfo number={employee.number} email={user.email} linkedin={employee.linkedin} github={employee.github} resume={employee.resume} />
                                    </div>
                                    <div className='lg:w-1/2'>
                                        <Skills skills={employee.skills} />
                                    </div>
                                </div>
                                <div className=''>
                                    <Portfolio url={employee.portfolio} />
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