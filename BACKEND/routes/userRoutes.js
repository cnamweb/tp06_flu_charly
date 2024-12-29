const express = require('express');
const { registerUser, loginUser, updateUser, getUser } = require('../controllers/userController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Get current user info
router.get('/user', authenticate, getUser);

// Update user data
router.put('/user', authenticate, updateUser);

module.exports = router;
