import React from 'react';
import classes from "../style/Forms.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const Processing = ({}) => {
    return (
        <>
            <div className={classes.FormContainer} style={{marginTop: '4rem'}}>
                <div className={classes.Title}>
                    <span>Processing...</span>
                </div>
                <div className={classes.Icon}>
                    <FontAwesomeIcon icon={faSpinner}/>
                </div>
            </div>
        </>
    );
};

export default Processing;
