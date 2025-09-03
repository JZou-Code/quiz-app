import axios from "axios";
import LoginForm from "../components/LoginForm.jsx";

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
    console.log(data)
    return axios.post(
        '/api/user/register',
        data
    )
}
