const router = require("./routes/movies.route.js")
const express = require("express");
const app = express();
const port = 7125;

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
