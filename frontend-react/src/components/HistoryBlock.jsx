import React, {useContext, useState} from 'react';
import classes from '../style/HistoryBlock.module.css'
import {useNavigate} from "react-router-dom";
import {getDetailHistoryById} from "../api/quizzes.js";
import QuizContext from "../context/QuizContext.jsx";
import Backdrop from "../UI/Backdrop/Backdrop.jsx";
import PlainMessage from "./PlainMessage.jsx";

const HistoryBlock = (props) => {
    const navigate = useNavigate();
    const ctx = useContext(QuizContext)

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchDetail = async () => {
        try {
            setIsLoading(true);
            const {data} = await getDetailHistoryById(props.data.Id);

            if (data.code === 200 || data.code === '200') {
                const userAnswers = [];
                const quizArr = [];
                for (const item of data?.data) {
                    userAnswers.push(item.Answer);
                    quizArr.push(item.Quiz)
                }
                ctx.setQuizArr(quizArr);
                ctx.setUserAnswers(userAnswers);
                ctx.setScore(props.data.CorrectNumber);
                ctx.setIsResult(true);

                setIsLoading(false)
            } else {
                setIsError(true);
            }
        } catch (e) {
            setIsError(true);
            console.log(e)
        }
    }

    const handleClick = async () => {
        // navigate('/account/history/detail', {state:{sessionId:props.data.Id, score: props.data.CorrectNumber}})
        await fetchDetail();
        navigate('/quiz/result', {state: {isDetail: true, createAt: props.data.createAt}});
    }

    const handleCancel = () => {
        setIsLoading(false)
        setIsError(false);
    }

    return (
        <div
            onClick={handleClick}
            className={classes.Container}>
            <div className={classes.Top}>
                <div className={classes.Category}>
                    Hello World
                </div>
                <div className={classes.Score}>
                    {props.data.CorrectNumber} / {props.data.quizNum}
                </div>
            </div>

            <div className={classes.Time}>
                {props.data.time}
            </div>
            {
                isLoading && <PlainMessage message={'Loading...'} canBeClosed={false}/>
                // <Backdrop>
                //     <div onClick={handleCancel} className={classes.Notification}>
                //         Loading...
                //     </div>
                // </Backdrop>
            }
            {
                isError && <PlainMessage onCancel={handleCancel} message={'Something went wrong.'} canBeClosed={true}/>
                // <Backdrop>
                //     <div onClick={handleCancel} className={classes.Notification}>
                //         Something went wrong.
                //     </div>
                // </Backdrop>
            }

        </div>
    );
};

export default HistoryBlock;
