const { Schema, model } = require("mongoose");
//Write the Schema
const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: String,
});

//Create your Schema
const Movies = model("Movie", schema);
module.exports = Movies;
