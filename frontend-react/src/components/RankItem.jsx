import React from 'react';
import classes from '../style/RankItem.module.css'

const RankItem = (props) => {
    const {name,score,rank} = props.data
    return (
        <div className={classes.Container}>
            <div className={`${classes.Icon} ${classes[`Rank${rank}`]}`}>
                {rank}
            </div>
            <div className={classes.Content}>
                <div className={classes.Username}>
                    {name}
                </div>
                <div className={classes.Score}>
                    {score}
                </div>
            </div>
        </div>
    );
};

export default RankItem;
