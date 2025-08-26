import React, {useContext, useEffect, useState} from 'react';
import classes from '../style/Forms.module.css'
import Captcha from "./Captcha.jsx";
import {requestSignUp} from "../api/signUp.js";
import {isValidEmail, isValidPassword, isValidUsername} from "../utils/regex.js";
import {pageState} from "../utils/pageState.js";
import ValidationCode from "./ValidationCode.jsx";
import PageStateContext from "../context/PageStateContext.jsx";
import ErrorMsg from "./ErrorMsg.jsx";
import {useNavigate} from "react-router-dom";

const SignUpForm = () => {
    // Input values, all string
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [captchaId, setCaptchaId] = useState('')
    const [validationCode, setValidationCode] = useState('')
    const [captcha, setCaptcha] = useState('');

    const [errorMsg, setErrorMsg] = useState('')

    const ctx = useContext(PageStateContext);

    const validationRules = [
        {
            check: () => isValidUsername(username),
            message: "Username must be 6–12 characters long and include uppercase letters, lowercase letters, and numbers.",
        },
        {
            check: () => isValidPassword(password),
            message: "Password must be 8–20 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*).",
        },
        {
            check: () => password === confirmPassword,
            message: "Passwords do not match.",
        },
        {
            check: () => isValidEmail(email),
            message: "Email must be in a valid format (e.g. username@domain.com).",
        },
    ];

    const onSignUp = (e) => {
        e.preventDefault();

        const invalid = validationRules.find(rule => !rule.check());
        if (invalid) {
            setErrorMsg(invalid.message);
            return;
        }

        requestSignUp({
            username,
            email,
            password,
            captchaId,
            validationCode,
            captcha
        }).then(result => {
            // console.log(result)
            // const {data} = result;
            // if(data.code === '200'){
            //     ctx.dispatch(pageState.LOGIN)
            // }else{
            //     setErrorMsg(data.message);
            // }
            ctx.dispatch(pageState.LOGIN)
        }).catch(e => {
            setErrorMsg(e.message)
        })
    }

    return (
        <>
            <form
                className={classes.FormContainer}
                onSubmit={onSignUp}
            >
                <div className={classes.Title}>Sign Up</div>
                <div className={classes.InputContainer}>
                    <input
                        className={classes.Input}
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        // onChange={onUsernameChange}
                        required
                        placeholder={'Username'}
                    />
                </div>
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
                <div className={`${classes.InputContainer} ${classes.CaptchaContainer}`}>
                    <input
                        className={classes.CaptchaInput}
                        type="text"
                        value={captcha}
                        onChange={(e) => setCaptcha(e.target.value.toLowerCase())}
                        required
                        placeholder={'Captcha'}
                    />
                    <div
                        className={classes.CaptchaImg}
                    >
                        <Captcha setCaptchaId={setCaptchaId}/>
                    </div>
                </div>
                <button
                    onClick={onSignUp}
                    className={classes.Button}
                    type="submit"
                >
                    Sign Up
                </button>
                <ErrorMsg errorMsg={errorMsg}/>
            </form>

        </>
    );
};

export default SignUpForm;
