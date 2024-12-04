const mongoose = require('mongoose');


const dbURI = 'mongodb+srv://neerajk2667:5VULkdgvVd21IhOn@cluster0.mongodb.net/zohoWebhookDB?retryWrites=true&w=majority
';

mongoose.connect(dbURI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log('MongoDB Connection Error: ', err));
