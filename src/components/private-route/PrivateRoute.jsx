import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../auth-provider/AuthProvider";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(UserAuth);

    if (loading) {
        console.log(`loading`)
        return <p>loading</p>
    }
    if (!user?.email) {
        console.log(`navigate`)
        return < Navigate to={`/login`}></Navigate >
    }
    return children;
};

export default PrivateRoute;