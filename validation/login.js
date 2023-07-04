const joi = require("joi"); 

const log_in_Validation = joi.object({

Email:joi.string().email().lowercase().required(),

Password: joi.string().min(2).max(20).required(),

                                                         
});
module.exports = log_in_Validation; 