import api from "./api.js";

export const login = (username,password) => {
    return api.post(
        '/api/user/login',
        {
            username,
            password,
        }
    )
}
