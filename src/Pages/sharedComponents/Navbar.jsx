import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../../public/TaskhutClear.png";
// import useTanStact from "../../hooks/useTanStact";
// import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaArrowTrendUp, FaGears, FaPersonCircleQuestion, FaRightFromBracket, FaUserPen } from "react-icons/fa6";
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
      <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-red-500 font-semibold' : ''}>Home</NavLink></li>
      <li><NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-red-500 font-semibold' : ''}>Dashboard</NavLink></li>
      <li><NavLink to="/browsejobs" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-red-500 font-semibold' : ''}>Browse Jobs</NavLink></li>
      <li><NavLink to="/aboutUs" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-red-500 font-semibold' : ''}>About Us</NavLink></li>
      <li><NavLink to="/contact" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-red-500 font-semibold' : ''}>Contact</NavLink></li>

    </>
  );
  const handleLogOut = () => {
    logoutUser()
      .then(() => { })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-gray-200 text-black">
      {/* fixed bg-slate-600 bg-opacity-30 z-10 text-white*/}
      <div className="navbar shadow-md  font-bold ">
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
          {/* {
                pagol.map(pag=> <li key={pag._id}>{pag.email}</li>)
              } */}
          {user?.emailVerified ?
            <>
              {
                users.map(use => <div
                  key={use._id}>
                  <details className="relative">
                    <summary className="m-1 btn btn-circle"><img className="w-12 h-12 rounded-full mx-2" src={use.image} alt="" /></summary>
                    <ul className="border-2 border-violet-400 px-4 py-4 font-normal shadow-lg z-[1] bg-base-100 text-white rounded-box w-auto absolute right-0">
                      <li className="font-medium pb-2 flex justify-between"><p>$00.0</p><span>Balance</span></li><hr className="opacity-25"/>
                      <li className="pt-4"><span>{use?.name}</span></li>
                      <li className="pb-4"><span>{use?.email}</span></li> <hr className="opacity-25"/>
                      <li className="flex gap-3 items-center my-2 py-2 rounded hover:transition duration-500 ease-out hover:ease-in-out hover:bg-slate-700 hover:text-white hover:pl-2"><FaUserPen /><Link to="/viewProfile" preventScrollReset={true}>View Profile</Link></li>
                      <li className="flex gap-3 items-center my-2 py-2 rounded hover:transition duration-500 ease-out hover:ease-in-out hover:bg-slate-700 hover:text-white hover:pl-2"><FaArrowTrendUp /><Link to="/accountAnalytics" preventScrollReset={true}>Account Analytics</Link></li>
                      <li className="flex gap-3 items-center my-2 py-2 rounded hover:transition duration-500 ease-out hover:ease-in-out hover:bg-slate-700 hover:text-white hover:pl-2"><FaGears /><Link to="/settings/profile" preventScrollReset={true}>Settings</Link></li>
                      <li className="flex gap-3 items-center my-2 py-2 rounded hover:transition duration-500 ease-out hover:ease-in-out hover:bg-slate-700 hover:text-white hover:pl-2"><FaPersonCircleQuestion /><Link to="/support" preventScrollReset={true}>Support</Link></li>
                      <li className="flex gap-3 items-center my-2 py-2 rounded hover:transition duration-500 ease-out hover:ease-in-out hover:bg-red-800 hover:text-white bg-red-600
                       hover:pl-2"><FaRightFromBracket /><button onClick={handleLogOut}>Logout</button></li>

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
              <div className="flex justify-between">
                <div>
                <Link to="/signup"
                className="bg-purple-800 lg:mx-4 sm:my-10 text-white px-5 py-3 rounded-md font-bold text-base">
                <button>Sign Up</button>
              </Link>
                </div>
                <div>
                <Link to="/login"
                className="bg-purple-800 lg:mx-4 sm:my-10 text-white px-5 py-3 rounded-md font-bold text-base">
                <button>Log in</button>
              </Link>
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
