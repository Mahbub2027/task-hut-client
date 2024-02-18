// import React from 'react';
import { BsChatTextFill } from "react-icons/bs";
import { FaBell, FaBriefcase, FaBusinessTime, FaCalendarCheck, FaFilePowerpoint, FaHome, FaList, FaUserCheck,FaBlogger } from 'react-icons/fa';
import { FaClipboardList, FaCreditCard, FaFilePen, FaPersonCircleQuestion, FaRightFromBracket, FaUnlockKeyhole, FaUserLock, FaUserShield, FaUserTie, FaUsers, FaUsersGear } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
    const { logoutUser } = useAuth();
    const [isAdmin] = useAdmin();
    const [isBuyer] = useBuyer();

    const handleLogOut = () => {
        logoutUser()
            .then(() => { })
            .catch((error) => console.log(error));
    };

    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-slate-100 dark:bg-transparent rounded-md py-2'>
                {/* Admin data */}
                {
                    isAdmin && <>
                        <ul className="space-y-2">
                            <h1 className='text-2xl font-bold text-center my-3'>Admin Dashboard</h1>
                            {/* <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out  dark:hover:text-white hover:pl-3">
                                <FaUserTie />
                                <NavLink to='/dashboard/profile'>Admin Profile</NavLink>
                            </li> */}
                            {/* <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out  dark:hover:text-white hover:pl-3">
                                <FaUserTie />
                                <NavLink to='/dashboard/editProfile'>Edit Profile</NavLink>
                            </li> */}
                            <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                                <FaUsers />
                                <NavLink to='/dashboard/manageUsers'>Manage Users</NavLink>
                            </li>
                        </ul>
                    </>

                }
                {/* Buyer data */}
                {
                    isBuyer && <>
                        <ul className="space-y-2">
                            <h1 className='text-2xl font-bold text-center my-3'>Company Dashboard</h1>
                            {/* <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out  dark:hover:text-white hover:pl-3">
                                <FaUserTie />
                                <NavLink to='/dashboard/profile'>Buyer Profile</NavLink>
                            </li> */}
                            <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out  dark:hover:text-white hover:pl-3">
                                <FaUserTie />
                                <NavLink to='/dashboard/editProfile'>Edit Profile</NavLink>
                            </li>
                            <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out  dark:hover:text-white hover:pl-3">
                                <BsChatTextFill />
                                <NavLink to='/dashboard/companyChat'>Chat</NavLink>
                            </li>
                            <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out  dark:hover:text-white hover:pl-3">
                                <FaBlogger />
                                <NavLink to='/dashboard/companyBlog'>Blog</NavLink>
                            </li>
                            <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                                <FaFilePowerpoint />
                                <NavLink to='/dashboard/companyPosts'>Company Posts</NavLink>
                            </li>
                            <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                                <FaFilePen />
                                <NavLink to='/dashboard/postAJob'>Post a Job</NavLink>
                            </li>
                            <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                                <FaList />
                                <NavLink to='/dashboard/applicantList'>Applicant List</NavLink>
                            </li>
                            <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                                <FaUserCheck />
                                <NavLink to='/dashboard/shortlistedApplicants'>Shortlisted Applicants</NavLink>
                            </li>
                            <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                                <FaClipboardList />
                                <NavLink to='/dashboard/interviewTask'>Interview Task</NavLink>
                            </li>
                        </ul>
                    </>

                }

                {/* user data */}
                {
                    (!isAdmin && !isBuyer) && <>
                        <ul className="space-y-2">
                            <h1 className='text-2xl font-bold text-center my-3'>Employee Dashboard</h1>
                            <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out  dark:hover:text-white hover:pl-3">
                                <FaUserTie />
                                <NavLink to='/dashboard/editProfile'>Edit Profile</NavLink>
                            </li>
                            <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out  dark:hover:text-white hover:pl-3">
                                <BsChatTextFill />
                                <NavLink to='/dashboard/userChat'>Chat</NavLink>
                            </li>
                            <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                                <FaBriefcase />
                                <NavLink to='/dashboard/savedJobs'>Saved Jobs</NavLink>
                            </li>
                            <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                                <FaCalendarCheck />
                                <NavLink to='/dashboard/appliedJobs'>Applied Jobs</NavLink>
                            </li>
                            <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                                <FaBusinessTime />
                                <NavLink to='/dashboard/jobInterview'>Job Interview</NavLink>
                            </li>
                        </ul>
                    </>
                }


                <div className='divider'></div>

                {/* shared menu */}
                <ul>
                    <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                        <FaBell /><NavLink to='/dashboard/notifications'> Notifications</NavLink>
                    </li>
                    <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                        <FaUserShield />
                        <NavLink to='/dashboard/trustVerification'>Trust & Verification</NavLink>
                    </li>
                    <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                        <FaUnlockKeyhole />
                        <NavLink to='/dashboard/security'>Security</NavLink>
                    </li>
                    <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                        <FaUsersGear />
                        <NavLink to='/dashboard/account'>Account</NavLink>
                    </li>

                    <div className='divider'></div>
                    <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                        <FaHome></FaHome><NavLink to='/'> Home</NavLink>
                    </li>
                    <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                        <FaClipboardList></FaClipboardList> <NavLink to='/findJobs'>Find Jobs</NavLink>
                    </li>
                    <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                        <FaPersonCircleQuestion></FaPersonCircleQuestion> <NavLink to='/support'>Support</NavLink>
                    </li>
                    <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                        <FaRightFromBracket />
                        <NavLink to='/login' onClick={handleLogOut}>Logout</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1 shadow-md border-2 border-slate-100 dark:border-slate-700 rounded-lg'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;