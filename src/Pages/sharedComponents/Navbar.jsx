import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../../public/TaskhutClear.png";
// import useTanStact from "../../hooks/useTanStact";
// import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
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
    <div className="">
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
                  <details className="dropdown dropdown-end">
                    <summary className="m-1 btn btn-circle"><img className="w-12 h-12 rounded-full mx-2" src={use.image} alt="" /></summary>
                    <ul className="p-1 font-medium shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-64">
                      <li className="btn-disabled"><span>{use?.name}</span></li>
                      <li className="btn-disabled"><span>{use?.email}</span></li> <hr />
                      <li><Link to=''>Dashboard</Link></li>
                      <li><button onClick={handleLogOut}>Logout</button></li>

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
