const mongoose = require("mongoose");

const sign_in_Schema = new mongoose.Schema(
  {
     Name: {
      type: String,
      required: true,
    },
    Number: {
      type: Number,
      required: true,
    },
    Email: {
      type: String,
      required:true,
    },
    Password:{
        type: String,
        required: true, 
    },
   
    _id: Number,
    
  },

  { _id: false }  

);
module.exports = mongoose.model("signup", sign_in_Schema);
console.log("userSchema connected");