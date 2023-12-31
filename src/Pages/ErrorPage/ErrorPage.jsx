import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <Helmet>
                <title>Error || TaskHut</title>
            </Helmet>
            <img className="w-60 md:w-80 mx-auto" src="https://i.ibb.co/XVShjQj/images-q-tbn-ANd9-Gc-R721-Dfx1-Fkzrco-VPD5-Lh-Y7-Xe-FJh-Xcjb-FHW0-Q-usqp-CAU.jpg" alt="" />
            <Link to='/'><button className="mt-10 w-32 btn btn-accent text-base font-bold">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;