const express = require('express');
const Lead = require('../models/leadModel');


const createLead = async (req, res) => {
    const {firstName, surname, emailAddress, phoneNumber, service, description } = req.body;
    
    if(!firstName || !emailAddress || !phoneNumber || !service || !description) {
        res.status(400).json({message: 'Please enter all the required fields.'})
    }

    const lead = await Lead.create({
        firstName, 
        surname, 
        emailAddress, 
        service,
        phoneNumber,
        description 
    })

    if (lead) {
        //send email or notification

        res.status(200).json({
            message: "Lead captured"
        })
    }
}

module.exports = { createLead }