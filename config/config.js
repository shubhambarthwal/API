const mongoose = require("mongoose");
mongoose
  .connect(
    process.env.DATABASE  /* here singeimage is name of data base */
  )
  //done
  .then((e) => console.log("config Connected"))
  .catch((e) => console.log("ERRORRRRRRRRRRRRRRRRRRRRRR"));
