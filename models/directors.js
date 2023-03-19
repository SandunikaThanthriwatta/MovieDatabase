const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
  name: { type: String, required: true },

  bio: { type: String },

  dob: Date,

  country: String,
  
  movies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  }]
  
});

const Director = mongoose.model('Director', directorSchema);

module.exports = Director;
