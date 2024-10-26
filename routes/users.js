const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.post('/', userController.create)
router.get('/', userController.getAll)
router.get('/:id', userController.getOne)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)


module.exports = router