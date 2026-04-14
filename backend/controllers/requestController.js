const Request = require('../models/Request');
const User = require('../models/User');

// @desc    Create skill exchange request
// @route   POST /api/requests
const createRequest = async (req, res) => {
  try {
    const { receiver, skillOffered, skillRequested, message } = req.body;

    const request = await Request.create({
      sender: req.user.id,
      receiver,
      skillOffered,
      skillRequested,
      message
    });

    const populatedRequest = await Request.findById(request.id)
      .populate('sender', 'name email')
      .populate('receiver', 'name email');

    res.status(201).json(populatedRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get requests for current user (both sent and received)
// @route   GET /api/requests
const getRequests = async (req, res) => {
  try {
    const requests = await Request.find({
      $or: [{ sender: req.user.id }, { receiver: req.user.id }]
    })
      .populate('sender', 'name email skills')
      .populate('receiver', 'name email skills')
      .sort('-createdAt');

    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update request status
// @route   PUT /api/requests/:id
const updateRequestStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    // Only receiver can update status
    if (request.receiver.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    request.status = status;
    await request.save();

    const updatedRequest = await Request.findById(req.params.id)
      .populate('sender', 'name email')
      .populate('receiver', 'name email');

    res.json(updatedRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createRequest, getRequests, updateRequestStatus };