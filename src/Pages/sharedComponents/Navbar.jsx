import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../../public/TaskhutClear.png";

// import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaArrowTrendUp, FaPersonCircleQuestion, FaRightFromBracket, FaUserPen } from "react-icons/fa6";
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

  // const [isLargeDevice, setIsLargeDevice] = useState(false);

  // useEffect(() => {
  //   const checkDeviceSize = () => {
  //     setIsLargeDevice(window.innerWidth > 768); // Adjust the breakpoint as needed
  //   };

  //   checkDeviceSize(); // Initial check

  //   window.addEventListener("resize", checkDeviceSize); // Check on window resize

  //   return () => {
  //     window.removeEventListener("resize", checkDeviceSize); // Clean up the event listener
  //   };
  // }, []);

  const navLinks = (
    <>
      <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-indigo-500 border-b-2 border-b-indigo-600 font-semibold py-1 rounded-none' : 'text-slate-800 hover:text-indigo-500 font-medium'}>Home</NavLink></li>
      {/* <li><NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-red-500 font-semibold' : ''}>Dashboard</NavLink></li> */}
      {/* <li><NavLink to="/browsejobs" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-indigo-500 border-b-2 border-b-indigo-600 font-semibold py-1 rounded-none' : 'text-slate-800 hover:text-indigo-500 font-medium'}>Browse Jobs</NavLink></li> */}
      <li><NavLink to="/findJobs" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-indigo-500 border-b-2 border-b-indigo-600 font-semibold py-1 rounded-none' : 'text-slate-800 hover:text-indigo-500 font-medium'}>Find Jobs</NavLink></li>
      <li><NavLink to="/findEmployee" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-indigo-500 border-b-2 border-b-indigo-600 font-semibold py-1 rounded-none' : 'text-slate-800 hover:text-indigo-500 font-medium'}>Find Employee</NavLink></li>
      <li><NavLink to="/allCompanies" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-indigo-500 border-b-2 border-b-indigo-600 font-semibold py-1 rounded-none' : 'text-slate-800 hover:text-indigo-500 font-medium'}>Companies</NavLink></li>
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
      <div className="navbar shadow-lg">
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
          <ul className="space-x-12 menu-horizontal px-1">
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
                      <li className="pb-4"><span>{use?.email}</span></li> <hr className="opacity-25" />
                      <li className="flex gap-3 items-center my-2 py-2 rounded hover:transition duration-500 ease-out hover:ease-in-out hover:bg-slate-700 hover:text-white hover:pl-2"><FaUserPen /><Link to="/viewProfile" preventScrollReset={true}>View Profile</Link></li>
                      <li className="flex gap-3 items-center my-2 py-2 rounded hover:transition duration-500 ease-out hover:ease-in-out hover:bg-slate-700 hover:text-white hover:pl-2"><FaArrowTrendUp /><Link to="/accountAnalytics" preventScrollReset={true}>Account Analytics</Link></li>
                      <li className="flex gap-3 items-center my-2 py-2 rounded hover:transition duration-500 ease-out hover:ease-in-out hover:bg-slate-700 hover:text-white hover:pl-2"><FaArrowTrendUp /><Link to="/dashboard" preventScrollReset={true}>Dashboard</Link></li>
                      {/* <li className="flex gap-3 items-center my-2 py-2 rounded hover:transition duration-500 ease-out hover:ease-in-out hover:bg-slate-700 hover:text-white hover:pl-2"><FaGears /><Link to="/settings" preventScrollReset={true}>Settings</Link></li> */}
                      <li className="flex gap-3 items-center my-2 py-2 rounded hover:transition duration-500 ease-out hover:ease-in-out hover:bg-slate-700 hover:text-white hover:pl-2"><FaPersonCircleQuestion /><Link to="/support" preventScrollReset={true}>Support</Link></li>
                      <li className="flex gap-3 items-center my-2 py-2 rounded hover:transition duration-500 ease-out hover:ease-in-out hover:bg-red-700 hover:text-white hover:pl-2"><FaRightFromBracket /><button onClick={handleLogOut}>Logout</button></li>

                    </ul>
                  </details>

                </div>)
              }

              {/* <span>{user?.displayName}</span> */}

              {/* <span>
                <img className="w-10 h-10 rounded-full mx-2" src={user?.photoURL}  alt="" />
              </span> */}

            </>
            :
            <>
              <div className="flex flex-row gap-2 item-center">
                <div>
                  <Link to="/login">
                    {/* className="border-2 border-purple-800 lg:mx-4 sm:my-10 text-purple-800 px-5 py-3 rounded-md font-bold text-base"> */}
                    <button className="m-1 shadow-lg border-2 border-indigo-800 rounded-lg font-medium bg-white px-8 py-2 text-indigo-800 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white transition-all ease-out delay-0 duration-500">Log in</button>
                  </Link>
                </div>
                <div>
                  {/* <Link to="/signup"> */}
                    <details className="dropdown dropdown-end border-0">
                      <summary className="m-1 border-0 shadow-lg btn rounded-lg font-medium bg-indigo-800 px-8 py-2  hover:bg-indigo-500 text-white transition-all ease-out delay-0 duration-500">Register</summary>
                      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-56">
                        <li><Link to="/signup">I'm looking for a job</Link></li>
                        <li><Link to="/buyerSignup">I'm looking for candidates</Link></li>
                      </ul>
                    </details>
                    {/* // className="bg-purple-800 lg:mx-4 sm:my-10 text-white px-5 py-3 rounded-md font-bold text-base">
                    // <button>Sign Up</button> */}
                  {/* </Link> */}
                </div>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
