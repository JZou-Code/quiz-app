import React, {useContext, useEffect, useState} from 'react';
import classes from '../style/QuestionBlock.module.css'
import QuizContext from "../context/QuizContext.jsx";

const QuestionBlock = (props) => {

    const ctx = useContext(QuizContext);
    const quizData = ctx.quizArr[props.quizNum];
    const choices = [];
    const selectedOpt = ctx.userAnswers[props.quizNum];

    for (let i = 0; i < quizData?.choices?.label?.length; i++) {
        const choiceObj = {
            label: quizData?.choices.label[i],
            text: quizData?.choices.text[i],
        }
        choices.push(choiceObj);
    }

    const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // console.log(quizData)

    if (!quizData) {
        console.log('hello world')
        return null;
    }

    return (
        <div className={classes.Container}>
            <div className={classes.Quiz}>
                <div className={classes.QuizContent}>
                    {props.quizNum + 1 + '.' + quizData.question}
                </div>
            </div>
            <div className={classes.OptionContainer}>
                {choices.map((item, index) => {
                        const correctOpt = quizData.answerKey;
                        let incorrectOpt = -1;
                        let extraClass = '';

                        if (LETTERS[index] === selectedOpt) {
                            extraClass += classes.Selected
                        }

                        if (ctx.isResult) {
                            if (quizData.answerKey !== selectedOpt) {
                                incorrectOpt = selectedOpt;
                            }
                            if (LETTERS[index] === incorrectOpt) {
                                extraClass += ` ${classes.Incorrect}`;
                            } else if (LETTERS[index] === correctOpt) {
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
                                onChange={() => props.onAnswer(item.label)}
                                disabled={ctx.isResult}
                            />
                            <span>{item.label+'. '+item.text}</span>
                        </label>
                    }
                )}
            </div>

        </div>
    );
};

export default QuestionBlock;
