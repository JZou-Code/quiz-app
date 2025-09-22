import api from "./api.js";
import axios from "axios";

export const fetchQuizzes = (category) => {
    return api({
        method: 'POST',
        url: 'quiz/list',
        data: {category}
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

export const getShareLink = (data) => {
    return api({
        method: 'POST',
        url: 'quiz/share/create',
        data
    })
}

export const getShareContent = (shareId) => {
    return axios({
        method: 'GET',
        url: `/api/quiz/share/view/${shareId}`
    })
}
