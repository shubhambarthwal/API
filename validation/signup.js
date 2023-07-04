const joi = require("joi");

const sign_up_validation = joi.object({

Name:joi.string().required(),
Email:joi.string().email().lowercase().required(),
Password:joi.string().lowercase().required(),
Number:joi.number().integer().options({ convert: false}).required()

                                                           
});
module.exports = sign_up_validation;     