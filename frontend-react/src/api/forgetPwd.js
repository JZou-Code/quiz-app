import axios from "axios";

export const validateEmail = (email,code) => {
    return axios.post(
        '/api/user/login',
        {
            email,
            code,
        }
    )
}

export const confirmPwd = (password, confirm) => {
    return axios.post(
        '/api/user/login',
        {
            password,
            confirm
        }
    )
}
