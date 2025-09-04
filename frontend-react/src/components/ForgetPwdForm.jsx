import React, {useContext, useState} from 'react';
import classes from "../style/Forms.module.css";
import {pageState} from "../utils/pageState.js";
import ValidationCode from "./ValidationCode.jsx";
import PageStateContext from "../context/PageStateContext.jsx";
import {useNavigate} from "react-router-dom";
import {requestForgetPassword} from "../api/account.js";
import PlainMessage from "./PlainMessage.jsx";
import {isValidEmail, isValidPassword} from "../utils/regex.js";
import ErrorMsg from "./ErrorMsg.jsx";

const ForgetPwdForm = () => {
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    const [isProcessing, setIsProcessing] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [errorMsg, setErrorMsg] = useState('')

    const ctx = useContext(PageStateContext);
    const navigate = useNavigate();

    const validationRules = [
        {
            check: () => isValidEmail(email),
            message: "Email must be in a valid format (e.g. username@domain.com).",
        },
        {
            check: () => isValidPassword(password),
            message: "Password must be 8–20 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*).",
        },
        {
            check: () => password === confirmPassword,
            message: "Passwords do not match.",
        },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const invalid = validationRules.find(rule => !rule.check());
        if (invalid) {
            setErrorMsg(invalid.message);
            return;
        }
        setIsProcessing(true);

        try {
            const {data} = await requestForgetPassword({
                email,
                code,
                newPassword: password
            });
            if(data.code === 200 || data.code === '200'){
                setIsSuccessful(true);
            }
        } catch (e) {
            setIsError(true);
            setErrorMsg(e.response);
            console.log(e)
        } finally {
            setIsProcessing(false)
        }

    }

    const handleCancel = ()=>{
        setIsProcessing(false);
        setIsError(false);
        setIsSuccessful(false);
    }

    const handleJump = ()=>{
        ctx.dispatch({type: pageState.LOGIN});
        navigate('/account/login');
    }

    return (
        <>
            <form className={classes.FormContainer} onSubmit={handleSubmit} style={{marginTop: '1.5rem'}}>
                <div className={classes.Title}>Forget Password</div>
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
                <button className={classes.Button} type='sumbit'>Submit</button>
                <ErrorMsg errorMsg={errorMsg}/>
            </form>
            {
                isProcessing &&<PlainMessage message={'Processing...'} canBeClosed={false}/>
            }
            {
                isError && <PlainMessage onCancel={handleCancel} message={'Something went wrong'} canBeClosed={true}/>
            }
            {
                isSuccessful && <PlainMessage onCancel={handleJump} message={'Reset successfully'} canBeClosed={true}/>
            }
        </>
    );
};

export default ForgetPwdForm;
