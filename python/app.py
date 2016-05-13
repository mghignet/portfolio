from flask import Flask
from flask import render_template
from flask.ext.babel import Babel
import json

app = Flask(__name__)

# App environment
app.jinja_env.add_extension('pyjade.ext.jinja.PyJadeExtension')
babel = Babel(app)

# Routes
@app.route('/')
def hello_world():
    a = json.load(open('resume.json'))
    return render_template('layout.html')
    return json.dumps(a)

if __name__ == '__main__':
    app.run(debug=True)
