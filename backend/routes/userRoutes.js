const express = require('express');
const { getUsers, getUserById, updateProfile, searchUsers } = require('../controllers/userController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.use(protect); // All routes require authentication

router.get('/', getUsers);
router.get('/search', searchUsers);
router.get('/:id', getUserById);
router.put('/profile', updateProfile);

module.exports = router;