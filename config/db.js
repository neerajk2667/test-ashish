const mongoose = require('mongoose');

// MongoDB connection string from Atlas
const dbURI = 'mongodb+srv://neerajk2667:5VULkdgvVd21IhOn@cluster0.mongodb.net/zohoWebhookDB?retryWrites=true&w=majority';

// Connect to MongoDB Atlas
const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('MongoDB Atlas Connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
