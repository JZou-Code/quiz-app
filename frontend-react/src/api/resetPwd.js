import axios from "axios";

export const confirmPwd = (prevPwd, newPwd, confirm) => {
    return axios.post(
        '/api/user/login',
        {
            prevPwd,
            newPwd,
            confirm
        }
    )
}
