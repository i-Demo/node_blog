const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/courseController.js');

// Goto Create Course PAGE
router.get('/create', courseController.create);
// Goto Edit Page
router.get('/:id/edit', courseController.edit);

router.delete('/:id', courseController.destroy);

// Tạo Course mới
router.post('/store', courseController.store);
// Sửa Course
router.put('/:id', courseController.update);
// Goto Course Detail Page
router.get('/:slug', courseController.show);

module.exports = router;
