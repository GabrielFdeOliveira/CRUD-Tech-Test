// Import Client class from pg and create a new instance of it 
// Initialize the new instance with a connection string to access the db
import pg from 'pg';
const { Client } = pg;

const client = new Client({ connectionString: process.env.POSTGRES_CONNECTION_URL });

async function connectToDb() {
  try {
    // Use .connect method on the new instance
    await client.connect();
    console.log("Successfully connected to PostgreSQL database");
  } catch (err) {
    console.error("Failed to connect to PostgreSQL database", err);
  }
}

// Establish the connection
connectToDb();

const getUsers = async () => {
  try {
    const result = await client.query('SELECT * FROM users;');
    const usersArray = result.rows;
    return usersArray;
    
  } catch (err) {
    return err;
  }
};

const getUserById = async (id) => {
  try {
    const result = await client.query('SELECT * FROM users WHERE id = $1', [id]);
    const user = result.rows;
    return user;
  } catch (err) {
    return err;
  }
};

const createUser = async (newUser) => { 
  try {
    // Check if all fields are present in the request body
    if (!newUser.first_name || !newUser.last_name || !newUser.email) {
      return { message: 'Missing required fields (first_name, last_name, email)' };
    }    
    const result = await client.query(
      'INSERT INTO users (first_name, last_name, email) VALUES ($1, $2, $3)',
      [newUser.first_name, newUser.last_name, newUser.email]
    );    
    return { message: 'User created successfully' };
  } catch (err) {
    return err;
  }
};



const updateUser = async (id, data) => {
  const newData = data
  console.log(newData)
  try {
    // Check if all required fields are present in the request body
    if (!newData.first_name || !newData.last_name || !newData.email) {
      return { message: 'Missing required fields (first_name, last_name, email)' };
    }
    const result = await client.query(
      'UPDATE users SET first_name = $1, last_name = $2, email = $3 WHERE id = $4',
      [newData.first_name, newData.last_name, newData.email, id]
    );
    return { message: 'User updated successfully' };
  } catch (err) {
    return err;
  }
};

const deleteUser = async (id) => {
  try {
    const result = await client.query('DELETE FROM users WHERE id = $1', [id]);
    return { message: 'User deleted successfully' };
  } catch (err) {
    return err;
  }
};

export {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
