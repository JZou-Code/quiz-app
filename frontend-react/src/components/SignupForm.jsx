import React, {useState} from 'react';
import classes from '../style/LoginForm.module.css'
import CaptCha from "./captCha.jsx";
import {requestSignUp, requestValidationCode} from "../api/signUp.js";
import {isValidEmail, isValidPassword, isValidUsername} from "../utils/regex.js";
import result from "./Result.jsx";

const SignupForm = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [captchaId, setCaptchaId] = useState('')
    const [validationCode, setValidationCode] = useState('')
    const [captcha, setCaptcha] = useState('');


    const [buttonContent, setButtonContent] = useState('Send')
    const [disabled, setDisabled] = useState(false)

    const [errorMsg, setErrorMsg] = useState('')

    const onSendCode = () => {
        let seconds = 60
        setDisabled(true);
        requestValidationCode(email)
        setButtonContent(`${seconds}s`)

        const timer = setInterval(() => {
            seconds--
            setButtonContent(`${seconds}s`)
            if (seconds <= 0) {
                clearInterval(timer);
                setButtonContent('Resend');
                setDisabled(false);
            }

        }, 1000)
    }

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
                console.log(result)
                props.onSetStatus(props.statusObj.LOGIN)
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
                <div className={`${classes.InputContainer} ${classes.CaptchaContainer}`}>
                    <input
                        className={classes.CaptchaInput}
                        type="text"
                        value={validationCode}
                        onChange={(e) => setValidationCode(e.target.value)}
                        required
                        placeholder={'Code'}
                    />
                    <div
                        className={classes.CaptchaImg}
                    >
                        <button
                            type={'button'}
                            disabled={disabled}
                            className={`${classes.Send} ${disabled ? classes.disabled : ''}`}
                            onClick={onSendCode}
                        >
                            {buttonContent}
                        </button>
                    </div>
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
                        <CaptCha setCaptchaId={setCaptchaId}/>
                    </div>
                </div>
                <button
                    onClick={onSignUp}
                    className={classes.Button}
                    type="submit"
                >
                    Sign Up
                </button>
                <div className={classes.Message}>
                    {errorMsg}
                </div>
            </form>

            <div className={classes.Notification_Login}>
                <div className={classes.LinkContainer}>
                    <div>
                        Already have an account?
                    </div>
                    <div onClick={() => props.onSetStatus(props.statusObj.LOGIN)} className={classes.Link}>
                        &nbsp;Login
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignupForm;
