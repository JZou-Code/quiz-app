import React from 'react';
import LoginForm from '../components/LoginForm';
import classes from '../style/TopCorner.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import SignupForm from "../components/SignupForm.jsx";

const TopCorner = (props) => {
    const statusObj = {
        NONE: -1,
        LOGIN: 0,
        SIGNUP: 1
    }
    return <div className={`${classes.Container} popup`}>
        <div onClick={props.onClose}>
            <FontAwesomeIcon icon={faXmark} className={'dismiss'}></FontAwesomeIcon>
        </div>
        {
            props.status === statusObj.LOGIN ? <LoginForm/> : <SignupForm/>
        }
        <div className={classes.Notification}>
            <div className={classes.Forget}>
                <span className={classes.Link}>
                    Forgot password?
                </span>
            </div>
            <div className={classes.LinkContainer}>
                <div>
                    Not registered yet?
                </div>
                <div onClick={props.onSetStatus(statusObj.SIGNUP)} className={classes.Link}>
                    Signup for an account
                </div>
            </div>
        </div>
    </div>
};

export default TopCorner;