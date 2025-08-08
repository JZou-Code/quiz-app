import React from 'react';
import classes from '../style/HistoryBlock.module.css'

const HistoryBlock = (props) => {
    return (
        <div className={classes.Container}>
            <div className={classes.Top}>
                <div className={classes.Category}>
                    {props.data.category}
                </div>
                <div className={classes.Score}>
                    {props.data.correct} / {props.data.quizNum}
                </div>
            </div>

            <div className={classes.Time}>
                {props.data.time}
            </div>

        </div>
    );
};

export default HistoryBlock;
