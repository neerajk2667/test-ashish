const mongoose = require('mongoose');

// MongoDB connection string from Atlas
const dbURI = 'mongodb+srv://ashish:Hello@mt42@cluster0.fbsaq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

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
