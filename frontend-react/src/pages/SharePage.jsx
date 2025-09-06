import React, {useEffect, useState} from 'react';
import classes from '../style/SharePage.module.css';
import {useParams} from 'react-router-dom';
import Header from "../components/Header.jsx";
import {getShareContent} from "../api/quizzes.js";
import PlainMessage from "../components/PlainMessage.jsx";


const SharePage = () => {
    const [data, setData] = useState({});
    const {shareId} = useParams();

    const [processing, setProcessing] = useState(false)
    const [isNoData, setIsNoData] = useState(true)
    const [isError, setIsError] = useState(false)

    const LEVELS = [
        {min: 19, message: 'Expert'},
        {min: 16, message: 'Advanced'},
        {min: 11, message: 'Proficient'},
        {min: 6, message: 'Developing'},
        {min: 0, message: 'Beginner'},
    ];

    const getLevel = (score) => {
        try {
            const scoreNum = Number(score)
            const result = LEVELS.find(({min}) => scoreNum >= min);
            return result.message
        } catch (e) {
            console.log(e)
            return 'Something went wrong, please try again later';
        }
    }

    const loadData = async () => {
        if (!shareId) {
            setIsError(true);
            return
        }
        try {
            setProcessing(true);
            const res = await getShareContent(shareId);
            if (res.data.code === 200 || res.data.code === '200') {
                const {
                    Username: username,
                    Date: date,
                    TotalNumber: total,
                    CorrectNumber: score,
                    Category: category,
                } = res.data.data;
                const rate = Math.round(score / total * 10000) / 100 + '%'
                const isoMs = date.replace(/(\.\d{3})\d+/, '$1');
                const time = new Date(isoMs)
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
                setIsNoData(false)
            } else {
                setData({})
            }
        } catch (e) {
            setIsError(true)
            console.log(e)
        } finally {
            setProcessing(false)
        }

    }

    useEffect(() => {
        loadData();
    }, []);

    const handleCancel = () => {
        setProcessing(false)
        setIsError(false);
    }

    return (
        <>
            <Header/>

            <div className={classes.Container}>
                {
                    !isNoData && <>
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
                    </>
                }
            </div>
            {
                processing && <PlainMessage message={'Processing...'} canBeClosed={false}/>
            }
            {
                isError && <PlainMessage onCancel={handleCancel} message={'Something went wrong'} canBeClosed={true}/>
            }
        </>
    )
};

export default SharePage;
