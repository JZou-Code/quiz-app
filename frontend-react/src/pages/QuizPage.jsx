import React, {useContext, useState} from 'react';
import classes from '../style/QuizPage.module.css';
import QuestionBlock from "../components/QuestionBlock.jsx";
import generateQuiz from '../mock/fakeQuestions.js'
import {useNavigate} from 'react-router-dom'
import Result from "../components/Result.jsx";
import Timer from "../components/Timer.jsx";
import QuizContext from "../context/QuizContext.jsx";
import QuizProvider from "../context/QuizProvider.jsx";

const QuizPage = () => {
    const ctx = useContext(QuizContext);

    const navigate = useNavigate();
    const [quizArr, setQuizArr] = useState(generateQuiz());
    const [userAnswers, setUserAnswers] = useState(() => ctx.quizArr.map(() => -1));
    const [score, setScore] = useState(0);

    const onSubmit = (e, isTimeOver = false) => {
        const tempAnswer = userAnswers.filter(e => e !== -1);
        if (!isTimeOver && tempAnswer.length !== quizArr.length) {
            const forceSubmit = confirm("You haven't finished yet. Are you sure you wanna submit now?")
            if (!forceSubmit) {
                return;
            }
        }

        for (let i = 0; i < quizArr.length; i++) {
            if (userAnswers[i] === quizArr[i].answer) {
                setScore(prevState => prevState + 1);
            }
        }

        console.log(userAnswers)
        console.log(quizArr)

        setScore(0);
        setUserAnswers(() => quizArr.map(() => -1));

        navigate('/quiz/result')
    }

    const onCancel = () => {
        const forceQuit = confirm("Are you sure you wanna quit now?");
        if (!forceQuit) {
            return
        }
        navigate('/');
    }

    // const onRestart = () => {
    //     setQuizArr(generateQuiz());
    //     setScore(0);
    //     setUserAnswers(() => quizArr.map(() => -1));
    //     setIsActive(false);
    //     window.scroll(0, 0)
    // }


    return (
        <>
            <div className={classes.Header}>
                Logo
                <Timer
                    seconds={60*20}
                    onTimeOver={()=>{ctx.submit({
                        isTimeOver:true,

                    })}}/>
            </div>
            <div className={classes.Container}>
                {ctx.quizArr.map((item, index) =>
                    <QuestionBlock
                        quizData={item}
                        quizNum={index + 1}
                        key={index}
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
                {/*{*/}
                {/*    isActive ? <Result onRestart={onRestart} score={score}/> : ''*/}
                {/*}*/}
            </div>
        </>
    );
};

export default QuizPage;