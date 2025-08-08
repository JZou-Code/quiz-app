import React from 'react';
import classes from '../style/QuizCard.module.css'
import {useNavigate} from "react-router-dom";

const QuizCard = ({title}) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={()=>{navigate('/quiz/test')}}
            className={classes.CardContainer}>
          {title}
        </div>
    );
};

export default QuizCard;
