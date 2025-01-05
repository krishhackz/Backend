const express = require('express');
const app = express();
const connectDB = require('./Config/Database');
const userModel = require('./Model/userSchema');

connectDB();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello World!");
});

app.post('/Create', async (req,res)=>{
    const {name, email, phoneNumber, age, password} = req.body;
    const emailExist = await userModel.findOne({email});
    if(emailExist) res.send({message: "User already exist"});
    const newUser = new userModel(req.body);
    await newUser.save();
    res.send({message: "User created successfully"});
});

app.delete('/remove/:id', async (req,res)=>{
    const userID = req.params.id;
    const userRemove = await userModel.findByIdAndDelete(userID);
    if(userRemove) req.send({message: "User deleted successfully"});
    else req.send({message: "User not found"});

});

app.put('/Update/:_id', async (req,res)=>{
    const userID = req.params.id;
    const Update = req.body;
    const userUpdate = await userModel.findByIdAndUpdate({_id:userID}, Update, {new: true});
    if(userUpdate) res.send({message: "User updated successfully"});
    else res.send({message: "User can't update"});
});

app.listen(3000, ()=>{
    console.log("Server is running...");
})