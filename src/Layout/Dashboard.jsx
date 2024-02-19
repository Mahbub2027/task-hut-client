// import React from 'react';
import { BsChatTextFill } from "react-icons/bs";
import { FaBell, FaBriefcase, FaBusinessTime, FaCalendarCheck, FaFilePowerpoint, FaHome, FaList, FaUserCheck, FaBlogger, FaAngleRight, FaPlus, FaAngleLeft, FaAngleDown, FaEye } from 'react-icons/fa';
import { FaClipboardList, FaCreditCard, FaFilePen, FaGears, FaPersonCircleQuestion, FaRightFromBracket, FaUnlockKeyhole, FaUserLock, FaUserShield, FaUserTie, FaUsers, FaUsersGear } from 'react-icons/fa6';
import { TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useAuth from '../hooks/useAuth';
import { useState } from "react";

const Dashboard = () => {
    const { logoutUser } = useAuth();
    const [isAdmin] = useAdmin();
    const [isBuyer] = useBuyer();

    const [collapse, setCollapse] = useState(false);
    
    const handleLogOut = () => {
        logoutUser()
            .then(() => { })
            .catch((error) => console.log(error));
    };

    return (
        <div className='flex '>
            <div className={collapse ? 'w-20 min-h-screen m-2 rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-700 to-indigo-800 text-white py-2 mx-auto text-center' : 'w-72 min-h-screen m-2 rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-700 to-indigo-800 text-white py-2 pl-4 '}>
                <button onClick={() => setCollapse(!collapse)} className="text-center p-1 rounded-xl border-2 border-slate-400 text-slate-400 hover:text-white hover:border-slate-600 hover:bg-gradient-to-br hover:from-slate-400 hover:via-slate-500 hover:to-slate-800 transition-all ease-linear delay-100 duration-300">
                    {collapse ? <TbLayoutSidebarLeftExpandFilled className="w-7 h-7 shadow-md" /> : <TbLayoutSidebarLeftCollapseFilled className="w-7 h-7 shadow-md" />}
                </button>
                {/* Admin data */}
                {
                    isAdmin && <>
                        <div className="space-y-2">
                            <h1 className={collapse ? 'hidden' : 'block text-2xl font-bold my-3'}>Admin Dashboard</h1>
                            {/* divider */}
                            <div className='h-0.5 m-4 bg-gradient-to-r from-white/0 via-white/40 to-white/0'></div>
                            {/* <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out  dark:hover:text-white hover:pl-3">
                                <FaUserTie />
                                <NavLink to='/dashboard/profile'>Admin Profile</NavLink>
                            </li> */}
                            {/* <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out  dark:hover:text-white hover:pl-3">
                                <FaUserTie />
                                <NavLink to='/dashboard/editProfile'>Edit Profile</NavLink>
                            </li> */}
                            <NavLink to='/dashboard/manageUsers' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                <FaUserTie className="w-4 h-4" />
                                <span className={collapse ? 'hidden' : 'block'}>Manage Users</span>
                            </NavLink>
                        </div>
                    </>

                }
                {/* Buyer data */}
                {
                    isBuyer && <>
                        <div className="">
                            <h1 className={collapse ? 'hidden' : 'block text-2xl font-bold my-3'}>Company Dashboard</h1>
                            {/* divider */}
                            <div className='h-0.5 m-4 bg-gradient-to-r from-white/0 via-white/40 to-white/0'></div>
                            {/* <li className="flex gap-2 items-center py-2 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out  dark:hover:text-white hover:pl-3">
                                <FaUserTie />
                                <NavLink to='/dashboard/profile'>Buyer Profile</NavLink>
                            </li> */}
                            <div className="space-y-2">
                                <NavLink to='/dashboard/editProfile' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                    <FaUserTie className="w-4 h-4" />
                                    <span className={collapse ? 'hidden' : 'block'}>Edit Profile</span>
                                </NavLink>
                                <NavLink to='/dashboard/companyChat' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                    <BsChatTextFill className="w-4 h-4" />
                                    <span className={collapse ? 'hidden' : 'block'}>Chat</span>
                                </NavLink>

                                {/* Create new dropdown */}
                                <details className='cursor-pointer'>
                                    <summary className="hover-link">
                                        <p className="flex gap-3 items-center">
                                            <FaPlus className="w-4 h-4" />
                                            <span className={collapse ? 'hidden' : 'block'}>Create new</span>
                                        </p>
                                        <FaAngleDown />
                                    </summary>
                                    <div className={collapse ? 'ml-1' : 'ml-3'}>
                                        <NavLink to='/dashboard/postAJob' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                            <FaFilePen className="w-4 h-4" />
                                            <span className={collapse ? 'hidden' : 'block'}>Job Post</span>
                                        </NavLink>
                                        <NavLink to='/dashboard/companyBlog' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                            <FaBlogger className="w-4 h-4" />
                                            <span className={collapse ? 'hidden' : 'block'}>Blog Post</span>
                                        </NavLink>
                                    </div>
                                </details>
                                {/* View dropdown */}
                                <details className='cursor-pointer'>
                                    <summary className="hover-link">
                                        <p className="flex gap-3 items-center">
                                            <FaEye className="w-4 h-4" />
                                            <span className={collapse ? 'hidden' : 'block'}>View</span>
                                        </p>
                                        <FaAngleDown />
                                    </summary>
                                    <div className={collapse ? 'ml-1' : 'ml-3'}>
                                        <NavLink to='/dashboard/companyPosts' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                            <FaFilePowerpoint className="w-4 h-4" />
                                            <span className={collapse ? 'hidden' : 'block'}>Company Posts</span>
                                        </NavLink>
                                        <NavLink to='/dashboard/applicantList' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                            <FaList className="w-4 h-4" />
                                            <span className={collapse ? 'hidden' : 'block'}>Applicant List</span>
                                        </NavLink>
                                        <NavLink to='/dashboard/shortlistedApplicants' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                            <FaUserCheck className="w-4 h-4" />
                                            <span className={collapse ? 'hidden' : 'block'}>Shortlisted Applicants</span>
                                        </NavLink>
                                    </div>
                                </details>
                                <NavLink to='/dashboard/interviewTask' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                    <FaClipboardList className="w-4 h-4" />
                                    <span className={collapse ? 'hidden' : 'block'}>Interview Task</span>
                                </NavLink>
                            </div>
                        </div>
                    </>

                }

                {/* user data */}
                {
                    (!isAdmin && !isBuyer) && <>
                        <div className="space-y-2">
                            <h1 className={collapse ? 'hidden' : 'block text-2xl font-bold my-3'}>Employee Dashboard</h1>
                            {/* divider */}
                            <div className='h-0.5 m-4 bg-gradient-to-r from-white/0 via-white/40 to-white/0'></div>
                            <div className="space-y-2">
                                <NavLink to='/dashboard/editProfile' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                    <FaUserTie className="w-4 h-4" />
                                    <span className={collapse ? 'hidden' : 'block'}>Edit Profile</span>
                                </NavLink>
                                <NavLink to='/dashboard/userChat' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                    <BsChatTextFill className="w-4 h-4" />
                                    <span className={collapse ? 'hidden' : 'block'}>Chat</span>
                                </NavLink>
                                <details className='cursor-pointer'>
                                    <summary className="hover-link">
                                        <p className="flex gap-3">
                                            <FaEye className="w-4 h-4" />
                                            <span className={collapse ? 'hidden' : 'block'}>View</span>
                                        </p>
                                        <FaAngleDown />
                                    </summary>
                                    <div className={collapse ? 'ml-1' : 'ml-3'}>
                                        <NavLink to='/dashboard/savedJobs' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                            <FaBriefcase className="w-4 h-4" />
                                            <span className={collapse ? 'hidden' : 'block'}>Saved Jobs</span>
                                        </NavLink>
                                        <NavLink to='/dashboard/appliedJobs' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                            <FaCalendarCheck className="w-4 h-4" />
                                            <span className={collapse ? 'hidden' : 'block'}>Applied Jobs</span>
                                        </NavLink>
                                    </div>
                                </details>
                                <NavLink to='/dashboard/jobInterview' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                    <FaBusinessTime className="w-4 h-4" />
                                    <span className={collapse ? 'hidden' : 'block'}>Job Interview</span>
                                </NavLink>
                            </div>
                        </div>
                    </>
                }

                {/* divider */}
                <div className='h-0.5 m-4 bg-gradient-to-r from-white/0 via-white/40 to-white/0'></div>

                {/* shared menu */}
                <div className="space-y-2">
                    {/* settings dropdown */}
                    <details className='cursor-pointer'>
                        <summary className="hover-link">
                            <p className="flex gap-3">
                                <FaGears className="w-4 h-4" />
                                <span className={collapse ? 'hidden' : 'block'}>Settings</span>
                            </p>
                            <FaAngleDown />
                        </summary>
                        <div className={collapse ? 'ml-1' : 'ml-3'}>
                            <NavLink to='/dashboard/notifications' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                <FaBell className="w-4 h-4" />
                                <span className={collapse ? 'hidden' : 'block'}> Notifications</span>
                            </NavLink>
                            <NavLink to='/dashboard/trustVerification' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                <FaUserShield className="w-4 h-4" />
                                <span className={collapse ? 'hidden' : 'block'}>Trust & Verification</span>
                            </NavLink>
                            <NavLink to='/dashboard/security' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                <FaUnlockKeyhole className="w-4 h-4" />
                                <span className={collapse ? 'hidden' : 'block'}>Security</span>
                            </NavLink>
                            <NavLink to='/dashboard/account' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                <FaUsersGear className="w-4 h-4" />
                                <span className={collapse ? 'hidden' : 'block'}>Account</span>
                            </NavLink>
                        </div>
                    </details>

                    <NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                        <FaHome className="w-4 h-4" />
                        <span className={collapse ? 'hidden' : 'block'}> Home</span>
                    </NavLink>
                    <NavLink to='/support' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                        <FaPersonCircleQuestion className="w-4 h-4" />
                        <span className={collapse ? 'hidden' : 'block'}>Support</span>
                    </NavLink>
                    <NavLink to='/login' className='hover:bg-gradient-to-br hover:from-red-400 hover:via-red-600 hover:to-red-800 text-white flex items-center gap-4 rounded-l-full tracking-wider pl-4 p-2'>
                        <FaRightFromBracket className="w-4 h-4" />
                        <span onClick={handleLogOut} className={collapse ? 'hidden' : 'block'}>Logout</span>
                    </NavLink>
                </div>
            </div>
            <div className='flex-1 shadow-md border-2 border-slate-100 dark:border-slate-700'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;