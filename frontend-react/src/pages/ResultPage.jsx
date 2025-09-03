import React, {useContext, useEffect, useState} from 'react';
import classes from '../style/ResultPage.module.css';
import QuestionBlock from "../components/QuestionBlock.jsx";
import {useLocation, useNavigate} from 'react-router-dom'
import QuizContext from "../context/QuizContext.jsx";
import Header from "../components/Header.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShareNodes} from "@fortawesome/free-solid-svg-icons";
import Backdrop from "../UI/Backdrop/Backdrop.jsx";
import ShareBoard from "../components/ShareBoard.jsx";
import {store} from "../mock/fakeShareData.js";
import AuthContext from "../context/AuthContext.jsx";

const ResultPage = () => {
    const [isSharing, setIsSharing] = useState(false)
    const [shareId, setShareId] = useState('')

    const ctx = useContext(QuizContext);
    const authCtx = useState(AuthContext);
    const navigate = useNavigate();
    const {state} = useLocation();

    const onCancel = () => {
        navigate('/');
    }

    useEffect(() => {
        const warn = e => {
            e.preventDefault();
            e.returnValue = 'Refreshing the page will cause data loss. Continue?';
        };
        window.addEventListener('beforeunload', warn);
        return () => window.removeEventListener('beforeunload', warn);
    }, []);

    const onRestart = () => {
        navigate('/quiz/test', {replace: true})
    }

    const onShare = async () => {
        setIsSharing(true);
        store({
            username: authCtx.username,
            total: 20,
            score: ctx.score,
            time: new Date(),
            category: 'Math'
        })
            .then(res => {
                if (res.data.code === '200') {
                    setShareId(res.data.data.token);
                } else {
                    const error = new Error('Something went wrong');
                    error.status = 500;
                    throw error
                }
            }).catch(e => {
            console.log(e)
        })
    }

    const handleCancelShare = () => {
        setIsSharing(false)
    }

    return (
        <>
            <Header/>
            <div className={classes.Container}>
                <div className={classes.Share} onClick={onShare}>
                    <FontAwesomeIcon icon={faShareNodes}/>
                </div>
                <div className={classes.ScoreContainer}>
                    <div className={classes.ScoreText}>
                        Your Final Score is:
                    </div>
                    <div className={classes.Score}>
                        {ctx.score}
                    </div>
                    <div className={classes.Answer}>
                        <div className={classes.Content}>
                            Correct Answer
                        </div>
                        <div className={classes.Content}>
                            {ctx.score}
                        </div>
                    </div>
                    <div className={classes.Answer}>
                        <div className={classes.Content}>
                            Wrong Answer
                        </div>
                        <div className={classes.Content}>
                            {ctx.quizArr.length - ctx.score}
                        </div>
                    </div>
                </div>

                <div className={classes.Middle}>
                    Answers
                </div>

                <div className={classes.QuizContainer}>
                    {ctx.quizArr.map((item, index) =>
                        <QuestionBlock
                            quizNum={index}
                            key={item.id}
                        />
                    )}

                    {
                        !state?.isDetail &&
                        <div className={classes.ButtonContainer}>
                            <button onClick={onRestart} className={classes.Restart}>Restart</button>
                            <button onClick={onCancel} className={classes.Cancel}>Cancel</button>
                        </div>
                    }
                </div>
                {
                    isSharing &&
                    <Backdrop>
                        <ShareBoard url={`http://localhost:5173/share/${shareId}`} onCancel={handleCancelShare}/>
                    </Backdrop>
                }
            </div>
        </>
    );
};

export default ResultPage;
