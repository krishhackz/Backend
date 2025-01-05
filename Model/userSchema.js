const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number
    },
    age: {
        type: Number

    },
    password: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model("UserData", userSchema);
module.exports = userModel;