import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Portfolio from '../UserProfile/components/Portfolio';
import Verification from '../Verification/Verification';
import Skills from '../UserProfile/components/Skills';
import GithubCard from '../UserProfile/components/GithubCard';
import DeveloperInfo from '../UserProfile/components/DeveloperInfo';
import { FacebookShareButton } from 'react-share';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Certification = () => {

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
        <>
            {employees.map(employee => <div key={employee._id} className='w-11/12 lg:w-9/12 mx-auto my-4'>
                {
                    employee.employee_email === user?.email && <>

                        <div className='grid grid-rows-2 gap-8'>
                            <div className='grid grid-cols-5 gap-4'>
                                {/* profile info left */}
                                <div className='col-span-5 lg:col-span-2 h-full'>
                                    <div className='border-2 space-y-2 p-4 rounded-xl '>
                                        <img className='w-full h-1/2 rounded-xl object-contain' src={user?.photoURL} alt="" />
                                        <p>
                                            <span className='font-bold'>Location: </span>
                                            {employee.location}, {employee.city}, {employee.country}
                                        </p>
                                        <p><span className='font-bold'>Date of Birth:</span> {employee.date_birth}</p>
                                        <p><span className='font-bold'>Availablity:</span> {employee.workPreference}</p>
                                        <p><span className='font-bold'>Experience</span> {employee.experience} years</p>
                                    </div>
                                </div>
                                {/* profile info right */}
                                <div className='col-span-5 lg:col-span-3'>
                                    <div className='flex-1 border-2 p-4 rounded-xl'>
                                        <div>
                                            <p className='text-4xl font-bold mb-2'>{employee?.name}</p>
                                            <p className='text-xl font-bold italic mb-5'>{employee?.profession}</p>
                                            <hr className="my-3 dark:opacity-50" />
                                            <div className='bg-slate-200 p-4 rounded-xl '>
                                                <span className='font-bold uppercase'>Summary:</span>
                                                <p className='text-justify'>{employee?.about}</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-4 my-5 items-center justify-end'>
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
                            <div className='grid grid-cols-4 gap-4'>
                                <div className='col-span-4 lg:col-span-2'>
                                    <Verification number={employee.number} email={user.email} linkedin={employee.linkedin} github={employee.github} />
                                </div>
                                <div className='col-span-4 lg:col-span-2'>
                                    <Skills skills={employee.skills} />
                                </div>
                            </div>
                            <div className=''>row 3
                                <Portfolio url={employee.portfolio} />
                            </div>
                            <div className=''>row 4
                                <div>
                                    {/* <GithubCard github={employee.github}/> */}
                                </div>
                                <div>
                                    <DeveloperInfo number={employee.number} email={user.email} linkedin={employee.linkedin} github={employee.github} resume={employee.resume} />
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
            )}
        </>
    );
};

export default Certification;