import React, {useContext, useEffect, useState} from 'react';
import classes from '../style/QuizPage.module.css';
import QuestionBlock from "../components/QuestionBlock.jsx";
import {useNavigate} from 'react-router-dom'
import Timer from "../components/Timer.jsx";
import QuizContext from "../context/QuizContext.jsx";
import Backdrop from "../UI/Backdrop/Backdrop.jsx";

const QuizPage = () => {
    const ctx = useContext(QuizContext);
    const navigate = useNavigate();

    const [processing, setProcessing] = useState(false)
    const [isError, setIsError] = useState(false)

    const onCancel = () => {
        const forceQuit = confirm("Are you sure you wanna quit now?");
        if (!forceQuit) {
            return
        }
        navigate('/', {replace: true});
    }

    const handleSubmit = async ()=>{
        setProcessing(true);
        const res = await ctx.submit();
        console.log(res)
        if(res.flag){
            setProcessing(false)
            navigate('/quiz/result', {replace: true})
            window.scroll(0, 0)
        }else {
            console.log(res)
        }
    }

    const handleCancel = () => {
        setProcessing(false)
        setIsError(false);
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
                {ctx.loading ? <div className={classes.Loading}>Loading...</div> : ctx.quizArr.map((item, index) =>
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
                    <button onClick={handleSubmit} className={classes.Submit}>Submit</button>
                    <button onClick={onCancel} className={classes.Cancel}>Cancel</button>
                </div>
            </div>
            {
                processing &&
                <Backdrop>
                    <div onClick={handleCancel} className={classes.Notification}>
                        Processing...
                    </div>
                </Backdrop>
            }
            {
                isError && <Backdrop>
                    <div onClick={handleCancel} className={classes.Notification}>
                        Something went wrong.
                    </div>
                </Backdrop>
            }
        </>
    );
};

export default QuizPage;
