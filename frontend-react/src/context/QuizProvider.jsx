import React, {useState, useEffect} from 'react';
import QuizContext from './QuizContext';
import {fetchQuizzes} from '../api/quizzes.js';
import {useNavigate} from "react-router-dom";

export default function QuizProvider({children}) {
    const [quizArr, setQuizArr] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [score, setScore] = useState(0)

    const navigate = useNavigate();

    useEffect(() => {
        fetchQuizzes()
            .then(data => {
                if (data.code === '200') {
                    setQuizArr(data.quizArr);
                    setUserAnswers(new Array(data.quizArr.length).fill(-1));
                } else {
                    throw new Error(data.message)
                }
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    const submit = (options) => {
        const tempAnswer = userAnswers.find(e => e === -1);
        if (!options.isTimeOver && tempAnswer) {
            const forceSubmit = confirm("You haven't finished yet. Are you sure you wanna submit now?")
            if (!forceSubmit) {
                return;
            }
        }

        const count = quizArr.reduce((sum, q, i) => {
            return sum + (userAnswers[i] === q.answer ? 1 : 0);
        }, 0);

        setScore(count)

        console.log(quizArr);
        console.log(userAnswers)

        navigate('/quiz/result')
    };
    const reset = () => {
        setUserAnswers(new Array(quizArr.length).fill(-1));
        setScore(0);
    };

    return (
        <QuizContext.Provider
            value={{
                quizArr,
                loading,
                error,
                score,
                userAnswers,
                setUserAnswers,
                submit,
                reset,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
}
