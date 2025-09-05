import api from "./api.js";
import axios from "axios";

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
        url: `/api/quiz/share/view/${shareId}`,
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJUZXN0MDIiLCJleHAiOjE3NTcwMzYxMTh9.xoyVT2NkWJW36rlkNVI0AMJzx3VKVghmAjRVbZvzw2A`,
        }
    })
}
