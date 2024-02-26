import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../../public/TaskhutClear.png";

// import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaArrowTrendUp, FaPersonCircleQuestion, FaRightFromBracket, FaUserPen } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";
// import logosmall from "../../../public/TaskhutSmall.jpg";

// import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: users = [] } = useQuery({
    queryKey: ['users', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users?email=${user.email}`)
      return res.data;
    }
  })


  const navLinks = (
    <>
      <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-indigo-500 border-b-2 border-b-indigo-600 font-semibold py-1 rounded-none' : 'text-slate-800 hover:text-indigo-500 font-medium'}>Home</NavLink></li>
      <li><NavLink to="/findJobs" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-indigo-500 border-b-2 border-b-indigo-600 font-semibold py-1 rounded-none' : 'text-slate-800 hover:text-indigo-500 font-medium'}>Find Jobs</NavLink></li>
      <li><NavLink to="/findEmployee" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-indigo-500 border-b-2 border-b-indigo-600 font-semibold py-1 rounded-none' : 'text-slate-800 hover:text-indigo-500 font-medium'}>Find Employee</NavLink></li>
      <li><NavLink to="/allCompanies" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-indigo-500 border-b-2 border-b-indigo-600 font-semibold py-1 rounded-none' : 'text-slate-800 hover:text-indigo-500 font-medium'}>Companies</NavLink></li>
      <li><NavLink to="/blogs" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-indigo-500 border-b-2 border-b-indigo-600 font-semibold py-1 rounded-none' : 'text-slate-800 hover:text-indigo-500 font-medium'}>Blogs</NavLink></li>
      <li><NavLink to="/aboutUs" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-indigo-500 border-b-2 border-b-indigo-600 font-semibold py-1 rounded-none' : 'text-slate-800 hover:text-indigo-500 font-medium'}>About Us</NavLink></li>
    </>
  );

  const handleLogOut = () => {
    logoutUser()
      .then(() => { })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-slate-100 bg-opacity-5 backdrop-blur-lg bg-white/30 text-indigo-800 z-10 sticky top-0">
      {/* fixed bg-slate-600 bg-opacity-30 z-10 text-white*/}
      <div className="navbar shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                <path
                  strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <div className="">
            <Link to='/'><img className="w-28 h-12" src={logo} alt="" /></Link>
          </div>
          {/* <Link to="/"><img src={logo} className="h-16" alt="TaskHut Logo" /></Link> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-6 menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">

          {user?.emailVerified ?
            <>
              {
                users.map(use => <div
                  key={use._id}>
                  <details className="relative">
                    <summary className="mx-1 btn btn-circle"><img className="w-12 h-10 rounded-full mx-2" src={use.image} alt="" /></summary>
                    <ul className="border-2 border-violet-400 px-4 py-4 font-normal shadow-lg z-[1] bg-base-100 text-slate-700 rounded-box w-auto absolute right-0">
                      {/* <li className="font-medium pb-2 flex justify-between"><p>$00.0</p><span>Balance</span></li><hr className="opacity-25"/> */}
                      <li className="pt-4"><span>{use?.name}</span></li>
                      <li className="pb-4"><span>{use?.email}</span></li> <hr className="opacity-80" />

                      {
                        use.role === 'admin' ? <Link to="/dashboard/accountAnalytics" preventScrollReset={true} className="profile-dropdown-hover"><FaArrowTrendUp /><span>Account Analytics</span></Link> :
                          <>
                            <Link to="/viewProfile" preventScrollReset={true} className="profile-dropdown-hover"><FaUserPen /><span>View Profile</span></Link>
                            <Link to="/support" preventScrollReset={true} className="profile-dropdown-hover"><FaPersonCircleQuestion /><span>Support</span></Link>
                          </>
                      }
                      <Link to={use.role === 'admin' ? "/dashboard/manageUsers" : "/dashboard/editProfile"} preventScrollReset={true} className="profile-dropdown-hover"><BiSolidDashboard /><span>Dashboard</span></Link>
                      {/* < to="/settings" preventScrollReset={true}Link className="flex gap-3 items-center my-2 py-2 rounded-full hover:transition duration-500 ease-out hover:ease-in-out hover:bg-indigo-500 hover:text-white hover:pl-4"><FaGears /><span>Settings</span></Link> */}

                      <Link className="flex gap-3 items-center my-2 py-2 rounded-full hover:transition duration-500 ease-out hover:bg-gradient-to-br hover:from-red-400 hover:via-red-600 hover:to-red-800 hover:text-white hover:pl-4"><FaRightFromBracket /><button onClick={handleLogOut}>Logout</button></Link>
                    </ul>
                  </details>

                </div>)
              }
            </>
            :
            <>
              <div className="flex gap-2 item-center justify-center">
                <Link to="/login" className="primary-btn">
                  login
                </Link>
                <details className="cursor-pointer relative">
                  <summary className="border-none outline-none marker:content-none secondary-btn">Register</summary>
                  <div className="absolute top-12 right-0 p-2 shadow bg-base-100 rounded-3xl w-44">
                    <Link to="/signup" className="px-4 py-1 rounded-full block hover:transition duration-500 ease-out hover:bg-gradient-to-br hover:from-indigo-400 hover:via-indigo-700 hover:to-indigo-600 hover:text-white">As an Employee</Link>
                    <Link to="/buyerSignup" className="px-4 py-1 rounded-full block hover:transition duration-500 ease-out hover:bg-gradient-to-br hover:from-indigo-400 hover:via-indigo-700 hover:to-indigo-600 hover:text-white">As a Company</Link>
                  </div>
                </details>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
