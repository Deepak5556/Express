const Movies = require("../models/movies.model");

const movieIndex = async (req, res) => {
  try {
    const moviesList = await Movies.find();
    res.json(moviesList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const movieCreate = async (req, res) => {
  //id,title,des

  //Validate Your Data
  const newMovies = new Movies({
    title: req.body.title,
    desc: req.body.desc,
  });

  try {
    //Successfull
    const movie = await newMovies.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

  // res.send("Movie Created");
  // return res.json(req.body);
};

const movieUpdate = (req, res) => {
  res.send("Movie Updated");
};

const movieDelete = (req, res) => {
  res.send("Movie Deleted");
};

module.exports = { movieIndex, movieCreate, movieUpdate, movieDelete };
