const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/courseController.js');

router.get('/create', courseController.create);
router.get('/:id/edit', courseController.edit);
router.post('/store', courseController.store);
router.put('/:id', courseController.update);
router.get('/:slug', courseController.show);

module.exports = router;
