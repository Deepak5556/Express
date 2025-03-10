const express = require("express");
const { movieIndex, movieCreate, movieUpdate, movieDelete,movieShow } = require("../controller/movies.controller.js");

const router = express.Router();

// CRUD Operation

// C - Create
router.post("/", movieCreate);

// R - Read
router.get("/",movieIndex );

//Particular id
router.get("/:id", movieShow)

// U - Update
router.put("/", movieUpdate);

// D - Delete
router.delete("/", movieDelete);


module.exports = router;