const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({

  title: { type: String, required: true },

  released_year: { type: Number, required: true },

  main_actor: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Actor'
  }],

  director:  [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Director'
  }],

  cast: [{
    name: { type: String, required: true },
    bio: String,
    dob: Date
  }],

  genre: { type: String, required: true },


  awards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Award'
  }],

  language:  { type: String, required: true },

  plot: String,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
