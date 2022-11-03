import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';
import Spinner from 'react-bootstrap/Spinner';


/* 

1. Only allow authenticated user to visit the route 
2. 
3.Redirect user to the route they wanted to go before login

*/

const PrivateRoutes = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(loading)

    if(loading){
        return  <Spinner animation="border" variant="primary" />
    }

    if(!user?.email){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;