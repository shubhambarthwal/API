const express = require("express");
const app = express();

app.use(express.json());
require("./config/config")


const sign_in_route = require("./Route/signup")
app.use('/sign',sign_in_route)

const log_in_route = require("./Route/login")
app.use('/log',log_in_route)

const phonedetails = require("./Route/phone"); 
app.use("/hello", phonedetails);

app.listen(3000);
console.log("index connected");       