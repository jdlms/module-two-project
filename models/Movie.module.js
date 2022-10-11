const mongoose = require("mongoose");

const movie_schema = new mongoose.Schema({
  userId: {
    type: String,
    // required: true,
  },
  filmId: {
    type: Number,
    required: true,
  },
  watchList: {
    type: Boolean,
  },
  review: {
    type: String,
  },
});

const Movie = mongoose.model("movie", movie_schema);

module.exports = { Movie };
