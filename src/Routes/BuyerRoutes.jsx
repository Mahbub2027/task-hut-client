import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useBuyer from "../hooks/useBuyer";

const BuyerRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const [isBuyer, isBuyerLoading] = useBuyer();
    const location = useLocation();

    if (user && isBuyer) {
        return children;
    }
    if (loading || isBuyerLoading) {
        return <progress className="progress w-56"></progress>;
    }
    return <Navigate to='/login' state={{ form: location }} replace></Navigate>
};

export default BuyerRoutes;