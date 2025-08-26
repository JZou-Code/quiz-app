import React, {useContext, useState} from 'react';
import classes from "../style/Forms.module.css";
import {pageState} from "../utils/pageState.js";
import ValidationCode from "./ValidationCode.jsx";
import PageStateContext from "../context/PageStateContext.jsx";
import {useNavigate} from "react-router-dom";

const ForgetPwdForm = () => {
    const [email, setEmail] = useState('')
    const [validationCode, setValidationCode] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    const ctx = useContext(PageStateContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        ctx.dispatch({type:pageState.LOGIN})
        navigate('/account/login');
    }

    return (
        <>
            <form className={classes.FormContainer} onSubmit={handleSubmit} style={{marginTop: '1.5rem'}}>
                <div className={classes.Title}>Reset Password</div>
                <div className={classes.InputContainer}>
                    <input
                        className={classes.Input}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder={'Email'}
                    />
                </div>
                <ValidationCode code={validationCode} setCode={setValidationCode} email={email}></ValidationCode>
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
                <div className={classes.InputContainer}>
                    <input
                        className={classes.Input}
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder={'Confirm Password'}
                    />
                </div>
                <button className={classes.Button} type='sumbit'>Submit</button>
            </form>
        </>
    );
};

export default ForgetPwdForm;
