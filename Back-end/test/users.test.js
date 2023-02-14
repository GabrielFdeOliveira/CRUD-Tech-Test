const assert = require('assert');
const { Client } = require('pg');
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../models/users');

// Initialize a new instance of the Client class
const client = new Client({ connectionString: process.env.POSTGRES_CONNECTION_URL });

// Connect to the database before running the tests
before(async function() {
  try {
    await client.connect();
  } catch (err) {
    console.error("Failed to connect to PostgreSQL database", err);
  }
});

// Disconnect from the database after running the tests
after(async function() {
  try {
    await client.end();
  } catch (err) {
    console.error("Failed to disconnect from PostgreSQL database", err);
  }
});

// Test the getUsers() function
describe('getUsers', function() {
  it('should return an array of users', async function() {
    const users = await getUsers();
    assert(Array.isArray(users));
  });
});

// Test the getUserById() function
describe('getUserById', function() {
  it('should return a single user object', async function() {
    const users = await getUsers();
    const id = users[0].id;
    const user = await getUserById(id);
    assert.strictEqual(typeof user, 'object');
  });
});

// Test the createUser() function
describe('createUser', function() {
  it('should add a new user to the database', async function() {
    const newUser = { first_name: 'John', last_name: 'Doe', email: 'johndoe@example.com' };
    const result = await createUser([newUser]);
    assert.strictEqual(result.message, 'User created successfully');
  });

  it('should not add a new user to the database if required fields are missing', async function() {
    const newUser = { first_name: 'John', last_name: 'Doe' };
    const result = await createUser([newUser]);
    assert.strictEqual(result.message, 'Missing required fields (first_name, last_name, email)');
  });
});

// Test the updateUser() function
describe('updateUser', function() {
  it('should update an existing user in the database', async function() {
    const users = await getUsers();
    const id = users[0].id;
    const changes = { first_name: 'Jane', last_name: 'Doe', email: 'janedoe@example.com' };
    const result = await updateUser(id, [changes]);
    assert.strictEqual(result.message, 'User updated successfully');
  });
});

// Test the deleteUser() function
describe('deleteUser', function() {
  it('should delete an existing user from the database', async function() {
    const users = await getUsers();
    const id = users[0].id;
    const result = await deleteUser(id);
    assert.strictEqual(result.message, 'User deleted successfully');
  });
});
