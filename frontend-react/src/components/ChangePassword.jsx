import React, {useState} from 'react';
import classes from '../style/ChangePssword.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import ChangePasswordForm from "./ChangePasswordForm.jsx";
import ChangeMessage from "./ChangeMessage.jsx";
import {requestResetPassword} from "../api/account.js";
import PlainMessage from "./PlainMessage.jsx";

const ChangePassword = (props) => {
    const [isProcessing, setIsProcessing] = useState(false);
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

    const changeHandler = async (data) => {
        setIsProcessing(true);

        try {
            const res = await requestResetPassword(data);
            if (res.data.code === 200 || res.data.code === '200') {
                console.log('hello')
                setData({...messages[0], isError: false});
            }else {
                setData({...messages[1], isError: true});
            }
        } catch (e) {
            setData({...messages[1], isError: true});
            console.log(e)
        } finally {
            setIsFinished(true);
            setIsProcessing(false);
        }
    }

    return (
        <div className={`${classes.Card} popup`}>
            <FontAwesomeIcon
                onClick={props.onCancel}
                className='dismiss'
                icon={faXmark}/>
            {
                (!isFinished && !isProcessing) && <ChangePasswordForm onChange={changeHandler}/>
            }
            {
                isFinished && <ChangeMessage data={data}/>
            }
            {
                isProcessing && <PlainMessage message={'Processing...'} canBeClosed={false}/>
            }
        </div>
    );
};

export default ChangePassword;
