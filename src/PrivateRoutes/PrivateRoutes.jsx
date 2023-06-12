import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../pages/Others/LoadingSpinner/LoadingSpinner";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();

    
    if (loading) {
       return <LoadingSpinner/>
    }
    
    if (!user) {
        return <Navigate to={'/login'} replace={true}></Navigate>
    }

    return children

};

export default PrivateRoutes;