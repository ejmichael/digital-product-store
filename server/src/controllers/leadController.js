const express = require('express');
const Lead = require('../models/leadModel');

const getLeads = async(req, res) => {
    const {service} = req.params;


    try {
        const leads = await Lead.find({ service });
    
        if (!leads || leads.length === 0) {
          return res.status(404).json({ message: 'No leads found for this service.' });
        }
    
        res.status(200).json(leads);
        console.log(leads);
        
      } catch (error) {
        console.error('Error fetching leads:', error);
        res.status(500).json({ message: 'Server error fetching leads.' });
      }
}

const createLead = async (req, res) => {
    const {firstName, surname, emailAddress, location, propertyType, surfaceType, phoneNumber, service, description, photos } = req.body;
    
    if(!firstName || !emailAddress || !phoneNumber || !service || !description || !location || !propertyType || !surfaceType) {
        res.status(400).json({message: 'Please enter all the required fields.'})
    }

    try {
            const lead = await Lead.create({
                firstName, 
                surname, 
                emailAddress, 
                service,
                phoneNumber,
                description,
                location,
                propertyType,
                surfaceType,
                photos
            })

    if (lead) {
        //send email or notification

        res.status(200).json({
            message: "Lead captured"
        })
    }
    } catch (error) {
        console.log(error);
        res.status(400).json({message: error})
        
    }
}

module.exports = { createLead, getLeads }