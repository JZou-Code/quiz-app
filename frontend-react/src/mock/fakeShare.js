function mockShare(id) {
    const score = Math.floor(Math.random() * 21)
    const total = 20;
    return Promise.resolve({
        data: {
            "code": '200',
            "message": "",
            "data": {
                username: 'Luffy',
                total,
                score,
                time: new Date(),
                category: 'Math'
            }
        }
    })
}

export default mockShare
