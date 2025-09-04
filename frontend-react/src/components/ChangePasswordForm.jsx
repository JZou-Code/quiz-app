import React, {useState} from 'react';
import classes from "../style/ChangePssword.module.css";
import {isValidPassword} from "../utils/regex.js";
import PlainMessage from "./PlainMessage.jsx";
import ErrorMsg from "./ErrorMsg.jsx";

const ChangePasswordForm = (props) => {
    const [current, setCurrent] = useState('');
    const [newPwd, setNewPwd] = useState('');
    const [confirm, setConfirm] = useState('');

    const [isProcessing, setIsProcessing] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [errorMsg, setErrorMsg] = useState('')

    const validationRules = [
        {
            check: () => isValidPassword(current),
            message: "Current password must be 8–20 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*).",
        },
        {
            check: () => isValidPassword(newPwd),
            message: "New password must be 8–20 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*).",
        },
        {
            check: () => newPwd === confirm,
            message: "Passwords do not match.",
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const invalid = validationRules.find(rule => !rule.check());
        if (invalid) {
            setErrorMsg(invalid.message);
            return;
        }
        props.onChange({
            password: current,
            newPassword: confirm
        });
    }

    const handleCancel = () => {
        setIsProcessing(false);
        setIsError(false);
        setIsSuccessful(false);
    }

    return (
        <div>
            <div className={classes.Title}>
                Reset Password
            </div>
            <form onSubmit={handleSubmit}>
                <div className={classes.InputContainer}>
                    <div className={classes.InputTitle}>
                        Enter your current password
                    </div>
                    <input
                        placeholder='Current password'
                        type='password'
                        className={classes.Input}
                        value={current}
                        onChange={e => {
                            setCurrent(e.target.value)
                        }}/>
                </div>
                <div className={classes.InputContainer}>
                    <div className={classes.InputTitle}>
                        Enter a new password
                    </div>
                    <input
                        placeholder='New password'
                        type='password'
                        className={classes.Input}
                        value={newPwd}
                        onChange={e => {
                            setNewPwd(e.target.value)
                        }}/>
                </div>
                <div className={classes.InputContainer}>
                    <div className={classes.InputTitle}>
                        Confirm your new password
                    </div>
                    <input
                        placeholder='Confirm password'
                        type='password'
                        className={classes.Input}
                        value={confirm}
                        onChange={e => {
                            setConfirm(e.target.value)
                        }}/>
                </div>
                <div className={classes.InputContainer}>
                    <button
                        className={classes.CardButton}>
                        Change password
                    </button>
                </div>
            </form>
            <ErrorMsg errorMsg={errorMsg}/>
            {
                isProcessing && <PlainMessage message={'Processing...'} canBeClosed={false}/>
            }
            {
                isError && <PlainMessage onCancel={handleCancel} message={'Something went wrong'} canBeClosed={true}/>
            }
            {
                isSuccessful &&
                <PlainMessage onCancel={handleCancel} message={'Reset successfully'} canBeClosed={true}/>
            }
        </div>
    );
};

export default ChangePasswordForm;
