import React from 'react';
import Header from "../components/Header.jsx";
import classes from '../style/AccountPage.module.css'
import History from "../components/History.jsx";

const AccountPage = () => {
    return (
        <div>
            <Header/>
            <div className={classes.Container}>
                <div className={`${classes.History} ${classes.Block}`}>
                    <History/>
                </div>
                <div className={`${classes.Record} ${classes.Block}`}>
                    Record Area
                </div>
                <div className={`${classes.Visualization} ${classes.Block}`}>
                    Visualization Area
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
