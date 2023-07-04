const Phone = require("../Model/phone");   
const usersvalidation = require("../validation/phone");

const store = (req, res, next) => {  
  console.log(req.file, "hello"); 

  const result = usersvalidation.validate(req.body);
  if (result.error) {
    console.log("jn");
    return res.status(400).send(result.error.details[0].message);
  }



  let phonee = new Phone({
    Product_Detail: req.body.Product_Detail,
    Rating: req.body.Rating,
    ProductPrice: req.body.ProductPrice,
  });

  if (req.file) {
    console.log(req.file, "okkkk");
    // employee.avatar = req.file.path
    phonee.image = req.file.originalname;
  }
  phonee
    .save()
    .then((response) => {
      res.json({
        message: "Employee added sucessufully",
        data: phonee,
      });
    })
    .catch((error) => {
      res.json({
        messgae: "An error occured!",
      });
    });  
};
module.exports = { store };