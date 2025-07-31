import React, {useState} from 'react';
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
    const [popupStatus, setPopupStatus] = useState(props.status);
    return <div className={`${classes.Container} popup`}>
        <div onClick={props.onClose}>
            <FontAwesomeIcon icon={faXmark} className={'dismiss'}></FontAwesomeIcon>
        </div>
        {
            popupStatus === statusObj.LOGIN ?
                <LoginForm status={popupStatus} onSetStatus={setPopupStatus} statusObj={statusObj}/> :
                <SignupForm status={popupStatus} onSetStatus={setPopupStatus} statusObj={statusObj}/>
        }

    </div>
};

export default TopCorner;