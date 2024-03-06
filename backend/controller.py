from flask import Flask, jsonify, request
from models import db, Product, User
from flask_cors import CORS

app = Flask(__name__)

# Configure MySQL connection string
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:password@localhost/Shop'

# Initialize SQLAlchemy with the Flask app
db.init_app(app)
CORS(app) 
    
@app.route('/users')
def get_users():
    users = User.query.all()
    return jsonify([{
        'id': user.id,
        'firstname': user.firstname,
        'lastname': user.lastname,
        'username': user.username,
        'email': user.email
    } for user in users])


@app.route('/products')
def get_products():
    products = Product.query.all()
    return jsonify([{
        'id': product.id,
        'name': product.name,
        'description': product.description,
        'price': product.price
    } for product in products])


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    if 'username' not in data or 'password' not in data:
        return jsonify({'success': False, 'message': 'Username or password missing'}), 400
    
    username = data['username']
    password = data['password']

    # Check if user exists in the database
    user = User.query.filter_by(username=username).first()
    if user:
        # Check if password matches
        if user.password == password:
            return jsonify({'success': True, 'message': 'Login successful'})
        else:
            return jsonify({'success': False, 'message': 'Incorrect password'}), 401
    else:
        return jsonify({'success': False, 'message': 'User not found'}), 404
    
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    new_user = User(
        firstname=data['firstname'],
        lastname=data['lastname'],
        username=data['username'],
        email=data['email'],
        password=data['password']
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True)
