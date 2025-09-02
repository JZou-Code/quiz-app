import React, {useContext, useEffect} from 'react';
import classes from '../style/QuizPage.module.css';
import QuestionBlock from "../components/QuestionBlock.jsx";
import {useNavigate} from 'react-router-dom'
import Timer from "../components/Timer.jsx";
import QuizContext from "../context/QuizContext.jsx";

const QuizPage = () => {
    const ctx = useContext(QuizContext);
    const navigate = useNavigate();

    const onCancel = () => {
        const forceQuit = confirm("Are you sure you wanna quit now?");
        if (!forceQuit) {
            return
        }
        navigate('/', {replace: true});
    }

    useEffect(() => {
        ctx.reset();

        const warn = e => {
            e.preventDefault();
            e.returnValue = 'Refreshing the page will cause data loss. Continue?';
        };
        window.addEventListener('beforeunload', warn);
        return () => window.removeEventListener('beforeunload', warn);
    }, []);

    return (
        <>
            <div className={classes.Title}>
                <div className={classes.TitleContainer}>
                    <span className={classes.TitleLogo}>SciQ</span>
                    <span className={classes.TitleChunk}>Insight</span>
                </div>
            </div>
            <div className={classes.TimerContainer}>
                <div className={classes.Timer}>
                    <Timer seconds={20 * 60} onTimeOver={ctx.submit}/>
                </div>
            </div>
            <div className={classes.QuizContainer}>
                {ctx.quizArr.map((item, index) =>
                    <QuestionBlock
                        quizData={item}
                        quizNum={index}
                        key={item.id}
                        selected={ctx.userAnswers[index]}
                        onAnswer={ans => {
                            const copy = [...ctx.userAnswers];
                            copy[index] = ans;
                            ctx.setUserAnswers(copy);
                        }}
                    />
                )}

                <div className={classes.ButtonContainer}>
                    <button onClick={ctx.submit} className={classes.Submit}>Submit</button>
                    <button onClick={onCancel} className={classes.Cancel}>Cancel</button>
                </div>
            </div>
        </>
    );
};

export default QuizPage;
