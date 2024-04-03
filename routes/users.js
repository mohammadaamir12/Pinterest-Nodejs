const express=require('express')
const app=express()
const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1/127027/aamir")
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err))
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true 
  },
  password: {
    type: String,
    required: true
  }
});


module.exports= mongoose.model('User', userSchema);

 