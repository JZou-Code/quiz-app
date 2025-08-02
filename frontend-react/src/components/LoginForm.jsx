import React, {useContext, useState} from 'react';
import classes from "../style/LoginForm.module.css";
import {pageState} from "../utils/pageState.js";
import HeaderContext from "../context/HeaderContext.jsx";

const LoginForm = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const ctx = useContext(HeaderContext);

    const handleSubmit = (e) => {

    }

    return (
        <>
            <form className={classes.FormContainer} onSubmit={handleSubmit} style={{marginTop: '1.5rem'}}>
                <div className={classes.Title}>User Login</div>
                <div className={classes.InputContainer}>
                    <input
                        className={classes.Input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder={'Username'}
                    />
                </div>
                <div className={classes.InputContainer}>
                    <input
                        className={classes.Input}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder={'Password'}
                    />
                </div>
                <button className={classes.Button} type='sumbit'>Login</button>
            </form>
            <div className={classes.Notification}>
                <div className={classes.Forget} onClick={() => ctx.dispatch({type: pageState.FORGET})}>
                <span className={classes.Link}>
                    Forgot password?
                </span>
                </div>
                <div className={classes.LinkContainer}>
                    <div>
                        Not registered yet?
                    </div>
                    <div onClick={() => ctx.dispatch({type: pageState.SIGNUP})} className={classes.Link}>
                        &nbsp;Signup for an account
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;