import React from "react";

const QuizContext = React.createContext({
    quizArr: [],
    loading: false,
    error: null,
    userAnswers: [],
    isResult: false,
    setQuizArr: () => {
    },
    setUserAnswers: () => {
    },
    setScore: () => {
    },
    setIsResult: () => {
    },
    submit: () => {
    },
    reset: () => {
    },
    score: 0
});

export default QuizContext;
