import React, {useContext} from 'react';
import LoginForm from './LoginForm.jsx';
import classes from '../style/TopCorner.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import SignUpForm from "./SignUpForm.jsx";
import {pageState} from "../utils/pageState.js";
import ForgetPwdForm from "./ForgetPwdForm.jsx";
import ConfirmForm from "./ConfirmForm.jsx";
import PageStateContext from "../context/PageStateContext.jsx";

const TopCorner = (props) => {
    const ctx = useContext(PageStateContext);

    return <div className={`${classes.Container} popup`}>
        <div onClick={props.onClose}>
            <FontAwesomeIcon icon={faXmark} className={'dismiss'}></FontAwesomeIcon>
        </div>
        {ctx.state === pageState.LOGIN && <LoginForm/>}
        {ctx.state === pageState.SIGNUP &&<SignUpForm/>}
        {ctx.state === pageState.FORGET &&<ForgetPwdForm/>}
        {ctx.state === pageState.CONFIRM &&<ConfirmForm/>}
    </div>
};

export default TopCorner;
