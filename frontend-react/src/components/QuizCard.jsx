import React from 'react';
import classes from '../style/QuizCard.module.css'

const QuizCard = ({title}) => {
    return (
        <div className={classes.CardContainer}>
          {title}
        </div>
    );
};

export default QuizCard;