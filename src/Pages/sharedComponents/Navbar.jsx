import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../../public/TaskhutClear.png";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// import logosmall from "../../../public/TaskhutSmall.jpg";

// import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const axiosPublic = useAxiosPublic();

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
    <div className="">
      <div className="navbar fixed bg-gray-600 bg-opacity-30 z-10 font-bold text-white">
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
          <ul className="menu menu-horizontal px-1">
            {navLinks}
            </ul>
        </div>
        <div className="navbar-end">
          {user?.emailVerified ? 
            <>
              <span>{user?.displayName}</span>
              <span>
                <img className="w-10 h-10 rounded-full mx-2" src={user?.photoURL}  alt="" />
              </span>
              <button
                onClick={handleLogOut}
                className="bg-purple-800 text-white px-5 py-2 rounded-md font-bold text-base">
                Logout
              </button>
            </>
           : 
            <>
              <Link to="/login"
                className="bg-purple-800 text-white px-5 py-3 rounded-md font-bold text-base">
                <button>Log in</button>
              </Link>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;







 {/* {isLargeDevice ? (
              <Link to="/">
                <img src={logo} className="h-16" alt="" />
              </Link> // Render large icon for large devices
            ) : (
              <Link to="/">
                <img src={logosmall} className="h-12 w-12" alt="" />
              </Link> // Render small icon for small devices
            )} */}