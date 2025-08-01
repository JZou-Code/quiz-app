import React, {useState} from 'react';
import classes from '../style/LoginForm.module.css'
import CaptCha from "./captCha.jsx";
import {requestValidationCode} from "../api/signUp.js";

const SignupForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [code, setCode] = useState('')
    const [buttonContent, setButtonContent] = useState('Send')
    const [disabled, setDisabled] = useState(false)

    const onSendCode = () => {
        console.log('hello')
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

    return (
        <>
            <form className={classes.FormContainer}>
                <div className={classes.Title}>Sign Up</div>
                <div className={classes.InputContainer}>
                    <input
                        className={classes.Input}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                        placeholder={'Code'}
                    />
                    <div
                        className={classes.CaptchaImg}
                    >
                        <button
                            type={'button'}
                            disabled={disabled}
                            className={`${classes.Send} ${disabled? classes.disabled : ''}`}
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
                        <CaptCha/>
                    </div>
                </div>
                <button className={classes.Button} type="submit">Sign Up</button>
            </form>
            <div className={classes.Notification}>
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
