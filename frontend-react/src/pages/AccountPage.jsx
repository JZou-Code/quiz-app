import React from 'react';
import Header from "../components/Header.jsx";
import classes from '../style/AccountPage.module.css'

const AccountPage = () => {
    return (
        <div>
            <Header/>
            <div className={classes.Container}>

            Account Page
            </div>
        </div>
    );
};

export default AccountPage;