const express = require('express')
const router = express.Router()
const log_in_controller= require('../controllers/login')
router.post('/in',log_in_controller);  
module.exports = router;       