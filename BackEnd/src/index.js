// filepath: /C:/Users/rites/Downloads/code-review-main/code-review-main/BackEnd/src/index.js
const express = require('express');
const serverless = require('serverless-http');
const aiRoutes = require('./routes/ai.routes');

const app = express();

app.use(express.json());
app.use('/api', aiRoutes);

module.exports = app;
module.exports.handler = serverless(app);