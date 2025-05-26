const express = require('express');
const Lead = require('../models/leadModel');


const createLead = async (req, res) => {
    const {firstName, surname, emailAddress, location, propertyType, surfaceType, phoneNumber, service, description } = req.body;
    
    if(!firstName || !emailAddress || !phoneNumber || !service || !description || !location || !propertyType || !surfaceType) {
        res.status(400).json({message: 'Please enter all the required fields.'})
    }

    const lead = await Lead.create({
        firstName, 
        surname, 
        emailAddress, 
        service,
        phoneNumber,
        description,
        location,
        propertyType,
        surfaceType
    })

    if (lead) {
        //send email or notification

        res.status(200).json({
            message: "Lead captured"
        })
    }
}

module.exports = { createLead }