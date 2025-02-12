// filepath: /C:/Users/rites/Downloads/code-review-main/code-review-main/BackEnd/src/routes/ai.routes.js
const express = require('express');
const router = express.Router();
const aiController = require('../controllers/ai.controller');

router.post('/review', aiController.getReview);

module.exports = router;