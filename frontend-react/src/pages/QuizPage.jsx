import React from 'react';
import classes from '../style/QuizPage.module.css';
import QuestionBlock from "../components/QuestionBlock.jsx";
import quizArr from '../mock/fakeQuestions.js'

const QuizPage = () => {
    return (
            <div className={classes.Container}>
                Quiz Page
                {quizArr.map((item, index) =>
                    <QuestionBlock quizData={item} quizNum={index + 1} key={index}/>
                )}
                <div className={classes.ButtonContainer}>
                    <button className={classes.Submit}>Submit</button>
                    <button className={classes.Cancel}>Cancel</button>
                </div>
            </div>
    );
};

export default QuizPage;