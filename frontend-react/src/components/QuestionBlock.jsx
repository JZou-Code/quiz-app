import React from 'react';
import classes from '../style/QuestionBlock.module.css'

const QuestionBlock = (props) => {

    return (
        <div className={classes.Container}>
            <div className={classes.Quiz}>
                <div className={classes.QuizContent}>
                    {props.quizData.quiz}
                </div>
            </div>
            <div className={classes.OptionContainer}>
                {props.quizData.options.map((item, index) =>
                    <label
                        className={props.selected === index ? `${classes.Option} ${classes.Selected}` : classes.Option}
                        key={index}
                        htmlFor={props.quizNum + '' + index}>
                        <input
                            type="radio"
                            name={props.quizNum}
                            id={props.quizNum + '' + index}
                            value={index}
                            checked={props.selected === index}
                            onChange={() => props.onAnswer(index)}
                        />
                        <span>{String.fromCharCode(65 + index) + '. ' + item}</span>
                    </label>
                )}
            </div>

        </div>
    );
};

export default QuestionBlock;