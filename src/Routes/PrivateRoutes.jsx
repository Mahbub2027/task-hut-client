import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();


    if(user?.emailVerified){
        return children;
    }
    if(loading){
        return  <progress className="progress w-56"></progress>
    }
    return <Navigate to='/login' state={{form: location}} replace></Navigate>
};

export default PrivateRoutes;