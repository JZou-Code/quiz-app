import React, {useContext} from 'react';
import classes from '../style/Reuslt.module.css'
import Backdrop from "../UI/Backdrop/Backdrop.jsx";
import {useNavigate} from "react-router-dom";
import QuizContext from "../context/QuizContext.jsx";

const Result = (props) => {
    const navigate = useNavigate();

    const onQuit = () => {
        navigate('/')
    }

    return (
        <div className={`${classes.Container} popup`}>
            <div className={classes.Text}>
                You have finished the test!
            </div>
            <div className={classes.Text}>
                Your Score : {props.score}
            </div>
            <div className={classes.BtnContainer}>
                <div
                    className={`${classes.Button} ${classes.Restart}`}
                    onClick={props.onRestart}
                >
                    Restart
                </div>
                <div
                    className={`${classes.Button} ${classes.Quit}`}
                    onClick={onQuit}
                >
                    Quit
                </div>
            </div>
        </div>
    );
};

export default Result;