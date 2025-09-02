import api from "./api.js";

export const fetchQuizzes = () => {
    return api({
        method: 'GET',
        url:'quiz/list'
    })
}
