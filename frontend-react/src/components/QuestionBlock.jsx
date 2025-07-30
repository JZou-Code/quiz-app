import React, {useState} from 'react';
import classes from '../style/QuestionBlock.module.css'

const QuestionBlock = (props) => {
    const [selected, setSelected] = useState(-1)

    const returnAnswer = (idx) => {
        setSelected(idx);
        props.answers[props.quizNum - 1] = idx;
    }

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
                        className={selected === index ? `${classes.Option} ${classes.Selected}` : classes.Option}
                        key={index}
                        for={props.quizNum + '' + index}>
                        <input
                            type="radio"
                            name={props.quizNum}
                            id={props.quizNum + '' + index}
                            value={index}
                            checked={selected === index}
                            onChange={() => returnAnswer(index)}
                        />
                        <span>{String.fromCharCode(65 + index) + '. ' + item}</span>
                    </label>
                )}
            </div>

        </div>
    );
};

export default QuestionBlock;