import axios from "axios";
import mockShare from "../mock/fakeShare.js";
import mockStoreShare from "../mock/fakeStoreShare.js";

export const fetchShare = (id) => {
    // return axios.post(
    //     '/api/user/login',
    //     {
    //         username,
    //         password,
    //     }
    // )

    return mockShare();
}

export const fetchStoreShare = (data) => {
    return mockStoreShare();
}
