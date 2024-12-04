const mongoose = require('mongoose');


const dbURI = 'mongodb://localhost:27017/zohoWebhookDB';

mongoose.connect(dbURI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log('MongoDB Connection Error: ', err));
