import React from 'react';
import classes from '../style/QuizPage.module.css';
import QuestionBlock from "../components/QuestionBlock.jsx";
import quizArr from '../mock/fakeQuestions.js'
import {useNavigate} from 'react-router-dom'

const QuizPage = () => {
    const navigate = useNavigate();
    const userAnswers = quizArr.map(() => -1);

    const onSubmit = () => {
        const tempAnswer = userAnswers.filter(e => e !== -1);
        if (tempAnswer.length !== quizArr.length) {
            const forceSubmit = confirm("You haven't finished yet. Are you sure you wanna submit now?")
            if (!forceSubmit) {
                return;
            }
        }

        let result = 0;
        for (let i = 0; i < quizArr.length; i++) {
            if (userAnswers[i] === quizArr[i].answer) {
                result++;
            }
        }

        console.log(userAnswers)
        console.log(quizArr)
        console.log('Socre = ' + result)

        navigate('/quiz/result', {state: {score: result}});
    }

    const onCancel = () => {
        const forceQuit = confirm("Are you sure you wanna quit now?");
        if (!forceQuit) {
            return
        }
        navigate('/');
    }

    return (
        <div className={classes.Container}>
            Quiz Page
            {quizArr.map((item, index) =>
                <QuestionBlock quizData={item} quizNum={index + 1} answers={userAnswers} key={index}/>
            )}
            <div className={classes.ButtonContainer}>
                <button onClick={onSubmit} className={classes.Submit}>Submit</button>
                <button onClick={onCancel} className={classes.Cancel}>Cancel</button>
            </div>
        </div>
    );
};

export default QuizPage;