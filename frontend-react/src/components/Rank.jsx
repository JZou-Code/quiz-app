import React from 'react';
import classes from '../style/Rank.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShareNodes} from '@fortawesome/free-solid-svg-icons';
import {rank} from "../mock/fakeRank.js";
import RankItem from "./RankItem.jsx";

const Rank = () => {
    return (
        <div className={classes.Container}>
            <div className={classes.TitleContainer}>
                <div className={classes.Title}>
                    Rank
                </div>
                <div className={classes.Icon}>
                    <FontAwesomeIcon icon={faShareNodes}/>
                </div>
            </div>

            <div className={classes.RankMsg}>
                Updated every Sunday with data from Monday to Saturday
            </div>

            <div className={classes.RankData}>
                {
                    rank.sort((a,b)=> b.score - a.score)
                        .map(item => <RankItem data={item} key={item.rank}/>)
                }
            </div>
        </div>
    );
};

export default Rank;
