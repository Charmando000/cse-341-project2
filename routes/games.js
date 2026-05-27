const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/games');
const isAuthenticated = require('../middleware/auth');

/**
 * @swagger
 * /games:
 *   get:
 *     summary: Get all games
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', gamesController.getAllGames);

router.get('/:id', gamesController.getSingleGame);
/* 
  #swagger.tags = ['Games']
  #swagger.summary = 'Create a new game'
  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      title: 'Sekiro',
      genre: 'Action',
      platform: 'PC',
      developer: 'FromSoftware',
      releaseYear: 2019,
      rating: 10,
      multiplayer: false
    }
  }
*/
router.post('/', isAuthenticated, gamesController.createGame);
/* 
  #swagger.tags = ['Games']
  #swagger.summary = 'Update a game'
  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      title: 'Sekiro',
      genre: 'Action',
      platform: 'PC',
      developer: 'FromSoftware',
      releaseYear: 2019,
      rating: 10,
      multiplayer: false
    }
  }
*/
router.put('/:id', isAuthenticated, gamesController.updateGame);
/**
 * @swagger
 * /games/{id}:
 *   delete:
 *     summary: Delete a game
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Game deleted
 */
router.delete('/:id', isAuthenticated, gamesController.deleteGame);

module.exports = router;