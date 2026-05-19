const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/games');

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
/**
 * @swagger
 * /games:
 *   post:
 *     summary: Create a new game
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Game created
 */
router.post('/', gamesController.createGame);
/**
 * @swagger
 * /games/{id}:
 *   put:
 *     summary: Update a game
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Game updated
 */
router.put('/:id', gamesController.updateGame);
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
router.delete('/:id', gamesController.deleteGame);

module.exports = router;