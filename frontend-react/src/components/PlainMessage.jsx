import React from 'react';
import classes from '../style/PlainMessage.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import Backdrop from "../UI/Backdrop/Backdrop.jsx";

const PlainMessage = (props) => {
    return (
        <Backdrop>
            <div className={classes.Notification}>
                {
                    props.canBeClosed &&
                    <FontAwesomeIcon onClick={props?.onCancel} className={classes.CloseIcon} icon={faXmark}/>
                }
                {props.message}
            </div>
        </Backdrop>
    );
};

export default PlainMessage;
