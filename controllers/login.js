const sign_up_schema = require("../Model/signup");
const jwt = require('jsonwebtoken')
const secretkey="secretkey" 
const bcrypt = require("bcrypt")
   
const usersvalidation = require("../validation/login");

const log_in_controller = async (req, resp) => {
  console.log(req.body);

  const result = usersvalidation.validate(req.body);
  if (result.error) {
    console.log("jn");
    return resp.status(400).send(result.error.details[0].message);
  }

  if ("Email" in req.body === false) {
    return resp.send("Please enter Email");
  }

  if ("Password" in req.body === false) {
    return resp.send("Please enter Password");
  }

  const user = await sign_up_schema.findOne({ Email: req.body.Email });
  console.log(user, "userrrrrr");

  if (user === null) {
    console.log("ok");
    return resp.send("no user found ");
  }



  const isEqual = await bcrypt.compare(req.body.Password, user.Password);


  if (!isEqual) {
    return  resp.send ({success: false, data: null, message: 'Password is incorrect!' })
  }

  if(isEqual && req.body.Email === user.Email ){
    const token = jwt.sign({id:user._id},secretkey,{expiresIn:"2h"}) 
     resp.json({userdetail:user,tokenuigiugitygtyigtyi:token})    
     console.log(token,"okkkkkk")  
 }
   

  // if (req.body.Password !== user.Password) {
  //   return resp.send("incorrect password");
  // }
  // if (req.body.Email === user.Email && req.body.Password === user.Password) {

  //   resp.json({message:"sucess",data:user})

  }
module.exports=log_in_controller
