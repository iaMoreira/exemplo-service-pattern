const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

router.get('/users', userController.index)
router.post('/users', userController.store)
router.get('/users/:id', userController.show)

module.exports = router
