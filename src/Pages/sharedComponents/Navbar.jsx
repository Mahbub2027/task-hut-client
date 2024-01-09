import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../../public/TaskhutClear.png";
import logosmall from "../../../public/TaskhutSmall.jpg";

import { useEffect, useState } from "react";
const Navbar = () => {
  const { user, logoutUser } = useAuth();

  const [isShow, setShow] = useState(false);

  const [isLargeDevice, setIsLargeDevice] = useState(false);

  useEffect(() => {
    const checkDeviceSize = () => {
      setIsLargeDevice(window.innerWidth > 768); // Adjust the breakpoint as needed
    };

    checkDeviceSize(); // Initial check

    window.addEventListener("resize", checkDeviceSize); // Check on window resize

    return () => {
      window.removeEventListener("resize", checkDeviceSize); // Clean up the event listener
    };
  }, []);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logoutUser()
      .then(() => { })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar bg-white font-bold text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="navbar">
            {isLargeDevice ? (
              <Link to="/">
                <img src={logo} className="h-16" alt="" />
              </Link> // Render large icon for large devices
            ) : (
              <Link to="/">
                <img src={logosmall} className="h-12 w-12" alt="" />
              </Link> // Render small icon for small devices
            )}
          </div>
          {/* <Link to="/"><img src={logo} className="h-16" alt="TaskHut Logo" /></Link> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <span>{user?.displayName}</span>
              {/* profile dropdown */}
              <div className="relative">
                <span onClick={() => setShow(!isShow)}>
                  <img
                    className="w-10 h-10 rounded-full mx-2 border-solid border-2 border-sky-500"
                    src={user?.photoURL}
                    alt=""
                  />
                </span>
                {/* dropdown content */}
                {isShow && <div className="bg-white w-44 mt-2 p-2 rounded-lg text-gray-500 font-normal shadow-lg absolute -translate-x-1/2 z-10">
                  <p className="px-4 py-4 font-medium">$00.0 Balance</p>
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-200 hover:text-blue-500 rounded-md cursor-pointer"><Link to="/viewProfile" preventScrollReset={true}>View Profile</Link></li>
                    <li className="px-4 py-2 hover:bg-gray-200 hover:text-blue-500 rounded-md cursor-pointer"><Link to="/accountAnalytics" preventScrollReset={true}>Account Analytics</Link></li>
                    <li className="px-4 py-2 hover:bg-gray-200 hover:text-blue-500 rounded-md cursor-pointer"><Link to="/settings" preventScrollReset={true}>Settings</Link></li>
                    <li className="px-4 py-2 hover:bg-gray-200 hover:text-blue-500 rounded-md cursor-pointer"><Link to="/support" preventScrollReset={true}>Support</Link></li>
                  </ul>
                </div>}
              </div>
              <button
                onClick={handleLogOut}
                className="bg-purple-800 text-white px-5 py-2 rounded-md font-bold text-base"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-purple-800 text-white px-5 py-2 rounded-md font-bold text-base"
              >
                <button>Log in</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
