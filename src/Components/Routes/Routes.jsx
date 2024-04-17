import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const Routes = ({ children }) => {
    const { user, looder } = useContext(AuthContext);

    if(looder) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login'></Navigate>;

};

export default Routes;

Routes.propTypes = {
    children: PropTypes.node
}