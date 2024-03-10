from flask import Flask, request, jsonify, render_template,redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from flask_swagger_ui import get_swaggerui_blueprint
app = Flask(__name__)

SWAGGER_URL="/swagger"
API_URL="/static/swagger.json"

swagger_ui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={
        'app_name': 'Ai Final Project Api'
    }
)
app.register_blueprint(swagger_ui_blueprint, url_prefix=SWAGGER_URL)


app.secret_key = "super secret key"

# PostgreSQL Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root@localhost:3306/final_project'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

migrate = Migrate(app, db)

class UserCredentials(db.Model):
    __tablename__= 'user_credentials'
    username = db.Column(db.String(50),primary_key =True, nullable=False)
    password = db.Column(db.String(50), unique=False, nullable=False)





class User(db.Model):

    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50),db.ForeignKey('user_credentials.username'), unique=True, nullable=False)
    name=db.Column(db.String(50), unique=False, nullable= False)
    user_api = db.Column(db.String(500), nullable=False)
    user_risk_cap = db.Column(db.String(50),unique=True, nullable=True)
    user_market_cap = db.Column(db.String(50),unique=True, nullable=True)






@app.route('/')
def index():
    return "<h1>Final Project Api</h1>"


@app.route('/login')
def login():
    return render_template('')





@app.route('/login', methods=['POST'])
def login_post():
    if request.method == 'POST':
        try:
            # Assuming your front-end sends data as JSON
            data = request.get_json()

            # Print received data for debugging
            print("Received data:", data)

            # Get username and password from the request
            username = data.get('username')
            password = data.get('password')

            # Query the database for the user
            user = UserCredentials.query.filter_by(username=username).first()
            print(user)
            if user and user.password == password:
                # Successful login
                #session['user_id'] = user.id
                
                response = {'message': 'Login successful'}
                return jsonify(response), 200
                
            else:
                # Invalid credentials
                response = {'message': 'Invalid credentials'}
                return jsonify(response), 401

        except Exception as e:
            response = {'message': 'Error: {}'.format(str(e))}
            return jsonify(response), 500


@app.route('/get_userinfo')
def get_userinfo():
    # Assuming you have an Appointments model and relevant fields
    user= User.query.all()
    print(user)
    # Convert userinfo to a list of dictionaries
    user_list = [
        {
            'username': u.username,
            'name': u.name,
            'user_api': u.user_api,
            'user_risk_cap': u.user_risk_cap
        } 
        for u in user
    ]

    return jsonify(user_list)

@app.route('/user_post', methods=['POST'])
def add_user():
    try:
        # Assuming you're passing user_id in the request
        username = request.json.get('username')
        name= request.json.get('name')
        user_api= request.json.get('user_api')
        user_risk_cap= request.json.get('user_risk_cap')
        user_market_cap= request.json.get('user_market_cap')

        user = User.query.filter_by(username= username).first()

        if user:
            userobj= User(username = username ,name =name, user_api=user_api , user_risk_cap=user_risk_cap , 
                          user_market_cap =user_market_cap)
            


            db.session.add(userobj)
            db.session.commit()

            print("user added to db")
        else:
            print("user doesnt exit")
    except Exception as e:
        print('Error:', str(e))
        return jsonify({'success': False, 'message': str(e)})
    

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)