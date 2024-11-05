from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Default route
@app.route('/')
def home():
    return "Welcome to the Flask App Backend!"

# Members API route
@app.route('/members')
def members():
    return {'members': ['Member1', 'Member2', 'Member3']}

if __name__ == '__main__':
    app.run(port=5001, debug=True)
