const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev');
        console.log('MongoDB Connected...');
    } catch (error) {
        console.log('Connect failure');
    }
}

module.exports = { connect };
