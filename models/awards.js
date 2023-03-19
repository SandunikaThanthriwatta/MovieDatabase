const mongoose = require('mongoose');

const awardSchema = new mongoose.Schema({
  name: { type: String, required: true },

  year: { type: Number, required: true },

});

const Award = mongoose.model('Award', awardSchema);

module.exports = Award;
