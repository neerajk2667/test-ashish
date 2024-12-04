const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    title: String,
    email: String,
    phone: String,
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Lead = mongoose.model('Lead', leadSchema);
module.exports = Lead;
