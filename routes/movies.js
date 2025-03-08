const express = require("express");

const router = express.Router();

// CRUD Operation

// C - Create
router.get("/", (req, res) => {
//   res.status(200).json({message: "Movie creaed"})
    res.send("movie Viewed")
});

// R - Read
router.post("/", (req, res) => {
  res.send("Movie Listed");
});

// U - Update
router.put("/", (req, res) => {
  res.send("Movie Updated");
});
// D - Delete
router.delete("/", (req, res) => {
  res.send("Movie Deleted");
});

module.exports = router;