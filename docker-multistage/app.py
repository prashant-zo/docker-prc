from flask import Flask
import os

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello World! I am running in a Multi-Stage Container!"

if __name__ == "__main__":
    # 0.0.0.0 makes it accessible outside the container
    app.run(host='0.0.0.0', port=5000)

