import { Outlet } from "react-router-dom";
import Footer from "../Pages/sharedComponents/Footer";
import Navbar from "../Pages/sharedComponents/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;