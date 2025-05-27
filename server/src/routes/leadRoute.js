const express = require('express');
const { createLead, getLeads } = require('../controllers/leadController');


const leadRoute = express.Router();

leadRoute.post('/create-lead', createLead)
leadRoute.get('/get-leads/:service', getLeads)

module.exports = leadRoute