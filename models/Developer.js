const mongoose = require('mongoose');

const developerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  country: {
    type: String,
    required: true
  },

  founded: {
    type: Number,
    required: true
  },

  employees: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Developer', developerSchema);