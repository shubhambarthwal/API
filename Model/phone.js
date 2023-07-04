const mongoose = require("mongoose");

const phone_in_Schema = new mongoose.Schema(
  {
    image: {
      type: String, 

    },
    Product_Detail: {
      type: String,
    
    },  
    Rating:{
        type: Number,
       
    },
    ProductPrice:{
        type: Number,
     
    }
  },
);
module.exports = mongoose.model("phone", phone_in_Schema);
console.log("userSchema connected");