const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  genre: {
    type: String,
    required: true
  },

  platform: {
    type: String,
    required: true
  },

  developer: {
    type: String,
    required: true
  },

  releaseYear: {
    type: Number,
    required: true
  },

  rating: {
    type: Number,
    required: true
  },

  multiplayer: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('games', gameSchema);