import React, {useState} from 'react';
import classes from '../style/QuizPage.module.css';
import QuestionBlock from "../components/QuestionBlock.jsx";
import generateQuiz from '../mock/fakeQuestions.js'
import {useNavigate} from 'react-router-dom'
import Result from "../components/Result.jsx";

const QuizPage = () => {
    const navigate = useNavigate();
    const [quizArr, setQuizArr] = useState(generateQuiz());
    const [userAnswers, setUserAnswers] = useState(() => quizArr.map(() => -1));
    const [isActive, setIsActive] = useState(false);
    const [score, setScore] = useState(0);

    const onSubmit = () => {
        const tempAnswer = userAnswers.filter(e => e !== -1);
        if (tempAnswer.length !== quizArr.length) {
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

        setIsActive(true)
    }

    const onCancel = () => {
        const forceQuit = confirm("Are you sure you wanna quit now?");
        if (!forceQuit) {
            return
        }
        navigate('/');
    }

    const onRestart = () => {
        setQuizArr(generateQuiz());
        setScore(0);
        setUserAnswers(() => quizArr.map(() => -1));
        setIsActive(false);
        window.scroll(0, 0)
    }

    return (
        <>
            <div className={classes.Header}>
                Logo
            </div>
        <div className={classes.Container}>
            {quizArr.map((item, index) =>
                <QuestionBlock
                    quizData={item}
                    quizNum={index + 1}
                    key={index}
                    selected={userAnswers[index]}
                    onAnswer={ans => {
                        const copy = [...userAnswers];
                        copy[index] = ans;
                        setUserAnswers(copy);
                    }}
                />
            )}
            <div className={classes.ButtonContainer}>
                <button onClick={onSubmit} className={classes.Submit}>Submit</button>
                <button onClick={onCancel} className={classes.Cancel}>Cancel</button>
            </div>
            {
                isActive ? <Result onRestart={onRestart} score={score}/> : ''
            }
        </div>
        </>
    );
};

export default QuizPage;