import React, {useContext} from 'react';
import classes from '../style/QuizCard.module.css'
import {useNavigate} from "react-router-dom";
import QuizContext from "../context/QuizContext.jsx";

const QuizCard = ({data}) => {
    const navigate = useNavigate();
    const ctx = useContext(QuizContext);

    return (
        <div
            onClick={() => {
                ctx.setCategory(data.param);
                navigate('/quiz/test')
            }}
            className={classes.CardContainer}>
            {data.name}
        </div>
    );
};

export default QuizCard;
