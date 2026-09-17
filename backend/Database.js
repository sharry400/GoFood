const mongoose = require('mongoose');
const URL = process.env.MongoURI;

const mongoDB = async () => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected Successfully');
    } catch (error) {
        console.error('MongoDB Connection Failed:', error.message);
    }
};

module.exports = mongoDB;