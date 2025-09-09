import axios from "axios";

export const requestRank = () => {
    return axios.get(
        '/api/quiz/sessions/ranking'
    )
}

