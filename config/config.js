const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://shubhambarthwal:shubham123@cluster0.7dqpu3g.mongodb.net/signuphere"    /* here singeimage is name of data base */
  )
  .then((e) => console.log("config Connected"))
  .catch((e) => console.log("ERRORRRRRRRRRRRRRRRRRRRRRR")); 