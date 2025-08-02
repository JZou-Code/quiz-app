import React, {useContext} from 'react';
import classes from '../style/QuestionBlock.module.css'
import QuizContext from "../context/QuizContext.jsx";

const QuestionBlock = (props) => {

    const ctx = useContext(QuizContext);
    const quizData = ctx.quizArr[props.quizNum - 1]
    const selectedOpt = ctx.userAnswers[props.quizNum - 1]

    return (
        <div className={classes.Container}>
            <div className={classes.Quiz}>
                <div className={classes.QuizContent}>
                    {quizData.quiz}
                </div>
            </div>
            <div className={classes.OptionContainer}>
                {quizData.options.map((item, index) =>
                    <label
                        className={selectedOpt === index ? `${classes.Option} ${classes.Selected}` : classes.Option}
                        key={index}
                        htmlFor={props.quizNum + '' + index}>
                        <input
                            type="radio"
                            name={props.quizNum}
                            id={props.quizNum + '' + index}
                            value={index}
                            checked={selectedOpt === index}
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