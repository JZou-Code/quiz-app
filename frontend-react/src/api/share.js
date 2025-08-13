import axios from "axios";
import mockShare from "../mock/fakeShare.js";

export const fetchShare = (username,password) => {
    // return axios.post(
    //     '/api/user/login',
    //     {
    //         username,
    //         password,
    //     }
    // )

    return mockShare();
}
