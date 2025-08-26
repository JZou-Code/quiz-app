import axios from "axios";

export const requestCaptcha = () => {
    return axios.get(
        '/api/captcha/get'
    )
}

export const requestValidationCode = (email)=>{
    return axios.post(
        '/api/send-validation-code',
        {
            email
        }
    )
}

export const requestSignUp = (data)=>{
    console.log(data.captchaId)
    return axios.post(
        '/api/user/register',
        data
    )
}
