const user = require("../Model/signup");

const usersvalidation = require("../validation/signup");

const userCtlr = async (req, resp) => {
  let hello;

  const result = usersvalidation.validate(req.body);
  if (result.error) {
    console.log("jn");
    return resp.status(400).send(result.error.details[0].message);
  }

  hello = await user.findOne({ Email:req.body.Email });
  console.log(hello, "hello");

  if (hello) {
    return resp.send(`${req.body.Email} Email already exists`);
  }

  count = await user.find(); 

  if (hello === null) { 
    let data = new user({  
      Name: req.body.Name,
      Number:req.body.Number, 
      Email: req.body.Email,
      Password: req.body.Password,
     
      _id: count.length === 0 ? 1 : count[count.length - 1]._id + 1,

    }); 

    await data.save();
    return resp.json({message:"SUCCESS", data :data });
  }
  //  else {
  //   return ( 
  //     resp.status(400).send(`${req.body.Email} email already exists`),
  //     console.log(`${req.body.Email} email already exists`)
  //   );         
  // }
};
module.exports = userCtlr;
console.log("controller connected");