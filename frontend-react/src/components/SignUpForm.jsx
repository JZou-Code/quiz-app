import React, {useContext, useState} from 'react';
import classes from '../style/Forms.module.css'
import Captcha from "./Captcha.jsx";
import {requestSignUp} from "../api/account.js";
import {isValidEmail, isValidPassword, isValidUsername} from "../utils/regex.js";
import {pageState} from "../utils/pageState.js";
import ValidationCode from "./ValidationCode.jsx";
import PageStateContext from "../context/PageStateContext.jsx";
import ErrorMsg from "./ErrorMsg.jsx";
import {useNavigate} from "react-router-dom";
import PlainMessage from "./PlainMessage.jsx";

const SignUpForm = () => {
    // Input values, all string
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [captchaId, setCaptchaId] = useState('')
    const [code, setCode] = useState('')
    const [captcha, setCaptcha] = useState('');

    const [errorMsg, setErrorMsg] = useState('')
    const [processing, setProcessing] = useState(false)
    const [isSuccessful, setIsSuccessful] = useState(false)

    const ctx = useContext(PageStateContext);
    const navigate = useNavigate();

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

    const onSignUp = async (e) => {
        e.preventDefault();

        const invalid = validationRules.find(rule => !rule.check());
        if (invalid) {
            setErrorMsg(invalid.message);
            return;
        }

        setProcessing(true);
        try {
            const {data} = await requestSignUp({
                username,
                email,
                password,
                code,
                captchaId,
                captcha
            });

            console.log(data)

            if (data.code === '200' || data.code === 200) {
                ctx.dispatch(pageState.LOGIN)
                setIsSuccessful(true);
            } else {
                setErrorMsg(data.message);
            }

        } catch (e) {
            setErrorMsg(e.response);
            console.log(e)
        } finally {
            setProcessing(false)
        }
    }

    const handleJump = () => {
        navigate('/account/login')
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
                <ValidationCode code={code} setCode={setCode} email={email}></ValidationCode>
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
                        onChange={(e) => setCaptcha(e.target.value)}
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
            {
                processing && <PlainMessage message={'Processing...'} canBeClosed={false}/>
            }
            {
                isSuccessful && <PlainMessage onClick={handleJump} message={'Sign up successfully'} canBeClosed={true}/>
            }
        </>
    );
};

export default SignUpForm;
