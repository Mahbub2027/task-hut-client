import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/sharedComponents/Footer";
import Navbar from "../Pages/sharedComponents/Navbar";
// import { useState } from "react";

const Main = () => {
    const location = useLocation();
    // const [isemailVerified, setEmailVerified] = useState(false)
    // const navigate = useNavigate();
    // console.log(location)
    const navBarFooter = location.pathname?.includes('login') || location.pathname?.includes('signup');
    return (
        <div className="min-h-screen flex flex-col">
            {navBarFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {navBarFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;