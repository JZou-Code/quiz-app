import React, {useContext, useEffect, useState} from 'react';
import classes from '../style/HistoryBlock.module.css'
import {useNavigate} from "react-router-dom";
import {getDetailHistoryById} from "../api/quizzes.js";
import QuizContext from "../context/QuizContext.jsx";
import Backdrop from "../UI/Backdrop/Backdrop.jsx";
import PlainMessage from "./PlainMessage.jsx";
import {categories} from "../utils/categories.js";

const HistoryBlock = (props) => {
    const navigate = useNavigate();
    const ctx = useContext(QuizContext)

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [category, setCategory] = useState('');

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
                ctx.setCategory(category);

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
        await fetchDetail();
        navigate('/quiz/result', {state: {isDetail: true, createAt: props.data.createAt}});
    }

    const handleCancel = () => {
        setIsLoading(false)
        setIsError(false);
    }

    useEffect(() => {
        for (const item of categories) {
            if (item.param === props.data.Category){
                setCategory(item.name)
            }
        }
    }, []);

    return (
        <div
            onClick={handleClick}
            className={classes.Container}>
            <div className={classes.Top}>
                <div className={classes.Category}>
                    {category}
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
            }
            {
                isError && <PlainMessage onCancel={handleCancel} message={'Something went wrong.'} canBeClosed={true}/>
            }

        </div>
    );
};

export default HistoryBlock;
