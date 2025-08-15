import React, {useEffect, useState} from 'react';
import classes from '../style/SharePage.module.css';
import {useParams} from 'react-router-dom';
import {fetchShare} from "../api/share.js";
import Header from "../components/Header.jsx";


const SharePage = () => {
    const [data, setData] = useState(null);
    const {shareId = 'test-id'} = useParams();

    const LEVELS = [
        {min: 19, message: 'Expert'},
        {min: 16, message: 'Advanced'},
        {min: 11, message: 'Proficient'},
        {min: 6, message: 'Developing'},
        {min: 0, message: 'Beginner'},
    ];

    const getLevel = (score) => {
        if (typeof score !== 'number' || Number.isNaN(score) || score < 0) {
            return 'Something went wrong, please try again later';
        }
        const result = LEVELS.find(({min}) => score >= min);
        return result ? result.message : 'Something went wrong, please try again later';
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
        <>
            <Header/>
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
                            Category:
                        </div>
                        <div className={classes.Text}>
                            {data.category}
                        </div>
                    </div>
                    <div className={classes.Line}>
                        <div className={classes.Text}>
                            Correct:
                        </div>
                        <div className={classes.Text}>
                            {data.score + '/' + data.total}
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
        </>
    )
};

export default SharePage;
