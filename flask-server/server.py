from flask import Flask, jsonify

app = Flask(__name__)

# Members API route
@app.route('/members')
def members():
    return {'members': ['Member1', 'Member2', 'Member3']}

# Catch-all 404 error handler
@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'This route does not exist'}), 404

if __name__ == '__main__':
    app.run(debug=True)

