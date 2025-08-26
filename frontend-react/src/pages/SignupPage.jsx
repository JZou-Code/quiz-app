import React, {useContext, useEffect} from 'react';
import SetupAccount from "../components/SetupAccount.jsx";
import Header from "../components/Header.jsx";
import PageStateContext from "../context/PageStateContext.jsx";
import {pageState} from "../utils/pageState.js";

const SignupPage = () => {
    const ctx = useContext(PageStateContext);
    useEffect(() => {
        ctx.dispatch({type:pageState.SIGNUP})
    }, []);
    return (
        <div>
            <Header/>
            <SetupAccount/>
        </div>
    );
};

export default SignupPage;
