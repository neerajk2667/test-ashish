const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Lead = require('./models/lead');
require('./config/db');

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Route to handle incoming webhook from Zoho CRM
app.post('/webhook', async (req, res) => {
    try {
        // Get lead data from the webhook request
        const { name, email, phone } = req.body.data;  // Assuming Zoho sends the data as 'data'

        // Create a new lead document
        const newLead = new Lead({
            name,
            email,
            phone
        });

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
