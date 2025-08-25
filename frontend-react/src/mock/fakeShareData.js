let shareData = {};
let tokenStr = '';

function randomString(len = 16) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export const store = (data) => {
    shareData = data;
    tokenStr = randomString();

    console.log(shareData)
    console.log(tokenStr)

    return Promise.resolve({
        data: {
            "code": '200',
            "message": "ok",
            "data": {
                token: tokenStr
            }
        }
    })
}

export const getStore = (token) => {

    console.log(token)
    console.log(tokenStr)

    if (token === tokenStr) {
        return Promise.resolve({
            data: {
                "code": '200',
                "message": "",
                "data": {
                    shareData
                }
            }
        })
    }else {
        return Promise.resolve({
            data: {
                "code": '500',
                "message": "Interval error",
                "data": {}
            }
        })
    }
}

export const resetShare = () => {
    shareData = {};
    tokenStr = '';
}
