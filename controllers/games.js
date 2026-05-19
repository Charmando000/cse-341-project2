const Game = require('../models/Game');

const getAllGames = async (req, res) => {
  try {
    const games = await Game.find();

    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getSingleGame = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);

    if (!game) {
      return res.status(404).json({
        message: 'Game not found'
      });
    }

    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const createGame = async (req, res) => {
  try {
    const game = new Game(req.body);

    const savedGame = await game.save();

    res.status(201).json(savedGame);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

const updateGame = async (req, res) => {
  try {
    const updatedGame = await Game.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedGame) {
      return res.status(404).json({
        message: 'Game not found'
      });
    }

    res.status(200).json(updatedGame);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const deleteGame = async (req, res) => {
  try {
    const deletedGame = await Game.findByIdAndDelete(req.params.id);

    if (!deletedGame) {
      return res.status(404).json({
        message: 'Game not found'
      });
    }

    res.status(200).json({
      message: 'Game deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getAllGames,
  getSingleGame,
  createGame,
  updateGame,
  deleteGame
};