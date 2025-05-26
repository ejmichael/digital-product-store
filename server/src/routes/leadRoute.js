const express = require('express');
const { createLead } = require('../controllers/leadController');


const leadRoute = express.Router();

leadRoute.post('/create-lead', createLead)

module.exports = leadRoute