const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    address:String,
    city:String,
    state:String
});

module.exports = mongoose.model('Akash', userSchema, 'customers');

