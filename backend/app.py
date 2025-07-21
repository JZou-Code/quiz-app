from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # <-- Enable CORS for all routes by default

@app.route('/api/quiz')
def quiz():
    return jsonify({
        "question": "What is the capital of France?",
        "choices": ["Paris", "London", "Rome"],
        "answer": "Paris"
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
