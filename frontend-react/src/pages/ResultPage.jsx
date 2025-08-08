import React, {useContext, useEffect} from 'react';
import classes from '../style/ResultPage.module.css';
import QuestionBlock from "../components/QuestionBlock.jsx";
import {useNavigate} from 'react-router-dom'
import QuizContext from "../context/QuizContext.jsx";
import Header from "../components/Header.jsx";

const QuizPage = () => {
    const ctx = useContext(QuizContext);
    const navigate = useNavigate();

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
        ctx.reset()
        navigate('/quiz/test', {replace: true})
    }

    return (
        <>
            <Header/>
            <div className={classes.Container}>
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
                            key={index}
                        />
                    )}

                    <div className={classes.ButtonContainer}>
                        <button onClick={onRestart} className={classes.Restart}>Restart</button>
                        <button onClick={onCancel} className={classes.Cancel}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuizPage;
