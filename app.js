  const {  connectDB } = require("./lib/db.js");
  const router = require("./routes/movies.route.js");
  const express = require("express");
  const app = express();
  const port = 7125;

  //Connect DB
  connectDB();

  //Assign

  // app.get("/", (req, res) => {
  //   res.json({ message: "Hello World!" });
  // });

  app.use("/movie", router);

  //Listen

  // app.listen(port,()=>{
  //     console.log("port",port);
  // })
  //or
  app.listen(port, () => {
    console.log(`port:${port}`);
  });
