import React, {useContext} from 'react';
import PageStateContext from "../context/PageStateContext.jsx";
import LoginForm from "./LoginForm.jsx";
import SignUpForm from "./SignUpForm.jsx";
import ForgetPwdForm from "./ForgetPwdForm.jsx";
import {pageState} from "../utils/pageState.js";
import classes from '../style/FormContainer.module.css'
import ProcessingForm from "./Processing.jsx";

const FormContainer = () => {
    const ctx = useContext(PageStateContext);

    return (
        <div className={classes.Container}>
            {ctx.state === pageState.LOGIN && <LoginForm/>}
            {ctx.state === pageState.SIGNUP && <SignUpForm/>}
            {ctx.state === pageState.FORGET && <ForgetPwdForm/>}
            {ctx.state === pageState.PROCESSING && <ProcessingForm/>}
        </div>
    );
};

export default FormContainer;
