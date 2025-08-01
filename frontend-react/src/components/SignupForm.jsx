import React, {use, useEffect, useState} from 'react';
import classes from '../style/LoginForm.module.css'
import {requestCaptcha} from "../api/signUp.js";
import CaptCha from "./captCha.jsx";

const SignupForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const [captchaSrc, setCaptchaSrc] = useState('')
    // const [captchaFail, setCaptchaFail] = useState(false)
    // const [isCaptchaLoading, setIsCaptchaLoading] = useState(true)

    // useEffect(() => {
    //     requestCaptcha
    //         .then(result => {
    //             console.log(result.data.image)
    //             setCaptchaSrc('data:image/png;base64,' + result.data.data.image);
    //             setIsCaptchaLoading(false);
    //         }).catch(e=>{
    //             setIsCaptchaLoading(false);
    //             setCaptchaFail(true)
    //     }
    //     )
    //
    // }, []);

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
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder={'Captcha'}
                    />
                    <div
                        className={classes.CaptchaImg}
                    >
                        {/*{*/}
                        {/*    isCaptchaLoading ? '' : <img src={captchaSrc} alt='Captcha'/>*/}
                        {/*}*/}
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
