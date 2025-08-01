import axios from "axios";

export const requestCaptcha = () => {
    return axios.get(
        'api/captcha'
    )
}
