import { FaCreditCard, FaUnlockKeyhole, FaUserLock, FaUserShield, FaUserTie, FaUsersGear } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";

const Settings = () => {
    return (
        <div className="flex gap-4 w-8/12 mx-auto my-4">
            {/* Left Navigation */}
            <div className="h-fit w-1/6 bg-slate-100 dark:bg-transparent rounded-md py-2">
                <ul className="space-y-2">
                    <li className="flex gap-2 items-center py-3 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out  dark:hover:text-white hover:pl-3">
                        <FaUserTie />
                        <Link to='/settings'>Profile</Link>
                    </li>
                    <li className="flex gap-2 items-center py-3 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                        <FaUserLock />
                        <Link to='/settings/password'>Password</Link>
                    </li>
                    <li className="flex gap-2 items-center py-3 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                        <FaCreditCard />
                        <Link to='/settings/payment'>Payment</Link>
                    </li>
                    <li className="flex gap-2 items-center py-3 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                        <FaUnlockKeyhole />
                        <Link to='/settings/security'>Security</Link>
                    </li>
                    <li className="flex gap-2 items-center py-3 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                        <FaUserShield />
                        <Link to='/settings/trustVerification'>Trust & Verification</Link>
                    </li>
                    <li className="flex gap-2 items-center py-3 px-4 border-l-4 border-transparent hover:border-l-4 hover:border-l-slate-500 hover:transition duration-500 ease-in-out hover:ease-in-out dark:hover:text-white hover:pl-3">
                        <FaUsersGear />
                        <Link to='/settings/account'>Account</Link>
                    </li>
                </ul>
            </div>
            <div className="w-5/6 shadow-md border-2 border-slate-100 dark:border-slate-700 rounded-lg">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Settings;