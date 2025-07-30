function generateQuiz() {
    const num = Math.ceil(Math.random() * 10);
    const quizArr = [];
    for (let i = 0; i < num; i++) {
        const options = [
            'aaaaaa',
            'bbbbbb',
            'cccccc',
            'dddddd'
        ]
        const question = {
            quiz: num + 'Lorem ababababa',
            options,
            answer: Math.floor(Math.random() * options.length)
            // answer: 0
        }
        quizArr.push(question)
    }
    return quizArr
}

export default generateQuiz