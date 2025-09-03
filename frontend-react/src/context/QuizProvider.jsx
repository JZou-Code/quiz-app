import React, {useState} from 'react';
import QuizContext from './QuizContext';
import {fetchQuizzes, submitResults} from '../api/quizzes.js';
import {useNavigate} from "react-router-dom";

export default function QuizProvider({children}) {
    const [quizArr, setQuizArr] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [score, setScore] = useState(0)
    const [isResult, setIsResult] = useState(false);

    const navigate = useNavigate();

    const setNewQuiz = async () => {
        fetchQuizzes()
            .then(res => {
                console.log(res)
                if (res.data.code === 200 || res.data.code === '200') {
                    const items = res?.data?.data?.items;
                    setQuizArr(items);
                    setUserAnswers(new Array(items.length).fill('X'));
                } else if (res.data.code === 401 || res.data.code === '401') {
                    localStorage.setItem('access_token', null);
                    navigate('/account/login')
                } else {
                    throw new Error(res.data.message)
                }
            })
            .catch(err => {
                console.log(err)
                setError(err.message)
            })
            .finally(() => setLoading(false));
    }

    const submit = async (options) => {
        const tempAnswer = userAnswers.find(e => e === 'X');
        if (!options.isTimeOver && tempAnswer) {
            const forceSubmit = confirm("You haven't finished yet. Are you sure you wanna submit now?")
            if (!forceSubmit) {
                return;
            }
        }


        const count = quizArr.reduce((sum, q, i) => {
            return sum + (userAnswers[i] === q.answerKey ? 1 : 0);
        }, 0);

        console.log(quizArr);
        console.log(userAnswers)

        setScore(count);
        setIsResult(true);

        try {
            const answers = [];
            for (let i = 0; i < quizArr.length; i++) {
                answers.push({
                    answer: userAnswers[i],
                    quizId: quizArr[i]?.id
                })
            }

            console.log(answers)

            const submitObj = {
                answers,
                correctNumber: count
            }

            console.log(submitObj)

            const res = await submitResults(submitObj)

            if (res.data.code === 401 || res.data.code === '401') {
                localStorage.setItem('access_token', null);
                navigate('/account/login')
            }

            navigate('/quiz/result', {replace: true})
            window.scroll(0, 0)
        } catch (e) {
            console.log(e)
        }
    };

    const reset = async () => {
        setUserAnswers(new Array(quizArr.length).fill(-1));
        setScore(0);
        setIsResult(false);

        setLoading(true);
        await setNewQuiz();
        window.scroll(0, 0)
    };

    return (
        <QuizContext.Provider
            value={{
                quizArr,
                loading,
                error,
                score,
                userAnswers,
                isResult,
                setQuizArr,
                setUserAnswers,
                setScore,
                setIsResult,
                submit,
                reset,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
}
