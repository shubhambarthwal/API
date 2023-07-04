const express = require('express')
const router = express.Router()
const sign_in_controller= require('../controllers/signup')
router.post('/up',sign_in_controller);
module.exports = router;  