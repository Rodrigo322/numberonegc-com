const { Router } = require('express')

const UserController = require('./controller/UserController')

const router = Router()

router.post('/user', UserController.store)
router.get('/users', UserController.index)
router.delete('/user/:id', UserController.delete)

module.exports = router;