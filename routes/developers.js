const express = require('express');
const router = express.Router();
const developersController = require('../controllers/developers');
const isAuthenticated = require('../middleware/auth');

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
/* 
  #swagger.tags = ['Developers']
  #swagger.summary = 'Create a new developer'
  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      name: 'FromSoftware',
      founded: 1986,
      headquarters: 'Japan',
      website: 'https://www.fromsoftware.jp/en/',
      games: ['Dark Souls', 'Sekiro', 'Elden Ring']
    }
  }
*/
router.post('/', isAuthenticated, developersController.createDeveloper);
/* 
  #swagger.tags = ['Developers']
  #swagger.summary = 'Update a developer'
  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
        name: 'FromSoftware',
        founded: 1986,
        headquarters: 'Japan',
        website: 'https://www.fromsoftware.jp/en/',
        games: ['Dark Souls', 'Sekiro', 'Elden Ring']
    }
  }
*/
router.put('/:id', isAuthenticated, developersController.updateDeveloper);
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
router.delete('/:id', isAuthenticated, developersController.deleteDeveloper);

module.exports = router;