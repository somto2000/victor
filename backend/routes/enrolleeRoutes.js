const express = require('express');
const router = express.Router();
const { getEnrolleeProfile, updateEnrolleeProfile } = require('../controllers/enrolleeController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/profile', authMiddleware, getEnrolleeProfile, updateEnrolleeProfile );

module.exports = router;
