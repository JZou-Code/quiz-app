import React from 'react';
import classes from '../style/LoginPage.module.css'
import FormContainer from "./FormContainer.jsx";


const SetupAccount = () => {
    return (
        <div className={classes.Container}>
            <div className={classes.AnimContainer}>
                Some Content
            </div>
            <div className={classes.FormContainer}>
                <FormContainer/>
            </div>
        </div>
    );
};

export default SetupAccount;
