import {useContext, useEffect} from 'react';
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import PageStateContext from "../context/PageStateContext.jsx";
import {pageState} from "../utils/pageState.js";

export default function PrivateRoute() {
    const {isLogin} = useContext(AuthContext);
    const {dispatch} = useContext(PageStateContext)
    const location = useLocation();

    console.log(location)

    useEffect(() => {
        if (!isLogin) {
            dispatch({type: pageState.LOGIN});
        }
    }, [isLogin, dispatch]);

    if (!isLogin) {
        return <Navigate to="/account/login" state={{from: location}} replace/>;
    }

    return <Outlet/>;
}
