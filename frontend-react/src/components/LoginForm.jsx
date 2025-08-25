import React, {useContext, useState} from 'react';
import classes from "../style/Forms.module.css";
import {pageState} from "../utils/pageState.js";
import PageStateContext from "../context/PageStateContext.jsx";
import AuthContext from "../context/AuthContext.jsx";
import {login} from "../api/login.js";
import ErrorMsg from "./ErrorMsg.jsx";
import {useLocation, useNavigate} from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const pageCtx = useContext(PageStateContext);
    const authCtx = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password)
            .then(result => {
                const {data} = result;

                if (data.code === '200') {
                    authCtx.setIsLogin(true);
                    authCtx.setUsername(username);
                    pageCtx.dispatch({type:pageState.NONE});
                    navigate(from, { replace: true })
                }else {
                    setErrorMsg(data.message);
                }
            }).catch(e=>{
                setErrorMsg('Internal server error, please try again later.');
        })
    }

    return (
        <>
            <form className={classes.FormContainer} onSubmit={handleSubmit} style={{marginTop: '1.5rem'}}>
                <div className={classes.Title}>User Login</div>
                <div className={classes.InputContainer}>
                    <input
                        className={classes.Input}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                <button className={classes.Button} type='submit'>Login</button>
            </form>

            <ErrorMsg errorMsg={errorMsg}/>

            <div className={classes.Notification}>
                <div className={classes.Forget} onClick={() => pageCtx.dispatch({type: pageState.FORGET})}>
                <span className={classes.Link}>
                    Forgot password?
                </span>
                </div>
                <div className={classes.LinkContainer}>
                    <div>
                        Not registered yet?
                    </div>
                    <div onClick={() => pageCtx.dispatch({type: pageState.SIGNUP})} className={classes.Link}>
                        &nbsp;Signup for an account
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
