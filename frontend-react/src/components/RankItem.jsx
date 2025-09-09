import React from 'react';
import classes from '../style/RankItem.module.css'

const RankItem = (props) => {
    const {username,totalCorrect,rank} = props.data
    return (
        <div className={classes.Container}>
            <div className={`${classes.Icon} ${classes[`Rank${rank}`]}`}>
                {rank}
            </div>
            <div className={classes.Content}>
                <div className={classes.Username}>
                    {username}
                </div>
                <div className={classes.Score}>
                    {totalCorrect}
                </div>
            </div>
        </div>
    );
};

export default RankItem;
