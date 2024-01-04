import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/sharedComponents/Footer";
import Navbar from "../Pages/sharedComponents/Navbar";

const Main = () => {
    const location = useLocation();
    // console.log(location)
    const navBarFooter = location.pathname?.includes('login') || location.pathname?.includes('signup');
    return (
        <div>
            {navBarFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {navBarFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;