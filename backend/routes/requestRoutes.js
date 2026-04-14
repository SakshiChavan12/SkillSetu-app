const express = require('express');
const { createRequest, getRequests, updateRequestStatus } = require('../controllers/requestController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.post('/', createRequest);
router.get('/', getRequests);
router.put('/:id', updateRequestStatus);

module.exports = router;