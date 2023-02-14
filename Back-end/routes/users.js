import express from 'express';
const router = express.Router();

import  {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser } from '../models/users.js';

// Get all users
router.get("/", async (req, res) => {
  try {
    const result = await getUsers();
    res.json({ success: true, payload: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error retrieving users" });
  }
})

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
  res.json({ success: true, payload: user });
  }catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error retrieving user by id" });
  }
  
})

// Create user
router.post('/', async (req, res) => {
  //Extract the payload sent as request to a variable, then use it as paramenter for the createUser()
  const newUser = req.body.payload;
  try{
    const result = await createUser(newUser)
    res.json({ success: true, payload: result })
  }catch (err) {    
    console.error(err);
    res.status(500).json({ success: false, message: "Error when posting new user" });
  }  
});

// Update user by ID
// I could only update a user if I provide all fields in my request body on Postman, to avoid that I'd have to construct the SQL query dynamically
router.put('/:id', async (req, res) => {  
  const data = req.body.payload;
  try{
    const result = await updateUser(req.params.id, data)
    res.json({ success: true, payload: result });
  }catch (err) {    
    console.error(err);
    res.status(500).json({ success: false, message: "Error when updating user" });
  }
});

// Delete user by ID
router.delete('/:id', async (req, res) => {
  try{
    const result = await deleteUser(req.params.id);
    res.json({ success: true, payload: result });
  }catch (err) {    
    console.error(err);
    res.status(500).json({ success: false, message: "Error when deleting user by id" });
  }  
});

export default router;
