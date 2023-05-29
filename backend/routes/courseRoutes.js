const express = require('express');
const router = express.Router();
const {
  getAllCourses,
  createCourse,
  getCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courseController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', getAllCourses);
router.post('/', authMiddleware, createCourse);
router.get('/:courseId', getCourse);
router.put('/:courseId', authMiddleware, updateCourse);
router.delete('/:courseId', authMiddleware, deleteCourse);

module.exports = router;
