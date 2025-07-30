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

        // navigate('/quiz/result', {state: {score: result}});
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
    }

    return (
        <div className={classes.Container}>
            {quizArr.map((item, index) =>
                <QuestionBlock
                    quizData={item}
                    quizNum={index + 1}
                    answers={userAnswers}
                    key={index}
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
    );
};

export default QuizPage;