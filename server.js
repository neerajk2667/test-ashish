const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Lead = require('./models/lead');
const connectDB = require('./config/db');

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Route to handle incoming webhook from Zoho CRM
app.post('/webhook', async (req, res) => {
    try {
        // Log the received data for debugging purposes
        console.log('Received request body:', req.body);

        // Get lead data from the webhook request
        const { firstName, lastName, title, email, phone } = req.body.data || {}; // Assuming Zoho sends the data as 'data'

        // Only save fields that exist
        const leadData = {};

        if (firstName) leadData.firstName = firstName;
        if (lastName) leadData.lastName = lastName;
        if (title) leadData.title = title;
        if (email) leadData.email = email;
        if (phone) leadData.phone = phone;

        // Create a new lead document with dynamic data
        const newLead = new Lead(leadData);

        // Save the lead to MongoDB
        await newLead.save();

        console.log('New lead saved to MongoDB:', newLead);
        res.status(200).send('Lead saved successfully!');
    } catch (error) {
        console.error('Error saving lead:', error);
        res.status(500).send('Error saving lead');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
