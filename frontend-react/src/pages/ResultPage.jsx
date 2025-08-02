import React, {useContext, useEffect} from 'react';
import classes from '../style/ResultPage.module.css';
import QuestionBlock from "../components/QuestionBlock.jsx";
import {useNavigate} from 'react-router-dom'
import QuizContext from "../context/QuizContext.jsx";

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

    const onRestart = ()=>{
        ctx.reset()
        navigate('/quiz/test',{replace:true})
    }

    return (
        <>
            <div className={classes.Header}>
                Logo
            </div>
            <div className={classes.ScoreContainer}>
                Your score: {ctx.score}
            </div>
            <div className={classes.Container}>
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
        </>
    );
};

export default QuizPage;