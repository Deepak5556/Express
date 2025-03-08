const express = require("express");
const { movieIndex, movieCreate, movieUpdate, movieDelete } = require("../controller/movies.controller");

const router = express.Router();

// CRUD Operation

// C - Create
router.get("/",movieIndex );

// R - Read
router.post("/", movieCreate);

// U - Update
router.put("/", movieUpdate);
// D - Delete
router.delete("/", movieDelete);

module.exports = router;