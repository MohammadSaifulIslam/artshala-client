import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();


    if (!user) {
        console.log('user nai')
        return <Navigate to={'/login'} replace={true}></Navigate>
    }

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    return children

};

export default PrivateRoutes;