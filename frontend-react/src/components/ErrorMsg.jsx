import React from 'react';
import classes from "../style/Forms.module.css";


const ErrorMsg = (props) => {
    return (
        <div className={classes.Message}>
            {props.errorMsg}
        </div>
    );
};

export default ErrorMsg;
