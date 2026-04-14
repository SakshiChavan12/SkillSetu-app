const User = require('../models/User');

// @desc    Get all users (except current user)
// @route   GET /api/users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({ _id: { $ne: req.user.id } }).select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single user
// @route   GET /api/users/:id
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update user profile
// @route   PUT /api/users/profile
const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (user) {
      user.name = req.body.name || user.name;
      user.bio = req.body.bio || user.bio;
      user.location = req.body.location || user.location;
      user.skills = req.body.skills || user.skills;
      user.skillsToLearn = req.body.skillsToLearn || user.skillsToLearn;

      const updatedUser = await user.save();
      res.json({
        _id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        bio: updatedUser.bio,
        location: updatedUser.location,
        skills: updatedUser.skills,
        skillsToLearn: updatedUser.skillsToLearn
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Search users by skill
// @route   GET /api/users/search?skill=...
const searchUsers = async (req, res) => {
  try {
    const { skill } = req.query;
    const users = await User.find({
      _id: { $ne: req.user.id },
      $or: [
        { skills: { $regex: skill, $options: 'i' } },
        { skillsToLearn: { $regex: skill, $options: 'i' } }
      ]
    }).select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsers, getUserById, updateProfile, searchUsers };