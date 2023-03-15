const express = require('express')
const router = express.Router()

// ** Controller
const { addData, getAllData } = require('../controllers/users')

// ** Module User
router.post('/user', addData)
router.get('/user/list', getAllData)

module.exports = router
