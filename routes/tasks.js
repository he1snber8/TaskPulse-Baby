// routes/tasks.js
const express = require('express');
const { getTasks, createTask } = require('../controllers/tasksController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();
router.use(auth);
router.get('/', getTasks);
router.post('/', createTask);
module.exports = router;