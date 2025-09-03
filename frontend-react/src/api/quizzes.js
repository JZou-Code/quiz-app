import api from "./api.js";

export const fetchQuizzes = () => {
    return api({
        method: 'GET',
        url: 'quiz/list'
    })
}

export const submitResults = (results) => {
    return api({
        method: 'POST',
        url: 'quiz/submit',
        data: results
    })
}

export const getHistory = () => {
    return api({
        method: 'POST',
        url: 'quiz/sessions/top',
        data: {}
    })
}

export const getDetailHistoryById = (sessionId) => {
    return api({
        method: 'POST',
        url: 'quiz/sessions/details',
        data: {sessionId}
    })
}
