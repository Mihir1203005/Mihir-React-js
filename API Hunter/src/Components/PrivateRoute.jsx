import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {

    const {auth}=useContext(AuthContext)

    if(!auth.isAuth)
    {
        return <Navigate to={"/login"} />
    }
    return children;

}

export default PrivateRoute;
