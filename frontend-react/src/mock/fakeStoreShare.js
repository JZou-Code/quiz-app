function mockStoreShare(data) {
    return Promise.resolve({
        data: {
            "code": '200',
            "message": "ok",
            "data": {
                token:'test-token-of-share'
            }
        }
    })
}

export default mockStoreShare
