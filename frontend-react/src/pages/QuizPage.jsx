import React from 'react';
import classes from '../style/QuizPage.module.css';
import QuestionBlock from "../components/QuestionBlock.jsx";
import quizArr from '../mock/fakeQuestions.js'

const QuizPage = () => {
    const userAnswers = quizArr.map(() => -1);

    return (
        <div className={classes.Container}>
            Quiz Page
            {quizArr.map((item, index) =>
                <QuestionBlock quizData={item} quizNum={index + 1} answers={userAnswers} key={index}/>
            )}
            <div className={classes.ButtonContainer}>
                <button onClick={() => console.log(userAnswers)} className={classes.Submit}>Submit</button>
                <button className={classes.Cancel}>Cancel</button>
            </div>
        </div>
    );
};

export default QuizPage;