import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <Helmet>
                <title>Error || TaskHut</title>
            </Helmet>
            <img className="w-48 md:w-96 mx-auto mt-12" src="https://i.ibb.co/3vnBhs9/oops-404-error-with-broken-robot-concept-illustration-114360-5529.jpg" alt="" />
            <Link to='/'><button className="mt-10 w-32 btn btn-primary text-white font-bold">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;