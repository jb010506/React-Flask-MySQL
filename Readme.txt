This is a web app with React as frontend, Flask as backend, MySQL as database management system.

React as frontend, which has the following url, features:
	- /login, allows people to login and see the home page
	- /signup, allows account registration
	- /, home page which displays all the products
	- /users, page which displays all the users
	- /profile, page which display the login user's information
	- * (nomatch), redirects to an empty page if no match

Flask as backend, which has the following url, features:
	- /login, a POST method which allows frontend request to be validated with users in database record
	- /signup, a POST method which allows frontend request to be processed and create new user record in database
	- /users, a GET method which will query all users records from database and jsonify to React Frontend
	- /products, a GET method which will query all products records from database and jsonify to React Frontend

MySQL as DBMS, which has the following spec:
	- a MySQL database named "Shop" with two tables
	- "Products" with columns: ID, Name, Description and Price
	- "Users" with columns: ID, Firstname, Lastname, Username, Email and Password
    - all tables and db schema are exported as .sql in db folder
