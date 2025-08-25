import React, {useState} from 'react';
import classes from '../style/ChangePssword.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import ChangePasswordForm from "./ChangePasswordForm.jsx";
import ChangeMessage from "./ChangeMessage.jsx";

const ChangePassword = (props) => {
    const [isPending, setIsPending] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [data, setData] = useState(null)

    const messages = [
        {
            title: 'Password update successful!',
            message: 'Your password has been changed successfully Use your new password to login in.'
        },
        {
            title: 'Something went wrong',
            message: "Oops, there's something wrong, please try again later."
        },
    ]

    const changeHandler = (data) => {
        setIsPending(true);
        const {newPwd, confirm} = data;

        const error = newPwd !== confirm;
        setIsFinished(true);
        setData({ ...(error ? messages[1] : messages[0]), isError: error });
        setIsPending(false);
    }

    return (
        <div className={`${classes.Card} popup`}>
            <FontAwesomeIcon
                onClick={props.onCancel}
                className='dismiss'
                icon={faXmark}/>
            {
                (!isFinished && !isPending) && <ChangePasswordForm onChange={changeHandler}/>
            }
            {
                isFinished &&
                <ChangeMessage data={data}/>
            }
            {
                isPending &&
                <div>Pending......</div>
            }
        </div>
    );
};

export default ChangePassword;
