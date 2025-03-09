const { Schema, model } = require("mongoose");
//Write the Schema
const schema = new Schema({
  title: String,
  desc: String,
});

//Create your Schema
const Movies = model("Movie", schema);
module.exports = Movies;
