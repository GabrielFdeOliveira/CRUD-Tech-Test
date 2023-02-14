The purpose of this plan is to outline the steps necessary to build an application that allows users to view, create, update, and delete data from a PostgreSQL database using Node.js and a RESTful API. The front-end of the application will be built using React.js and Vite.

Step 1: Set up a Postgres database at ElephantSQL ✅
Query:

CREATE TABLE users (
id SERIAL PRIMARY KEY,
first_name TEXT NOT NULL,
last_name TEXT NOT NULL,
email TEXT NOT NULL UNIQUE,
created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO users (first_name, last_name, email)
VALUES
('John', 'Silver', 'johnsilver@example.com'),
('Jane', 'Doe', 'janedoe@example.com'),
('Jim', 'Smith', 'jimsmith@example.com'),
('Sarah', 'Johnson', 'sarahjohnson@example.com'),
('Tom', 'Brown', 'tombrown@example.com')
;

Step 2: Develop the RESTful API ✅

Use Express, to set up the RESTful API.✅
Write routes for handling the following actions: ✅

GET /api/users: Retrieve a list of all users in the database.
GET /api/users/${id}: Retrieve a single user by their ID.
POST    /api/users: Create a new user.
PUT     /api/users/${id}: Update an existing user by their ID.
DELETE /api/users/${id}: Delete an existing user by their ID.

Step 3: Connect the API to the database ✅

Use the PG (PostgreSQL) library to connect the API to the database.✅
Write functions to execute SQL commands for each of the routes defined in step 2.✅

Step 4: Write tests for the back end

Step 5: Develop the front-end

Use React.js to develop the front-end of the application.
Use Vite as a build tool to compile the Vue components.
Implement a table to display the list of users.
Add buttons for creating, updating, and deleting users.

Step 5: Test the application

Test the application to ensure that it works as expected.
Resolve any issues or bugs found during testing.
Step 5: Deploy the application

Deploy the application to a hosting service, such as Heroku or AWS.
Ensure that the application is accessible and working as expected.
