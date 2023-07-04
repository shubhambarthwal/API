const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv"); 
dotenv.config();

app.use(express.json());
require("./config/config")



mongoose
  .connect(process.env.DATABASE)  
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log("not connect"));


const sign_in_route = require("./Route/signup")
app.use('/sign',sign_in_route)

const log_in_route = require("./Route/login")
app.use('/log',log_in_route)

const phonedetails = require("./Route/phone"); 
app.use("/hello", phonedetails);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
}); 
            
console.log("index file connected");       