import axios from "axios";
import mockLogin from "../mock/fakeLogin.js";

export const login = (username,password) => {
    // return axios.post(
    //     '/api/user/login',
    //     {
    //         username,
    //         password,
    //     }
    // )

    return mockLogin();
}
