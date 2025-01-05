const mongoose = require('mongoose');
const URL = "mongodb://localhost:27017/Try";

function connectDB(){
    mongoose
        .connect(URL)
        .then(()=>{console.log({message: "MongoDB connect successfully"})})
        .catch((err)=>{console.log({message: "Connection error: "},err)})
}

module.exports = connectDB;