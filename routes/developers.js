const express = require('express');
const router = express.Router();

const developersController = require('../controllers/developers');
/**
 * @swagger
 * /developers:
 *   get:
 *     summary: Get all developers
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', developersController.getAllDevelopers);

router.get('/:id', developersController.getSingleDeveloper);
/**
 * @swagger
 * /developers:
 *   post:
 *     summary: Create a new developer
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Developer created
 */
router.post('/', developersController.createDeveloper);
/**
 * @swagger
 * /developers/{id}:
 *   put:
 *     summary: Update a developer
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Developer updated
 */
router.put('/:id', developersController.updateDeveloper);
/**
 * @swagger
 * /developers/{id}:
 *   delete:
 *     summary: Delete a developer
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Developer deleted
 */
router.delete('/:id', developersController.deleteDeveloper);

module.exports = router;