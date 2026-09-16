const mongoose = require('mongoose');
const URL = 'mongodb://127.0.0.1:27017/gofood';

const mongoDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log('MongoDB Connected Successfully');
    } catch (error) {
        console.error('MongoDB Connection Failed:', error.message);
    }
};

module.exports = mongoDB;