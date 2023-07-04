const express = require("express");
const router = express.Router();
const { store } = require("../controllers/phone");
const { upload } = require("../middleware/phone");  

router.post("/store", upload.single("image"),store);

module.exports = router;