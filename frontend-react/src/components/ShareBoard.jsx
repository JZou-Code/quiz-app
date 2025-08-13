import React, {useState} from 'react';
import classes from '../style/ShareBoard.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy, faSpinner} from "@fortawesome/free-solid-svg-icons";

const ShareBoard = (props) => {
    const [isCopying, setIsCopying] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [message, setMessage] = useState('');

    const copyHandler = async () => {
        try {
            setIsCopying(true);
            await navigator.clipboard.writeText(props.url);
            setMessage('Copied to clipboard')
            setIsCopied(true)
        } catch (err) {
            setMessage('Something went wrong, please try again later')
            setIsCopied(true)
        } finally {
            setIsCopying(false)
            setTimeout(() => {
                setIsCopied(false)
            }, 2000)
        }
    }

    const disappearHandler = () => {
        setIsCopied(false)
    }

    return (
        <div className={classes.Container}>
            <div className={classes.Title}>
                Share Link
            </div>
            <div className={classes.LinkContainer}>
                <input className={classes.Link} disabled={true} placeholder={props.url}/>
            </div>
            <div className={classes.ButtonContainer}>
                <div
                    style={isCopying ? {pointerEvents: 'none', opacity: 0.5} : {}}
                    onClick={copyHandler}
                    className={`${classes.Button}`}>
                    {
                        isCopying ? <FontAwesomeIcon icon={faSpinner}/> : <FontAwesomeIcon icon={faCopy}/>
                    }
                </div>
                <div
                    style={isCopying ? {pointerEvents: 'none', opacity: 0.5} : {}}
                    onClick={props.onCancel}
                    className={classes.Button}>
                    Cancel
                </div>
            </div>

            {
                isCopied ?
                    <div
                        onClick={disappearHandler}
                        className={classes.Message}>
                        {message}
                    </div>
                    : ''
            }

        </div>
    );
};

export default ShareBoard;
