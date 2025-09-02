import api from '../api/api.js';

let installed = false;

export function setupAuthInterceptors({ logout }) {
    if (installed) {
        return
    }
    installed = true;

    api.interceptors.response.use(
        (resp) => {
            if (resp?.data?.code === 401 || resp?.data?.code === '401') {
                logout();
                return Promise.reject(new Error('Session expired (biz code 401)'));
            }
            return resp;
        },
        async (error) => {
            const status = error?.response?.status;
            const biz    = error?.response?.data?.code;

            if (status === 401 || biz === 401 || biz === '401') {
                logout();
            }
            return Promise.reject(error);
        }
    );
}
