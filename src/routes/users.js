// Rotas para usuários

const express = require('express')
const router = express.Router()
const usersMiddlewares = require('../middlewares/users')
const usersController = require('../controllers/users')
const authMiddleware = require('../middlewares/auth')

router.post('/users', usersMiddlewares.validateCreateUsers, usersController.createUsers)
router.get('/users/:id', authMiddleware.validateToken, usersMiddlewares.validateGetUsers, usersController.getUsersById)
router.get('/users', authMiddleware.validateToken, usersController.getUsers)
router.delete('/users/:id', authMiddleware.validateToken, usersMiddlewares.validateDeleteUsers, usersController.deleteUsers)
router.put('/users/:id', authMiddleware.validateToken, usersMiddlewares.validateUpdateUsers, usersController.updateUsers)

module.exports = router;