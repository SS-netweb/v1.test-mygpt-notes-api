# Dummy Python API
# Dit is een testserver om te checken of Python werkt.

from flask import Flask
app = Flask(__name__)

# Testroute
@app.route('/')
def hello():
    return "Hello from Python backend!"

# Server starten
if __name__ == "__main__":
    app.run(port=5000)
