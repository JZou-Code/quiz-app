import axios from "axios";

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
    return axios.post(
        '/api/user/register',
        data
    )
}
