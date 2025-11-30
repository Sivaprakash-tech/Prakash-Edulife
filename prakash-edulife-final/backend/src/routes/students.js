const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getProfile, listStudents } = require('../controllers/studentController');
router.get('/me', auth, getProfile);
router.get('/', auth, listStudents);
module.exports = router;
