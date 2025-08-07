import axios from "axios";

export const login = (username) => {
    return axios.get(
        `/api/user/login?username=${username}`,
    )
}
