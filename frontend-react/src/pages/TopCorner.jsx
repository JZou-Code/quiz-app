import React, {useReducer, useState} from 'react';
import LoginForm from '../components/LoginForm';
import classes from '../style/TopCorner.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import SignUpForm from "../components/SignUpForm.jsx";
import {pageState} from "../utils/pageStatus.js";

const TopCorner = (props) => {
    // const [popupStatus, setPopupStatus] = useState(props.status);
    const [popupStatus, dispatchPopupStatus] = useReducer(
        (prevState, action) => {
            switch (action.type){
                case pageState.LOGIN:
                    return pageState.LOGIN;
                case pageState.SIGNUP:
                    return pageState.SIGNUP;
                case pageState.LOADING:
                    return pageState.LOADING;
                case pageState.PROCESSING:
                    return pageState.PROCESSING;
                case pageState.FAIL:
                    return pageState.FAIL;
                case pageState.FORGET:
                    return pageState.FORGET;
                default:
                    return prevState
            }
        },
        pageState.NONE)

    return <div className={`${classes.Container} popup`}>
        <div onClick={props.onClose}>
            <FontAwesomeIcon icon={faXmark} className={'dismiss'}></FontAwesomeIcon>
        </div>
        {
            popupStatus === pageState.LOGIN ?
                <LoginForm status={popupStatus} onSetStatus={dispatchPopupStatus}/> :
                <SignUpForm status={popupStatus} onSetStatus={dispatchPopupStatus}/>
        }

    </div>
};

export default TopCorner;