exports.movieIndex = (req, res) => {
  res.send("Movie Viewed");
};

exports.movieCreate = (req, res) => {
  //id,title,des
  //Creating Movie info
  // res.send("Movie Created");
  return res.json(req.body);
};

exports.movieUpdate = (req, res) => {
  res.send("Movie Updated");
};

exports.movieDelete = (req, res) => {
  res.send("Movie Deleted");
};
