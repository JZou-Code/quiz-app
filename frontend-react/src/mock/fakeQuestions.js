const num = 10;
const quizArr = [];
for (let i = 0; i < num; i++) {
    const options= [
        'aaaaaa',
        'bbbbbb',
        'cccccc',
        'dddddd'
    ]
    const question = {
        quiz: 'Lorem ababababa',
        options,
        answer: Math.ceil(Math.random() * options.length)
    }
    quizArr.push(question)
}

export default quizArr