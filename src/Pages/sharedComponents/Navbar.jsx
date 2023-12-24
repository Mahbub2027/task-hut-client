import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
    const {user, logoutUser} = useAuth();

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='/aboutUs'>About Us</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>
    const handleLogOut = () =>{
        logoutUser()
        .then(()=>{})
        .catch(error => console.log(error))

    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className=" font-bold text-2xl">TaskHut</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? 
                        <>  
                            <span>{user?.displayName}</span>
                            <span><img className="w-10 h-10 rounded-full mx-2" src={user?.photoURL} alt="" /></span>
                            <button onClick={handleLogOut} className="bg-blue-800 text-white px-5 py-2 rounded-md font-bold text-base">Logout</button>
                        </> : 
                        <>
                            <Link to='/login' className="bg-blue-800 text-white px-5 py-2 rounded-md font-bold text-base"><button>Log in</button></Link>
                        </>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;