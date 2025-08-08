import React, {useContext} from 'react';
import classes from '../style/QuestionBlock.module.css'
import QuizContext from "../context/QuizContext.jsx";

const QuestionBlock = (props) => {

    const ctx = useContext(QuizContext);
    const quizData = ctx.quizArr[props.quizNum]
    const selectedOpt = ctx.userAnswers[props.quizNum]

    return (
        <div className={classes.Container}>
            <div className={classes.Quiz}>
                <div className={classes.QuizContent}>
                    {props.quizNum + 1 + '.' + quizData.quiz}
                </div>
            </div>
            <div className={classes.OptionContainer}>
                {quizData.options.map((item, index) => {
                        const correctOpt = quizData.answer;
                        let incorrectOpt = -1;
                        let extraClass = '';

                        if (index === selectedOpt) {
                            extraClass += classes.Selected
                        }

                        if (ctx.isResult) {
                            if (quizData.answer !== selectedOpt) {
                                incorrectOpt = selectedOpt;
                            }
                            if (index === incorrectOpt) {
                                extraClass += ` ${classes.Incorrect}`;
                            } else if (index === correctOpt) {
                                extraClass += ` ${classes.Correct}`;
                            }
                        }


                        return <label
                            className={`${classes.Option} ${extraClass}`}
                            key={index}
                            htmlFor={props.quizNum + '' + index}>
                            <input
                                type="radio"
                                name={props.quizNum}
                                id={props.quizNum + '' + index}
                                value={index}
                                checked={selectedOpt === index}
                                onChange={() => props.onAnswer(index)}
                                disabled={ctx.isResult}
                            />
                            <span>{String.fromCharCode(65 + index) + '. ' + item}</span>
                        </label>
                    }
                )}
            </div>

        </div>
    );
};

export default QuestionBlock;
