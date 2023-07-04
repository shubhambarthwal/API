const joi = require("joi");

const usersvalidation = joi.object({

Product_Detail:joi.string().required(), 
Rating:joi.number().min(1).max(5).required(),
ProductPrice:joi.number().required()  
                                                       
});
module.exports = usersvalidation;    