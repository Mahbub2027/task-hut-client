import React from 'react';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(user && isAdmin){
       return children;
    }
    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>;
    }
    return <Navigate to='/login' state={{form: location}} replace></Navigate>
};

export default AdminRoutes;