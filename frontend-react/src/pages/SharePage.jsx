import React, {useEffect, useState} from 'react';
import classes from '../style/SharePage.module.css';
import {useParams} from 'react-router-dom';
import {fetchShare} from "../api/share.js";


const SharePage = () => {
    const [data, setData] = useState(null);
    const {shareId = 'test-id'} = useParams();

    const resultLevel = {
        EXPERT: 'Expert',
        ADVANCED: 'Advanced',
        PROFICIENT: 'Proficient',
        DEVELOPING: 'Developing',
        BEGINNER: 'Beginner',
        WRONG: 'Something went wrong, please try again later',
    }

    const getLevel = (score) => {
        if (score >= 19) {
            return resultLevel.EXPERT
        } else if (score >= 16) {
            return resultLevel.ADVANCED
        } else if (score >= 11) {
            return resultLevel.PROFICIENT
        } else if (score >= 6) {
            return resultLevel.DEVELOPING
        } else if (score >= 0) {
            return resultLevel.EXPERT
        } else {
            return resultLevel.WRONG
        }
    }

    useEffect(() => {
        fetchShare(shareId)
            .then(res => {
                console.log(res)

                const {username, total, score, time, category} = res.data.data;
                const rate = Math.round(score / total * 10000) / 100 + '%'
                const newTime = time.toLocaleString('en-NZ', {
                    dateStyle: 'short'
                })
                const level = getLevel(score)
                setData({
                    username,
                    score,
                    total,
                    rate,
                    newTime,
                    category,
                    level
                });
            }).catch(e => {

        })

    }, [shareId]);

    if (!data) return <p>no data available</p>


    return (
        <div className={classes.Container}>
            <img src="/congrat.jpg" alt="congratulations"/>
            <h2 className={classes.Title}>
                Well done! {data.username}!
            </h2>
            <div className={classes.TextContainer}>
                <div className={classes.Text}>Your Score Is</div>
                <div className={classes.ScoreContainer}>
                    <div className={`${classes.Score} popup`}>{data.score}</div>
                </div>
                <div className={classes.Line}>
                    <div className={classes.Text}>
                        Correct:
                    </div>
                    <div className={classes.Text}>
                        {data.score}
                    </div>
                </div>
                <div className={classes.Line}>
                    <div className={classes.Text}>
                        Incorrect:
                    </div>
                    <div className={classes.Text}>
                        {data.total - data.score}
                    </div>
                </div>
                <div className={classes.Line}>
                    <div className={classes.Text}>
                        Accuracy:
                    </div>
                    <div className={classes.Text}>
                        {data.rate}
                    </div>
                </div>
                <div className={classes.Line}>
                    <div className={classes.Text}>
                        Date:
                    </div>
                    <div className={classes.Text}>
                        {data.newTime}
                    </div>
                </div>
                <div className={classes.Line}>
                    <div className={classes.Text}>
                        Level:
                    </div>
                    <div className={classes.Text}>
                        {data.level}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SharePage;
