import React, {useContext} from 'react';
import classes from "../style/Header.module.css";
import AuthContext from "../context/AuthContext.jsx";

const HeaderAccount = () => {
    const ctx = useContext(AuthContext);

    const onLogOut = ()=>{
        ctx.setIsLogin(false)
        localStorage.setItem('access_token', null)
    }

    return (
        <div className={classes.AccountContainer}>
            <div
                onClick={onLogOut}
                className={classes.Button}>
                Log Out
            </div>
        </div>
    );
};

export default HeaderAccount;
