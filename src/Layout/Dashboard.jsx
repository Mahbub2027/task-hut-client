// import React from 'react';
import { BsChatTextFill } from "react-icons/bs";
import {  FaBriefcase, FaBusinessTime, FaCalendarCheck, FaFilePowerpoint, FaHome, FaList, FaUserCheck, FaBlogger, FaPlus,  FaAngleDown, FaEye, FaFileContract } from 'react-icons/fa';
import { FaArrowTrendUp, FaClipboardList, FaFilePen, FaGears, FaPersonCircleQuestion, FaRightFromBracket, FaUnlockKeyhole, FaUserShield, FaUserTie, FaUsersGear } from 'react-icons/fa6';
import { TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useAuth from '../hooks/useAuth';
import { useState } from "react";
import { MdContactMail } from "react-icons/md";
import { RxCrumpledPaper } from "react-icons/rx";
import { TiDocumentDelete } from "react-icons/ti";


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
        <div className='flex items-start gap-10 p-2'>
            <div className={collapse ? 'max-w-20 h-[98dvh] sticky top-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent rounded-2xl shadow-lg shadow-indigo-50 bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 text-white py-4 px-2 text-center' : 'min-w-96 h-[98dvh] sticky top-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent rounded-2xl shadow-lg shadow-indigo-50 bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 text-white p-4'}>
                <button onClick={() => setCollapse(!collapse)} className="text-center p-1 rounded-xl border-2 border-indigo-400 text-indigo-100 hover:text-white hover:border-slate-300 bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 hover:from-indigo-400 hover:via-indigo-600 hover:to-indigo-600 transition-all ease-linear delay-100 duration-300">
                    {collapse ? <TbLayoutSidebarLeftExpandFilled className="w-7 h-7 shadow-md" /> : <TbLayoutSidebarLeftCollapseFilled className="w-7 h-7 shadow-md" />}
                </button>
                {/* Admin data */}
                {
                    isAdmin && <>
                        <div className="space-y-2">
                            <h1 className={collapse ? 'hidden' : 'block text-2xl font-bold my-3'}>Admin Dashboard</h1>
                            {/* divider */}
                            <div className='h-0.5 m-4 bg-gradient-to-r from-white/0 via-white/40 to-white/0'></div>
                           
                            <NavLink to='/dashboard/manageUsers' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                <FaUserTie className="w-5 h-5" />
                                <span className={collapse ? 'hidden' : 'block'}>All Users</span>
                            </NavLink>
                            <NavLink to='/dashboard/companyUsers' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                <FaUserTie className="w-5 h-5" />
                                <span className={collapse ? 'hidden' : 'block'}>Companies</span>
                            </NavLink>
                            <NavLink to='/dashboard/careerPost' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                <FaFileContract className="w-5 h-5" />
                                <span className={collapse ? 'hidden' : 'block'}>Hire For TaskHut</span>
                            </NavLink>
                            <NavLink to='/dashboard/manageCareerPost' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                <TiDocumentDelete className="w-5 h-5" />
                                <span className={collapse ? 'hidden' : 'block'}>Manage Career Post</span>
                            </NavLink>
                            <NavLink to='/dashboard/newsLetterSubscribers' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                <MdContactMail className="w-5 h-5" />
                                <span className={collapse ? 'hidden' : 'block'}>NewsLetter Subscribers</span>
                            </NavLink>
                            <NavLink to='/dashboard/analytics' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                <FaArrowTrendUp className="w-5 h-5" />
                                <span className={collapse ? 'hidden' : 'block'}>Analytics</span>
                            </NavLink>
                            <NavLink to='/dashboard/manageBlogs' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                <RxCrumpledPaper className="w-5 h-5" />
                                <span className={collapse ? 'hidden' : 'block'}>Manage Blogs</span>
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
                            
                            <div className="space-y-2">
                                <NavLink to='/dashboard/editProfile' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                    <FaUserTie className="w-5 h-5" />
                                    <span className={collapse ? 'hidden' : 'block'}>Edit Profile</span>
                                </NavLink>
                                <NavLink to='/dashboard/companyChat' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                    <BsChatTextFill className="w-5 h-5" />
                                    <span className={collapse ? 'hidden' : 'block'}>Chat</span>
                                </NavLink>

                                {/* Create new dropdown */}
                                <details className='cursor-pointer'>
                                    <summary className="hover-link">
                                        <p className="flex gap-3 items-center">
                                            <FaPlus className="w-5 h-5" />
                                            <span className={collapse ? 'hidden' : 'block'}>Create new</span>
                                        </p>
                                        <FaAngleDown />
                                    </summary>
                                    <div className={collapse ? 'ml-1' : 'ml-3'}>
                                        <NavLink to='/dashboard/postAJob' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                            <FaFilePen className="w-5 h-5" />
                                            <span className={collapse ? 'hidden' : 'block'}>Job Post</span>
                                        </NavLink>
                                        <NavLink to='/dashboard/companyBlog' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                            <FaBlogger className="w-5 h-5" />
                                            <span className={collapse ? 'hidden' : 'block'}>Blog Post</span>
                                        </NavLink>
                                    </div>
                                </details>
                                {/* View dropdown */}
                                <details className='cursor-pointer'>
                                    <summary className="hover-link">
                                        <p className="flex gap-3 items-center">
                                            <FaEye className="w-5 h-5" />
                                            <span className={collapse ? 'hidden' : 'block'}>View</span>
                                        </p>
                                        <FaAngleDown />
                                    </summary>
                                    <div className={collapse ? 'ml-1' : 'ml-3'}>
                                        <NavLink to='/dashboard/companyPosts' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                            <FaFilePowerpoint className="w-5 h-5" />
                                            <span className={collapse ? 'hidden' : 'block'}>Company Posts</span>
                                        </NavLink>
                                        <NavLink to='/dashboard/applicantList' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                            <FaList className="w-5 h-5" />
                                            <span className={collapse ? 'hidden' : 'block'}>Applicant List</span>
                                        </NavLink>
                                        <NavLink to='/dashboard/shortlistedApplicants' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                            <FaUserCheck className="w-5 h-5" />
                                            <span className={collapse ? 'hidden' : 'block'}>Shortlisted Applicants</span>
                                        </NavLink>
                                        <NavLink to='/dashboard/interviewTask' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                            <FaClipboardList className="w-5 h-5" />
                                            <span className={collapse ? 'hidden' : 'block'}>Hired List</span>
                                        </NavLink>
                                    </div>
                                </details>

                                <NavLink to='/support' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                    <FaPersonCircleQuestion className="w-5 h-5" />
                                    <span className={collapse ? 'hidden' : 'block'}>Support</span>
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
                                    <FaUserTie className="w-5 h-5" />
                                    <span className={collapse ? 'hidden' : 'block'}>Edit Profile</span>
                                </NavLink>
                                <NavLink to='/dashboard/userChat' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                    <BsChatTextFill className="w-5 h-5" />
                                    <span className={collapse ? 'hidden' : 'block'}>Chat</span>
                                </NavLink>
                                <details className='cursor-pointer'>
                                    <summary className="hover-link">
                                        <p className="flex gap-3">
                                            <FaEye className="w-5 h-5" />
                                            <span className={collapse ? 'hidden' : 'block'}>View</span>
                                        </p>
                                        <FaAngleDown />
                                    </summary>
                                    <div className={collapse ? 'ml-1' : 'ml-3'}>
                                        <NavLink to='/dashboard/savedJobs' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                            <FaBriefcase className="w-5 h-5" />
                                            <span className={collapse ? 'hidden' : 'block'}>Saved Jobs</span>
                                        </NavLink>
                                        <NavLink to='/dashboard/appliedJobs' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                            <FaCalendarCheck className="w-5 h-5" />
                                            <span className={collapse ? 'hidden' : 'block'}>Applied Jobs</span>
                                        </NavLink>
                                    </div>
                                </details>
                                <NavLink to='/dashboard/jobInterview' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                    <FaBusinessTime className="w-5 h-5" />
                                    <span className={collapse ? 'hidden' : 'block'}>Job Interview</span>
                                </NavLink>
                                <NavLink to='/support' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                    <FaPersonCircleQuestion className="w-5 h-5" />
                                    <span className={collapse ? 'hidden' : 'block'}>Support</span>
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
                    {isAdmin ? "" : <details className='cursor-pointer'>
                        <summary className="hover-link">
                            <p className="flex gap-3">
                                <FaGears className="w-5 h-5" />
                                <span className={collapse ? 'hidden' : 'block'}>Settings</span>
                            </p>
                            <FaAngleDown />
                        </summary>
                        <div className={collapse ? 'ml-1' : 'ml-3'}>
                            <NavLink to='/dashboard/trustVerification' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                <FaUserShield className="w-5 h-5" />
                                <span className={collapse ? 'hidden' : 'block'}>Trust & Verification</span>
                            </NavLink>
                            <NavLink to='/dashboard/security' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                <FaUnlockKeyhole className="w-5 h-5" />
                                <span className={collapse ? 'hidden' : 'block'}>Security</span>
                            </NavLink>
                            <NavLink to='/dashboard/account' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                                <FaUsersGear className="w-5 h-5" />
                                <span className={collapse ? 'hidden' : 'block'}>Account</span>
                            </NavLink>
                        </div>
                    </details>}

                    <NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : 'hover-link'}>
                        <FaHome className="w-5 h-5" />
                        <span className={collapse ? 'hidden' : 'block'}> Home</span>
                    </NavLink>
                    <NavLink to='/' className='hover:bg-gradient-to-br hover:from-red-400 hover:via-red-600 hover:to-red-800 text-white flex items-center gap-4 rounded-full tracking-wider pl-4 p-2'>
                        <FaRightFromBracket className="w-5 h-5" />
                        <span onClick={handleLogOut} className={collapse ? 'hidden' : 'block'}>Logout</span>
                    </NavLink>
                </div>
            </div>
            <div className='grow'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;