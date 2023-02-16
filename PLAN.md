
# User Management System

This is a full-stack CRUD application developed using a range of
          technologies, including Node.js, Express, PG, CORS, Postgres, Vite
          React.js, Axios, Toastify, React testing Library, and Jest.


## Plan

The purpose of this plan is to outline the steps necessary to build an application that allows users to view, create, update, and delete data from a PostgreSQL database using Node.js and a RESTful API. The front-end of the application will be built using React.js and Vite.

Step 1: Set up a Postgres database at ElephantSQL ✅

Step 2: Develop the RESTful API ✅

Use Express, to set up the RESTful API.✅

Write routes for handling the following actions: ✅


Step 3: Connect the API to the database ✅

Use the PG (PostgreSQL) library to connect the API to the database.✅

Write functions to execute SQL commands for each of the routes defined in step 2.✅
| Operation | URI     | Description                |
| :-------- | :------- | :------------------------- |
| `GET` | /api/users | Retrieve all users|
| `POST` | /api/users | Post a new user|
| `PUT` | /api/users/:id | Edit user's into|
| `DELETE` | /api/users/:id | Delete user|

Step 4: Write tests for the back end
COuldn't write tests due to "Failed to connect to PostgreSQL database error: password authentication failed for user "Gabriel" error, which I couldn't get pass. ❌

Step 5: Develop the front-end

Use React.js to develop the front-end of the application.
Use Vite as a build tool to compile the React components. ✅
Implement a table to display the list of users. ✅
Add buttons for creating, updating, and deleting users. ✅

Step 5: Test the application

Test the application to ensure that it works as expected. ✅

Step 5: Deploy the application
