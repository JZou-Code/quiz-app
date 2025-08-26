import React, {useContext, useEffect} from 'react';
import SetupAccount from "../components/SetupAccount.jsx";
import Header from "../components/Header.jsx";
import PageStateContext from "../context/PageStateContext.jsx";
import {pageState} from "../utils/pageState.js";

const LoginPage = () => {
    const ctx = useContext(PageStateContext);
    useEffect(() => {
        ctx.dispatch({type:pageState.LOGIN})
    }, []);
    return (
        <div>
            <Header/>
            <SetupAccount/>
        </div>
    );
};

export default LoginPage;
