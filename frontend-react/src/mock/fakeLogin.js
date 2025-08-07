function mockLogin() {
    return Promise.resolve({
        data: {
            "code": '200',
            "message": "",
            "data": {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
            }
        }
    })
}

export default mockLogin
