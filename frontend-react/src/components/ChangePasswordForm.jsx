import React, {useState} from 'react';
import classes from "../style/ChangePssword.module.css";

const ChangePasswordForm = (props) => {
    const [current, setCurrent] = useState('');
    const [newPwd, setNewPwd] = useState('');
    const [confirm, setConfirm] = useState('');

    return (
        <div>
            <div className={classes.Title}>
                Change Password
            </div>
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
                    onClick={() => {
                        props.onChange({newPwd, confirm})
                    }}
                    className={classes.CardButton}>
                    Change password
                </button>
            </div>
        </div>
    );
};

export default ChangePasswordForm;
