import axios from "axios";

export const login = (username,password) => {
    return axios.post(
        '/api/user/login',
        {
            username,
            password,
        }
    )
}

export const requestCaptcha = () => {
    return axios.get(
        '/api/captcha/get'
    )
}

export const requestValidationCode = (email)=>{
    return axios.post(
        '/api/email/send',
        {
            email
        }
    )
}

export const requestSignUp = (data)=>{
    console.log(data);
    return axios.post(
        '/api/user/register',
        data
    )
}

export const requestForgetPassword = (data)=>{
    console.log(data);
    return axios.post(
        '/api/user/password/forget',
        data
    )
}
